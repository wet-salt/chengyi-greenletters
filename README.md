# 绿意来信 · 成毅粉丝应援站

迁移后的地址：https://wet-salt.github.io/chengyi-greenletters/

## 首次启用

仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
如果首次任务在启用前已经失败，进入 Actions → Publish green letters → Run workflow。

网站使用 GitHub Pages 的静态托管，没有 ChatGPT 登录或原 Sites 域名依赖。

## 内容与交互

- 首页、明星轨迹、双向奔赴、粉丝互动分别有独立地址，可直接打开和刷新。
- 绿色设计、视差、自动漫游、音乐心形转盘与长按选歌保留。
- 点赞、评论、来信、收藏和签到只写入本机 localStorage；换浏览器或清除数据不会同步。
- GitHub Pages 不能运行原来的服务端音乐接口。构建时从 QQ 音乐公开歌曲页面读取允许播放的地址，由浏览器直接播放；不复制音频文件，不解锁会员内容。部署任务每小时更新播放地址。平台限制、临时地址失效或自动播放限制时可点击心心、到原平台收听，或添加本地音频。
- 本地音频不上传，关闭网页后不保留。
- 旧 Sites 域名的本地数据不会自动迁移到此域名。

## 开发

Node.js 22+，`npm ci`，`npm run check`，`npm run build`。
构建产物位于 `docs/`，源文件和构建产物均保存在仓库中。

图片版权归原权利人，资料来源见各条目；非官方粉丝创作网站。
