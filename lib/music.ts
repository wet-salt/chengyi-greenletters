export type Song = {
  id: string;
  title: string;
  artist: string;
  note: string;
  source?: string;
  src?: string;
  online?: boolean;
  local?: boolean;
  unavailable?: string;
};

// Resolve current public playback addresses on the server instead of saving
// expiring media links or treating platform sharing pages as audio files.
export const songs: Song[] = [
  {id:"sumeng",title:"溯梦独白",artist:"成毅 · Live",note:"默认曲目 · 45 秒现场片段",source:"https://y.qq.com/n/ryqq_v2/songDetail/435568931",online:true},
  {id:"little-love",title:"小情歌",artist:"成毅 · Live",note:"2026 昆山超酷音乐盛典现场",source:"https://y.qq.com/n/ryqq_v2/songDetail/715163000",online:true},
  {id:"because-love",title:"因为爱，所以爱",artist:"成毅 · Live",note:"2026 昆山超酷音乐盛典现场",source:"https://y.qq.com/n/ryqq_v2/songDetail/715164918",online:true},
  {id:"road-to-horizon",title:"行路天涯",artist:"成毅 · Live",note:"《长安二十四计》· 2026 昆山超酷音乐盛典现场版",source:"https://y.qq.com/n/ryqq_v2/songDetail/715162999",online:true},
  {id:"fearless",title:"何所惧",artist:"成毅",note:"《天地剑心》王权富贵曲",source:"https://y.qq.com/n/ryqq_v2/songDetail/611978801",unavailable:"原平台收听 · 会员曲目"},
  {id:"sea-laugh",title:"沧海一声笑",artist:"成毅",note:"《赴山海》江湖概念曲",source:"https://y.qq.com/n/ryqq_v2/songDetail/603099519",unavailable:"原平台收听 · 会员曲目"},
  {id:"dare",title:"敢当",artist:"成毅",note:"2025 · 抗战胜利 80 周年推广曲",source:"https://y.qq.com/n/ryqq_v2/songDetail/592663179",unavailable:"原平台收听 · 会员曲目"},
  {id:"red-dust",title:"赴红尘",artist:"成毅 · Live",note:"《赴山海》OST · 2024—2025 湖南卫视跨年现场版",source:"https://y.qq.com/n/ryqq_v2/songDetail/600279157",online:true},
  {id:"busy-world",title:"人世太匆忙",artist:"成毅 / 严艺丹 · Live",note:"《莲花楼》· 主题演唱会合唱版",source:"https://y.qq.com/n/ryqq_v2/songDetail/437731144",online:true},
  {id:"jianghu",title:"就在江湖之上",artist:"成毅 · Live",note:"《莲花楼》· 与《天涯》的现场串烧版",source:"https://y.qq.com/n/ryqq_v2/songDetail/461008676",online:true},
  {id:"forget-river",title:"忘川",artist:"成毅 · Live",note:"《沉香如屑》人物曲 · 40 秒现场片段",source:"https://y.qq.com/n/ryqq_v2/songDetail/410517765",online:true},
  {id:"stay-together",title:"相守",artist:"成毅",note:"《与君歌》插曲",source:"https://y.qq.com/n/ryqq_v2/songDetail/321127264",unavailable:"原平台收听 · 会员曲目"},
  {id:"hand-in-hand",title:"心手相握",artist:"成毅参与 · 群星合唱",note:"浙江卫视 2021 跨年晚会主题曲",source:"https://y.qq.com/n/ryqq_v2/songDetail/127574516",online:true},
  {id:"guard",title:"守",artist:"成毅 · Live",note:"《琉璃》人物曲 · 79 秒现场片段",source:"https://y.qq.com/n/ryqq_v2/songDetail/503411783",online:true},
  {id:"raging-waves",title:"生如狂澜",artist:"侯明昊 / 成毅 / 张博宇",note:"《怒海潜沙&秦岭神树》片尾曲 · 合唱版",source:"https://y.qq.com/n/ryqq_v2/songDetail/233287006",online:true},
  {id:"deep-love",title:"如果我深爱着你",artist:"成毅",note:"2017 · 个人单曲",source:"https://y.qq.com/n/ryqq_v2/songDetail/202746104",unavailable:"原平台收听 · 会员曲目"},
  {id:"goodbye-before",title:"再见以前",artist:"成毅",note:"2017 · 个人单曲",source:"https://y.qq.com/n/ryqq_v2/songDetail/201665286",unavailable:"原平台收听 · 会员曲目"},
  {id:"rose-oath",title:"蔷薇恋誓",artist:"成毅",note:"《诡爱》主题曲",source:"https://y.qq.com/n/ryqq_v2/songDetail/108887297",online:true},
];

export function audioFileTitle(filename:string) {
  return filename.replace(/\.[^.]+$/, "").trim().slice(0,80) || "我的一首歌";
}
export function matchingSong(filename:string, tracks:Song[]) {
  const name=filename.replace(/[\s，,·_-]/g,"");
  return tracks.find(song=>name.includes(song.title.replace(/[\s，,·_-]/g,"")));
}
export function formatMusicTime(seconds:number) {
  if(!Number.isFinite(seconds)||seconds<0)return "0:00";
  const n=Math.floor(seconds);return `${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`;
}
