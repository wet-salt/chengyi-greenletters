export const sitePages = [
  {id:"home",href:"/",title:"首页",number:"00",subtitle:"一封慢慢长成的信",description:"从初见的心动，到长久的陪伴。"},
  {id:"archive",href:"/archive",title:"明星轨迹",number:"01",subtitle:"沿着时光，认识成毅。",description:"成长年表、影视作品、综艺出演、品牌活动与舞台盛典。"},
  {id:"together",href:"/together",title:"双向奔赴",number:"02",subtitle:"你奔赴的喜欢，也在奔向你。",description:"生日相逢、绿海与歌声，收藏每一次温柔的回应。"},
  {id:"community",href:"/community",title:"粉丝互动",number:"03",subtitle:"在这里，喜欢有回音。",description:"写一封来信，分享心动，也点亮今日份的陪伴。"},
] as const;
export type PageKey = typeof sitePages[number]["id"];
export const pageHref = (id:PageKey)=>sitePages.find(page=>page.id===id)!.href;
export function letterHref(topic?:string){const params=new URLSearchParams({compose:"1"});if(topic)params.set("topic",topic);return `/community?${params}`;}
