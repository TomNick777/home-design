# 105-A1 户型装修设计器

按用户提供的 105-A1 原图生成，基于 [ZWD11/house-plan-designer](https://github.com/ZWD11/house-plan-designer) 的模板。可编辑家具、门窗、墙体、地面、吊顶和水电，支持 2D / 3D、报价与图纸导出。

直接双击 `index.html`，或运行 `python -m http.server 8000 --bind 127.0.0.1` 后访问 http://127.0.0.1:8000。主页面内嵌代码和底图，基础编辑与 3D 无需 CDN。方案保存到当前浏览器，可用分享文件备份；本地文件、localhost 和线上域名的存档互不共享。

左侧“户型 → 显示底图”可对照原图；“载入初始户型”恢复默认方案。上方切换 2D / 分屏 / 3D，底部选择布置、水电、顶面、铺装、拆改图层。

## 开发与数据

`floorplan-105.js` 是唯一户型几何与默认家具数据源。修改后执行：

```powershell
node tools/build-designer.mjs
```

生成 `index.html` 与 `presets/105-A1.json`。`assets/designer-template.html` 为未修改的上游模板；构建时仅注入户型、底图、标题，并将承重标签改为“保留墙（性质待核）”，防止把栅格图推测显示成结构结论。

户型尺寸、估算项、布置调整、验证范围见 [PROJECT_STATE.md](PROJECT_STATE.md)。2D / 3D 预览与检查说明位于 `previews/105-A1/`。

## 来源与许可

当前模板：ZWD11/house-plan-designer，提交 `3257e5a3c4acc54786666fd9647913cf084742c6`，MIT 许可位于 `assets/house-plan-designer-LICENSE`。

本仓库历史基于 [wy51ai/floorplan-3d](https://github.com/wy51ai/floorplan-3d)，保留原始 `LICENSE` 和 Git 历史。旧 105-A2 的源图、预设和预览仅留作历史资料，当前网页不再载入。

在线地址：[https://tomnick777.github.io/home-design/](https://tomnick777.github.io/home-design/)。方案仍保存在当前浏览器本地；换浏览器、无痕模式，或本地 file / localhost 与线上域名之间，存档互不共享。可用「导出 → 分享文件」备份。

