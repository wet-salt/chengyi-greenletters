import {seedPosts,topics,works,appearances,milestones,encounters} from "./content";
export type Post={id:string;nickname:string;topic:string;content:string;createdAt:string;seed?:boolean;mine?:boolean};
export type Comment={id:string;postId:string;nickname:string;content:string;createdAt:string};
type Reaction={targetId:string;kind:"like"|"save"};
type Saved={version:1;posts:Post[];comments:Comment[];reactions:Reaction[];days:string[]};
export type Community={posts:Post[];comments:Comment[];counts:{targetId:string;count:number}[];reactions:Reaction[];days:string[];today:string};
export const LOCAL_COMMUNITY_KEY="greenletters-local-community-v1";
const archiveIds=new Set([...works,...appearances,...milestones,...encounters].map(item=>`archive:${item.id}`));
const blank=():Saved=>({version:1,posts:[],comments:[],reactions:[],days:[]});
const today=()=>new Date(Date.now()+8*3600000).toISOString().slice(0,10);
const text=(value:unknown,max:number)=>typeof value==="string"&&value.trim().length>0&&value.length<=max;
const record=(value:unknown):value is Record<string,unknown>=>!!value&&typeof value==="object";
function restore(raw:string|null):Saved{
  if(!raw)return blank();
  try{
    const value=JSON.parse(raw);if(!record(value)||value.version!==1)return blank();
    const state=blank();
    if(Array.isArray(value.posts))state.posts=value.posts.filter((p:unknown)=>record(p)&&typeof p.id==="string"&&p.id.startsWith("local:")&&text(p.nickname,20)&&text(p.content,1000)&&typeof p.topic==="string"&&topics.includes(p.topic)&&typeof p.createdAt==="string"&&Number.isFinite(Date.parse(p.createdAt))).map((p:Post)=>({...p,mine:true,seed:false}));
    const ids=new Set([...state.posts,...seedPosts].map(p=>p.id));
    if(Array.isArray(value.comments))state.comments=value.comments.filter((c:unknown)=>record(c)&&typeof c.id==="string"&&typeof c.postId==="string"&&ids.has(c.postId)&&text(c.nickname,20)&&text(c.content,300)&&typeof c.createdAt==="string"&&Number.isFinite(Date.parse(c.createdAt)));
    if(Array.isArray(value.reactions))state.reactions=[...new Map(value.reactions.filter((r:unknown)=>record(r)&&typeof r.targetId==="string"&&(r.kind==="save"&&(ids.has(r.targetId)||archiveIds.has(r.targetId))||r.kind==="like"&&ids.has(r.targetId))).map((r:Reaction)=>[`${r.kind}:${r.targetId}`,r])).values()] as Reaction[];
    if(Array.isArray(value.days))state.days=[...new Set(value.days.filter((d:unknown)=>typeof d==="string"&&/^\d{4}-\d{2}-\d{2}$/.test(d)))] as string[];
    return state;
  }catch{return blank();}
}
export function localSnapshot(state:Saved=blank()):Community{
  return {posts:[...state.posts,...seedPosts.map(p=>({...p,mine:false}))],comments:state.comments,reactions:state.reactions,days:state.days,today:today(),counts:state.reactions.filter(r=>r.kind==="like").map(r=>({targetId:r.targetId,count:1}))};
}
type StorageLike=Pick<Storage,"getItem"|"setItem">;
export function createLocalCommunityStore(storage:StorageLike|null){
  let memory=blank();
  function readSaved(){try{if(storage)memory=restore(storage.getItem(LOCAL_COMMUNITY_KEY));}catch{}return memory;}
  return {
    read:()=>localSnapshot(readSaved()),
    act(action:string,payload:Record<string,unknown>){
      const state=structuredClone(readSaved());
      const nickname=typeof payload.nickname==="string"?payload.nickname.trim()||"一颗奇异果":"一颗奇异果";
      if(nickname.length>20)throw new Error("昵称请控制在 20 字以内。");
      const targetId=typeof payload.targetId==="string"?payload.targetId:"";
      const postExists=[...state.posts,...seedPosts].some(p=>p.id===targetId);
      if(action==="post"||action==="comment"){
        const content=typeof payload.content==="string"?payload.content.trim():"";
        if(!text(content,action==="post"?1000:300))throw new Error(action==="post"?"来信需为 1–1000 字。":"评论需为 1–300 字。");
        const entry={id:`local:${crypto.randomUUID()}`,nickname,content,createdAt:new Date().toISOString()};
        if(action==="post"){
          const topic=typeof payload.topic==="string"?payload.topic:"";
          if(!topics.includes(topic))throw new Error("请选择一个话题。");
          state.posts.unshift({...entry,topic,mine:true});
        }else{
          if(!postExists)throw new Error("这封来信已不存在。");
          state.comments.push({...entry,postId:targetId});
        }
      }else if(action==="like"||action==="save"){
        if(!postExists&&!(action==="save"&&archiveIds.has(targetId)))throw new Error("这条内容已不存在。");
        if(typeof payload.active!=="boolean")throw new Error("无效操作。");
        state.reactions=state.reactions.filter(r=>r.targetId!==targetId||r.kind!==action);
        if(payload.active)state.reactions.push({targetId,kind:action});
      }else if(action==="checkin"){
        if(!state.days.includes(today()))state.days.push(today());
      }else if(action==="delete"){
        if(!state.posts.some(p=>p.id===targetId))throw new Error("只能删除本地创建的来信。");
        state.posts=state.posts.filter(p=>p.id!==targetId);
        state.comments=state.comments.filter(c=>c.postId!==targetId);
        state.reactions=state.reactions.filter(r=>r.targetId!==targetId);
      }else throw new Error("未知操作。");
      memory=state;let persisted=false;
      try{if(storage){storage.setItem(LOCAL_COMMUNITY_KEY,JSON.stringify(state));persisted=true;}}catch{storage=null;}
      return {community:localSnapshot(state),persisted};
    }
  };
}
