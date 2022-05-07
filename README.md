# Plugin Template for Figma

基于 [Figma-Vue3-Template](https://github.com/PluginFinchy/Figma-Vue3-Template) 开发

# 运行插件模板

构建插件

    npm run build

开发模式

    npm run dev

# 创建你的功能

- UI 文件: 在 `src/ui/app` 下参考 `Example.vue` 建立你的页面
- 程序文件:在 `utils/app` 下参考 `example.ts` 注册你的功能接口和逻辑代码

[关于样式] 如果要使用自定义样式，请注册一个类名 `app_[名称]` 避免 css 变量污染，推荐使用 stylus，但是也可以使用 sass 或者 less，按你的习惯来就行
  
[可选] 如果想要创建一个快速启动入口

- 在根目录下的 `manifest.json` 中的 `menu` 字段下注册一个菜单
- 在你的程序文件中注册 `quickAction` 运行函数
- 在 `utils/start.ts` 中引用你的程序文件，并根据你在 `menu` 中注册的 `command` 注册启动信息

# Design Token

可以通过 Design Token 控制全局样式

    src\style\design_token.styl

需要注意的是，所有文字相关的 token 参数都是使用 2x 定义，并使用 zoom 0.5 进行缩放。这是因为 Chrome 浏览器强制约束最小字体是 12px，但是我们希望在插件中使用比 12px 更小的文字

# 组件

提供 Figma 插件开发中的常用组件：

## 创建区块

使用 `<section><section/>` 创建一个区块，区块会自动包含一个12px 的内间距，你也可以给任何一个元素 `.section` 类来创建统一的 padding

使用 `<divide/>` 可以创建一条分割线

## 文字

基本文字直接使用 `p` 标签即可调用，规范为 `11px 字号` ，`16px 行高`

    <p>这是一段文字<\p>
    

可以调用非常小的文字，规范为  `9px 字号` ， `12px 行高` ,

    <p class="small">这是一段小文字</p>

文字加粗，除了使用 `P` 标签，也可以使用 `h2`：

    <p class="bold">这是一段加粗文字</p>
    <h2>这是标题文字</h2>


文字默认 11px 使用一级颜色，9px 使用三级颜色，可以使用类名切换颜色级

    <p class="main">这是一级颜色</p>
    <p class="sub">这是二级颜色</p>
    <p class="weak">这是三级颜色</p>
    <p class="theme">这是主题颜色</p>
    <p class="warning">这是警告颜色</p>
    <p class="succese">这是成功颜色</p>
    <p class="alt">这是反白颜色</p>