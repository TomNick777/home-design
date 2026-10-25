# 项目规则

面向用户默认使用简体中文。当前产品是按用户 2026-10-23 指定的 ZWD11/house-plan-designer Skill 生成的 105-A1 户型装修编辑器。

项目事实、入口、坐标、数据来源及已知限制见 `PROJECT_STATE.md`。户型几何只修改 `floorplan-105.js`，执行 `node tools/build-designer.mjs` 生成网页和预设。上游模板保存在 `assets/designer-template.html`，保持原件；不得恢复旧 Blender / 小区查看器代码。保留两套上游 MIT 许可与来源记录。

导入或修改户型后，验证原图尺寸链、房间位置、门窗在墙体上的通路、2D/3D 切换及方案保存。墙体性质不能仅凭图纸线宽判定。面积按实际多边形计算，不能为了匹配户型名称而放大几何。
