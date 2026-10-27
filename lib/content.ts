export type ArchiveItem = {
  id: string; year: string; date: string; title: string; category: string;
  role?: string; detail: string; source: string; sourceName: string;
  image?: string; imageSource?: string; status?: string;
};
export const biographySource = "https://bkso.baidu.com/item/成毅/7350357";
const wiki = "https://zh.wikipedia.org/wiki/成毅";
const paper = "https://www.thepaper.cn/newsDetail_forward_21301772";
const lotus = "https://www.iq.com/play/莲花楼-brhu6j1n3g?lang=zh_cn";
export const milestones: ArchiveItem[] = [
  {id:"birth",year:"1990",date:"1990.05.17",title:"故事从湖南开始",category:"成长",detail:"成毅出生于湖南怀化。一个关于热爱与坚持的故事，从这里慢慢展开。",source:"https://www.joox.com/mo/artist/Y9qrByf1x4hee4IQ5M5U0w%3D%3D",sourceName:"JOOX 艺人介绍"},
  {id:"study",year:"2008",date:"2008",title:"走向表演之路",category:"成长",detail:"进入中央戏剧学院学习表演，为之后的演员生涯打下基础。",source:wiki,sourceName:"人物资料"},
  {id:"debut",year:"2011",date:"2011",title:"初见荧屏",category:"成长",detail:"参演《唐宫美人天下》，饰演冯小宝，开启演艺道路。",source:wiki,sourceName:"人物资料"},
  {id:"qingyun",year:"2016",date:"2016",title:"少年意气，渐被看见",category:"成长",detail:"在《青云志》中饰演林惊羽；同年参与《一年级·毕业季》。",source:wiki,sourceName:"人物资料"},
  {id:"sifeng",year:"2020",date:"2020.08.06",title:"与禹司凤相逢",category:"成长",detail:"主演《琉璃》，以禹司凤一角走进更多观众的视野。",source:biographySource,sourceName:"人物资料"},
  {id:"newroles",year:"2022",date:"2022",title:"走进不同的人生",category:"成长",detail:"《山河月明》《沉香如屑·沉香重华》《底线》相继与观众见面。",source:paper,sourceName:"Madame Figaro 专访"},
  {id:"lianhua",year:"2023",date:"2023.07.23",title:"江湖一程，莲花一朵",category:"成长",detail:"《莲花楼》开播，成毅饰演李莲花 / 李相夷。",source:lotus,sourceName:"爱奇艺作品页"},
  {id:"yun",year:"2024",date:"2024.11.13",title:"潜入风云，守住信念",category:"成长",detail:"谍战剧《深潜》播出，饰演云弘深，继续探索不同题材。",source:"https://www.iq.com/album/深潜-2024-1sqlg4yh4vp?lang=zh_cn",sourceName:"爱奇艺作品页"},
  {id:"2025",year:"2025",date:"2025",title:"赴山海，见天地",category:"成长",detail:"《赴山海》《天地剑心》《长安二十四计》先后播出，新的角色继续出发。",source:biographySource,sourceName:"人物资料"},
  {id:"2026",year:"2026",date:"2026.02.12",title:"步履不停",category:"成长",detail:"《两京十五日》发布杀青消息。这一页记录拍摄节点，播出信息以正式官宣为准。",source:"https://qiye.eastday.com/n34/20260212/c4c238af9f9c41a1ae1198eb2a2eb212.html",sourceName:"东方网 · 杀青报道"},
];
export const works: ArchiveItem[] = [
  {id:"shouhuang",year:"2026",date:"2026.09.26 · 杀青",title:"狩谎",category:"电视剧",role:"林彦廷",detail:"悬疑剧。成毅饰演心理学家林彦廷，在谎言与人心的博弈中追寻真相。剧集已于 2026 年 9 月杀青，优酷宣布全网独播；具体播出时间以官方公告为准。",source:"https://v.youku.com/v_show/id_XNjU2MTQzMTc0MA%3D%3D.html",sourceName:"优酷 · 预告及剧集信息",status:"待播",image:"https://k.sinaimg.cn/n/sinakd20260511ac/416/w690h526/20260511/2ff2-f2f21deca8f26f713ea6023f834e0514.jpg/w700d1q75cms.jpg?by=cms_fixed_width",imageSource:"https://ent.sina.cn/2026-05-11/detail-inhxptqz1765792.d.html"},
  {id:"yingxiong",year:"2026",date:"2026.10.13 · 官宣",title:"不见英雄花不开",category:"电视剧",role:"王轩 / 青年王展飞",detail:"当代军旅题材剧，以当代优抚工作和志愿军老兵的往事交织展开。成毅饰演王轩与青年王展飞。项目已官宣启动，拍摄及播出安排以官方消息为准。",source:"https://news.bjd.com.cn/2026/10/15/11995848.shtml",sourceName:"北京日报 · 官宣报道",status:"待拍",image:"https://static.bjd.com.cn/dams-res/editing/image/202610/15/pdq7avst8ogwb7a3g4jaz0st_m.jpg",imageSource:"https://news.bjd.com.cn/2026/10/15/11995848.shtml"},

  {id:"lotus",year:"2023",date:"2023.07.23",title:"莲花楼",category:"电视剧",role:"李莲花 / 李相夷",detail:"古装武侠悬疑。江湖、故人和未解的谜，在一座移动的莲花楼里再次交汇。",source:lotus,sourceName:"爱奇艺",image:"/chengyi-greenletters/images/lotus.jpg",imageSource:"https://min.news/en/entertainment/85518ccbca786b859c13eb30e279c671.html"},
  {id:"liuli",year:"2020",date:"2020.08.06",title:"琉璃",category:"电视剧",role:"禹司凤",detail:"古装仙侠。收藏那个温柔坚定的禹司凤，也收藏初次被角色打动的瞬间。",source:"https://baike.sogou.com/m/fullLemma?g_ut=3&lid=53506850",sourceName:"人物作品资料",image:"/chengyi-greenletters/images/liuli.jpg",imageSource:"https://www.imdb.com/title/tt11384656/mediaviewer/rm3709046017/"},
  {id:"deep",year:"2024",date:"2024.11.13",title:"深潜",category:"电视剧",role:"云弘深",detail:"年代谍战。从家仇到家国，一位青年在重重迷局中选择自己的道路。",source:"https://www.iq.com/album/深潜-2024-1sqlg4yh4vp?lang=zh_cn",sourceName:"爱奇艺",image:"/chengyi-greenletters/images/deep.jpg",imageSource:"https://www.imdb.com/title/tt32499877/"},
  {id:"changan",year:"2025",date:"2025.12.12",title:"长安二十四计",category:"电视剧",role:"谢淮安",detail:"古装悬疑。以谢淮安的故事，展开长安城中的谋局。",source:"https://ent.china.com.cn/2025-12/15/content_43305890.shtml",sourceName:"中国网 · 开播报道",image:"https://n.sinaimg.cn/sinakd/sni/755/w2000h3555/20251211/64bf-2f5b938622b3fa2c390400f5f9873c94.jpg",imageSource:"https://k.sina.com.cn/article_6579479488_1882ae3c004001h65s.html"},
  {id:"jianxin",year:"2025",date:"2025.10.25",title:"天地剑心",category:"电视剧",role:"王权富贵",detail:"古装奇幻。剑与道心之间，王权富贵追寻自己所相信的世界。",source:"https://www.cnsa.cn/art/2025/10/24/art_1989_47719.html",sourceName:"中国网络视听节目服务协会",image:"https://assets.recordchina.co.jp/newRc/m1200/20251023/616c09298fd28896f410ec47baa181db.jpg",imageSource:"https://www.recordchina.co.jp/pics.php?id=962623"},
  {id:"shan-hai",year:"2025",date:"2025.09.11",title:"赴山海",category:"电视剧",role:"萧秋水 / 李沉舟 / 肖明明",detail:"武侠故事中一人分饰三角，从少年剑客写到江湖风云。",source:"https://m.bjnews.com.cn/detail/1757579118168027.html",sourceName:"新京报",image:"https://media.bjnews.com.cn/fz/html/AttachPubDev/2024/5/lisc2024518113541919215.jpg",imageSource:"https://m.bjnews.com.cn/detail/1716001436168783.html"},
  {id:"southwind",year:"2023",date:"2023.09.12",title:"南风知我意",category:"电视剧",role:"傅云深",detail:"都市情感。另一种温柔，另一段关于爱与成长的故事。",source:biographySource,sourceName:"人物作品资料",image:"https://p4.itc.cn/q_70/images01/20210416/3a497fa7367a4f74ad38209b9da21c74.jpeg",imageSource:"https://www.sohu.com/picture/461098582"},
  {id:"bottomline",year:"2022",date:"2022.09.19",title:"底线",category:"电视剧",role:"周亦安",detail:"法治题材。年轻法官的成长，也有鲜活的日常与坚守。",source:paper,sourceName:"Madame Figaro 专访",image:"https://n.sinaimg.cn/jiangsu/transform/266/w640h426/20231122/3f2b-33b4de780d422e05f7c814f057c6fb23.png",imageSource:"https://jiangsu.sina.cn/news/2023-11-22/detail-imzvnvcr5412695.d.html"},
  {id:"immortal",year:"2022",date:"2022",title:"沉香如屑·沉香重华",category:"电视剧",role:"应渊 / 唐周 / 玄夜",detail:"古装仙侠。一人分饰多角，呈现不同身份与情绪。",source:paper,sourceName:"Madame Figaro 专访",image:"https://pics.filmaffinity.com/immortal_samsara-356453109-large.jpg",imageSource:"https://www.filmaffinity.com/us/film875455.html"},
  {id:"shanhe",year:"2022",date:"2022.04.06",title:"山河月明",category:"电视剧",role:"少年朱棣",detail:"历史题材，特别主演少年朱棣。",source:paper,sourceName:"Madame Figaro 专访",image:"https://stat.ameba.jp/user_images/20241015/00/nemuineko-1w22/f3/1e/j/o0720108015498044115.jpg",imageSource:"https://ameblo.jp/nemuineko-1w22/entry-12871030836.html"},
  {id:"jun",year:"2021",date:"2021.08.08",title:"与君歌",category:"电视剧",role:"齐焱",detail:"古装情感悬疑。少年天子的另一面。",source:"https://baike.sogou.com/m/fullLemma?g_ut=3&lid=53506850",sourceName:"人物作品资料",image:"https://image.tmdb.org/t/p/original/etgtCY1GeJWNRB3RoaogVJtVeMa.jpg",imageSource:"https://www.themoviedb.org/tv/129231/images/posters?language=zh-CN"},
  {id:"nuha",year:"2019",date:"2019",title:"怒海潜沙&秦岭神树",category:"电视剧",role:"张起灵 / 张不逊",detail:"冒险悬疑，探索一人分饰两角的表演。",source:wiki,sourceName:"人物作品资料",image:"https://www.starshangchina.com/upload/jpeg/3371951c5a3497e60086e2f53af6ded8.jpeg",imageSource:"https://www.starshangchina.com/article/03914fdf9365cbd0.html"},
  {id:"qingyun-work",year:"2016",date:"2016",title:"青云志",category:"电视剧",role:"林惊羽",detail:"古装仙侠，记录少年林惊羽的意气。",source:wiki,sourceName:"人物作品资料",image:"https://n.sinaimg.cn/ent/transform/20151208/9NCC-fxmifzh4412322.jpg",imageSource:"https://ent.sina.com.cn/v/m/2015-12-08/doc-ifxmihae9281257.shtml"},
  {id:"gui-ai",year:"2012",date:"2012",title:"诡爱",category:"电影",role:"苏阳",detail:"早期电影作品，饰演苏阳。",source:wiki,sourceName:"人物作品资料",image:"https://m.media-amazon.com/images/M/MV5BZjJhYWM4MzQtODUxYS00MWU1LTlmOWEtYjFlMTU3YmEzNDg3XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",imageSource:"https://www.imdb.com/title/tt6371906/"},
  {id:"savior",year:"2015",date:"2015",title:"不可思异",category:"电影",role:"田野",detail:"科幻喜剧，收录早期银幕作品。",source:wiki,sourceName:"人物作品资料",image:"https://m.media-amazon.com/images/M/MV5BODQ0YWJkZTQtODNjOC00NDE0LTllZWMtZWI3ZDk5YmE0YmEyXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg",imageSource:"https://www.imdb.com/title/tt5114564/mediaviewer/rm3628392705/"},
  {id:"liangjing",year:"2026",date:"2026.02.12 · 杀青",title:"两京十五日",category:"拍摄记录",role:"朱瞻基",detail:"改编自马伯庸同名小说。当前卡片收录杀青节点，未在本站确认首播日期。",source:"https://qiye.eastday.com/n34/20260212/c4c238af9f9c41a1ae1198eb2a2eb212.html",sourceName:"东方网",status:"拍摄节点",image:"https://k.sinaimg.cn/n/sinakd20260303ac/291/w401h690/20260303/e144-07b4fc61e4371dfbb214e2f9dd4ec734.jpg/w700d1q75cms.jpg",imageSource:"https://k.sina.com.cn/article_7879776328_1d5abd84806801b75w.html"},
];
export const appearances: ArchiveItem[] = [
  {id:"grade-one",year:"2016",date:"2016",title:"一年级·毕业季",category:"综艺",role:"科班生队长",detail:"校园纪实节目，记录表演学习、排练与成长。",source:"https://www.mgtv.com/h/295121.html",sourceName:"芒果 TV"},
  {id:"run",year:"2020",date:"2020.12",title:"奔跑吧·黄河篇",category:"综艺",role:"飞行嘉宾",detail:"户外竞技节目中的公开出演记录。",source:biographySource,sourceName:"人物资料"},
  {id:"forensic",year:"2022",date:"2022.03",title:"初入职场的我们·法医季",category:"综艺",role:"节目嘉宾",detail:"职场纪实节目中的出演记录。",source:"https://en.wikipedia.org/wiki/Cheng_Yi_(actor)",sourceName:"节目作品列表"},
  {id:"city",year:"2023",date:"2023.03",title:"奇妙之城 第二季",category:"综艺",role:"城市探索",detail:"在城市与烟火日常中，认识荧屏之外的成毅。",source:biographySource,sourceName:"人物资料"},
  {id:"hello",year:"2023",date:"2023.08.26",title:"你好，星期六",category:"综艺",role:"节目嘉宾",detail:"《莲花楼》相关综艺出演记录。",source:"https://baike.sogou.com/m/fullLemma?g_ut=3&lid=53506850",sourceName:"人物资料"},
  {id:"hello-2025",year:"2025",date:"2025.05.17",title:"你好，星期六",category:"综艺",role:"节目嘉宾",detail:"收录《赴山海》相关综艺出演节点。",source:biographySource,sourceName:"人物资料"},
  {id:"lanvin",year:"2023",date:"2023.03",title:"LANVIN 巴黎时装周",category:"品牌活动",role:"秋冬秀场",detail:"2023 年 3 月，成毅以浪凡品牌代言人身份出席巴黎时装周 LANVIN 2023 秋冬系列秀场。公开影像记录了他的秀场造型与巴黎行程；这段经历也留下了他谈论表演与旅行的采访。",source:"https://weibo.com/a/hot/7634737473067009_1.html?type=new",sourceName:"公开活动回顾"},
  {id:"lanvin-ss",year:"2023",date:"2023.09",title:"LANVIN 巴黎之旅",category:"品牌活动",role:"春夏系列活动",detail:"2023 年 9 月，成毅前往巴黎参与 LANVIN 春夏系列相关活动。品牌公开影像记录了造型与巴黎行程，把演员身份之外的时尚体验收进这一页。",source:"https://www.sina.cn/news/detail/4951021917308476.html",sourceName:"LANVIN 公开动态存档"},
  {id:"olaplex",year:"2024",date:"2024.05.26",title:"OLAPLEX 品牌活动",category:"品牌活动",role:"公开活动回顾",detail:"2024 年 5 月 26 日，OLAPLEX 欧拉裴举行“核芯修护 焕活强韧”品牌活动。品牌以中国区品牌代言人成毅的活动影像回顾现场，与粉丝分享见面时刻。",source:"https://weibo.com/a/hot/7655421115373569_1.html?type=new",sourceName:"品牌公开动态存档"},
  {id:"zhanjia",year:"2026",date:"2026.04.15",title:"绽家品牌合作官宣",category:"品牌活动",role:"品牌全球代言人官宣",detail:"2026 年 4 月 15 日，香氛家居清洁护理品牌绽家宣布成毅成为品牌首位全球代言人。官宣以“天然成香，自在定义”为主题，围绕日常香氛与居家护理展开。合作后续请以品牌公告为准。",source:"https://news.sina.cn/sx/2026-04-15/detail-inhupzpa0932597.d.html",sourceName:"新浪 · 品牌发布"},
  {id:"concert",year:"2023",date:"2023.09.16",title:"莲花楼 · 就在江湖之上",category:"舞台盛典",role:"主题演唱会 · 乌镇",detail:"作品之外的一次相聚，以音乐重逢江湖。",source:"https://www.sina.cn/news/detail/4945237665909555.html",sourceName:"剧集官宣存档"},
  {id:"double11",year:"2023",date:"2023.11.10",title:"天猫双 11 惊喜夜",category:"舞台盛典",role:"演唱《一壶莲花醉》",detail:"公开舞台演出记录。",source:biographySource,sourceName:"人物资料"},
  {id:"scream",year:"2024",date:"2024.12.07",title:"爱奇艺尖叫之夜",category:"舞台盛典",role:"尖叫男演员",detail:"收录年度盛典公开荣誉节点。",source:biographySource,sourceName:"人物资料"},
  {id:"newyear",year:"2024",date:"2024.12.31",title:"湖南卫视芒果 TV 跨年晚会",category:"舞台盛典",role:"《赴红尘》《笨小孩》",detail:"在歌声中与新的一年相遇。",source:biographySource,sourceName:"人物资料"},
];
export const encounters: ArchiveItem[] = [
  {id:"birthday-2026",year:"2026",date:"2026.05.17",title:"生日这一页，我们一起写",category:"生日相逢",role:"生日直播 · 线上见面",detail:"5 月 17 日，是一年一度把祝福送到他身边的日子。2026 年生日直播与粉丝在线相逢，让屏幕两端的陪伴有了具体的时刻。这里收藏这次相聚，也留出一页，等待你的生日祝福。",source:"https://news.qq.com/rain/a/20260515V08UM400",sourceName:"腾讯新闻 · 生日直播预告"},
  {id:"love-song-2026",year:"2026",date:"2026.08.08",title:"小情歌",category:"舞台回信",role:"88VIP 超酷音乐盛典 · 昆山",detail:"2026 年 8 月 8 日，成毅在超酷音乐盛典演唱《小情歌》。台下的绿色应援与台上的歌声，在同一个夜晚相逢。把这首歌收藏在这里，当作一次关于陪伴的温柔回望。",source:"https://www.sina.cn/news/detail/5329625605475369.html",sourceName:"盛典舞台纯享 · 公开视频存档"},
  {id:"because-love-2026",year:"2026",date:"2026.08.08",title:"因为爱，所以爱",category:"舞台回信",role:"88VIP 超酷音乐盛典 · 昆山",detail:"同一场盛典，成毅也演唱了《因为爱所以爱》。我们带着喜欢来到现场，他用认真准备的舞台回应这份陪伴。本站以「因为爱，所以爱」为这一页命名，收藏粉丝与他的双向奔赴。",source:"https://www.sina.cn/news/detail/5330132120377438.html",sourceName:"盛典现场演唱 · 公开回顾"},
];
export const ceremonySource = "https://www.weibo.com/6047132413/5319434627710978";
export const topics = ["日常应援", "角色讨论", "二创分享", "活动交流"];
export const seedPosts = [
  {id:"welcome-role",nickname:"绿意编辑部",topic:"角色讨论",content:"你是从哪个角色开始认识成毅的？\n是禹司凤的温柔、李莲花的洒脱，还是云弘深的坚定？把你的入坑瞬间留在这里吧。",createdAt:"2026-10-11T00:00:00.000Z",seed:true},
  {id:"welcome-letter",nickname:"绿意编辑部",topic:"日常应援",content:"给今天留下一封绿色的信。\n可以是一句祝福，一段观剧感想，也可以只是：今天也有好好生活，好好喜欢。",createdAt:"2026-10-10T00:00:00.000Z",seed:true},
  {id:"welcome-art",nickname:"绿意编辑部",topic:"二创分享",content:"把喜欢写成故事、画成一页绿意。\n分享你的创作灵感、角色解读或手帐想法，让我们交换一点小小的心动。",createdAt:"2026-10-09T00:00:00.000Z",seed:true},
];
