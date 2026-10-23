type ProviderSong = {
  mid?: string; name?: string; title?: string; interval?: number;
  singer?: {name?:string}[];
  action?: {play?:boolean;try?:boolean}; pay?: {pay_play?:number};
  playUrl?:string;url?:string;
};
export type MusicRecording = {url:string;duration:number;title:string;mime:string};
export const musicSources:Record<string,{mid:string;title:string;artists?:string[]}> = {
  sumeng:{mid:"002lQlHL3o4I0T",title:"溯梦独白"},
  "little-love":{mid:"0017Tprz2n0wxC",title:"小情歌"},
  "because-love":{mid:"003HJkkj2c7CYx",title:"因为爱所以爱"},
  "road-to-horizon":{mid:"003eA7Vb1PqqXT",title:"行路天涯"},
  "red-dust":{mid:"000sn5Bm1yzfW9",title:"赴红尘"},
  "busy-world":{mid:"000R6ECm4a1BA1",title:"人世太匆忙"},
  "jianghu":{mid:"0007lUdT2TdMYH",title:"就在江湖之上"},
  "forget-river":{mid:"001FStyq2r3sGc",title:"忘川"},
  // This exact recording is the 2021 New Year chorus, credited as 群星.
  "hand-in-hand":{mid:"004V3bNl3AhuLc",title:"心手相握",artists:["群星"]},
  "guard":{mid:"00456EAF3oeDD1",title:"守"},
  "raging-waves":{mid:"003IW9zg3j0pnO",title:"生如狂澜"},
  "rose-oath":{mid:"0023zfJV2cNYLd",title:"蔷薇恋誓"},
};
const normalize=(text:string)=>text.replace(/[\s，,·_-]/g,"");
export function permittedAudioUrl(value:unknown):value is string {
  if(typeof value!=="string")return false;
  try{const url=new URL(value);return url.protocol==="https:"&&!url.username&&!url.password&&!url.port&&
    (url.hostname==="aqqmusic.tc.qq.com"||url.hostname.endsWith(".stream.qqmusic.qq.com"));}catch{return false;}
}
export function secureAudioUrl(value:unknown):string|null {
  if(typeof value!=="string")return null;
  try {const url=new URL(value);if(url.protocol==="http:")url.protocol="https:";return permittedAudioUrl(url.href)?url.href:null;}catch{return null;}
}
export function parseMusicPage(html:string,id:string):MusicRecording {
  const source=musicSources[id];if(!source)throw new Error("unknown_track");
  const match=html.match(/window\.__ssrFirstPageData__\s*=\s*([\s\S]*?)<\/script>/);
  if(!match)throw new Error("missing_song_data");
  let data:unknown=JSON.parse(match[1].trim().replace(/;$/,""));
  for(let i=0;i<3&&typeof data==="string";i++)data=JSON.parse(data);
  if(!data||typeof data!=="object")throw new Error("invalid_song_data");
  const document=data as {song?:ProviderSong;songList?:ProviderSong[]};
  const song=document.song||document.songList?.[0];
  if(!song||song.mid!==source.mid||!song.singer?.some(artist=>["成毅",...(source.artists||[])].includes(artist.name||""))||
     !normalize(song.name||song.title||"").includes(normalize(source.title)))throw new Error("wrong_recording");
  if(song.action?.play!==true||song.action.try===true||song.pay?.pay_play!==0)throw new Error("recording_unavailable");
  const rawUrl=song.playUrl||song.url;const url=secureAudioUrl(rawUrl);
  if(!url){let location="missing";try{const invalid=new URL(rawUrl||"");location=`${invalid.protocol.replace(/[^a-z]/g,"")}_${invalid.hostname.replace(/[^a-z0-9]/g,"_").slice(0,80)}`;}catch{}throw new Error(`invalid_audio_url_${location}`);}
  const duration=Number(song.interval);if(!Number.isFinite(duration)||duration<=0||duration>1800)throw new Error("invalid_duration");
  return {url,duration,title:song.title||song.name||source.title,mime:new URL(url).pathname.endsWith(".mp3")?"audio/mpeg":"audio/mp4"};
}
export function startsWithAudio(chunk:Uint8Array,mime:string) {
  if(chunk.length<12)return false;
  if(mime==="audio/mp4")return String.fromCharCode(...chunk.slice(4,8))==="ftyp";
  return String.fromCharCode(...chunk.slice(0,3))==="ID3"||(chunk[0]===255&&(chunk[1]&224)===224);
}

const cache=new Map<string,{expires:number;result:Promise<MusicRecording>}>();
export function forgetRecording(id:string){cache.delete(id);}
export function resolveRecording(id:string):Promise<MusicRecording> {
  const source=musicSources[id];if(!source)return Promise.reject(new Error("unknown_track"));
  const cached=cache.get(id);if(cached&&cached.expires>Date.now())return cached.result;
  const result=(async()=>{
    const url=`https://i.y.qq.com/v8/playsong.html?ADTAG=ryqq.songDetail&songmid=${source.mid}&songid=0&songtype=0`;
    const response=await fetch(url,{headers:{"User-Agent":"Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36",Accept:"text/html"},signal:AbortSignal.timeout(12000)});
    if(!response.ok)throw new Error(`provider_http_${response.status}`);
    const html=await response.text();if(html.length>500000)throw new Error("invalid_song_page");
    return parseMusicPage(html,id);
  })();
  const entry={expires:Date.now()+180000,result};cache.set(id,entry);
  void result.catch(()=>{if(cache.get(id)===entry)cache.delete(id);});return result;
}
