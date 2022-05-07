# Plugin Template for Figma

基于 [Figma-Vue3-Template](https://github.com/PluginFinchy/Figma-Vue3-Template) 开发

# 运行插件模板

构建插件

    npm run build

开发模式

    npm run dev

# Design Token

可以通过 Design Token 控制全局样式

    src\style\design_token.styl

需要注意的是，所有文字相关的 token 参数都是使用 2x 定义，并使用 zoom 0.5 进行缩放。这是因为 Chrome 浏览器强制约束最小字体是 12px，但是我们希望在插件中使用比 12px 更小的文字

# 组件

提供 Figma 插件开发中的常用组件：

## 文字

基本文字直接使用 `p` 标签即可调用，规范为 `11px 字号` ，`16px 行高`

    <p>这是一段文字<\p>
    

可以调用非常小的文字，规范为  `9px 字号` ， `12px 行高` ,

    <p class="small">这是一段小文字</p>

文字加粗：

    <p class="bold">这是一段加粗文字</p>


文字默认 11px 使用一级颜色，9px 使用三级颜色，可以使用类名切换颜色级

    <p class="main">这是一级颜色</p>
    <p class="sub">这是二级颜色</p>
    <p class="weak">这是三级颜色</p>
    <p class="theme">这是主题颜色</p>
    <p class="warning">这是警告颜色</p>
    <p class="succese">这是成功颜色</p>
    <p class="alt">这是反白颜色</p>