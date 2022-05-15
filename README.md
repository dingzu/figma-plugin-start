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
- UI 文件需要额外的程序: 在 `src/ui/app/ts` 下建立单独的代码

[关于样式] 如果要使用自定义样式，请注册一个类名 `app_[名称]` 避免 css 变量污染，推荐使用 `stylus`，但是也可以使用 `sass` 或者 `less`，按你的习惯来就行
  
[可选] 如果想要创建一个快速启动入口

- 在根目录下的 `manifest.json` 中的 `menu` 字段下注册一个菜单
- 在你的程序文件中注册 `quickAction` 运行函数
- 在 `utils/start.ts` 中引用你的程序文件，并根据你在 `menu` 中注册的 `command` 注册启动信息

如果你想使用快速指令打开一个特定的窗口



# 全局变量

全局变量管理在 `src/global-data` 下，在使用时 `this.GLOBAL.xxx` 或者  `this.GLOBAL[xxx]`  
即可，全局变量是响应式的。

插件有本地存储功能键 [本地存储](https://www.figma.com/plugin-docs/api/figma-clientStorage/#docsNav)

也可以设置一个快速启动入口 [快速启动](https://www.figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/#docsNav)

# Design Token

可以通过 Design Token 控制全局样式

    src\style\design_token.styl

需要注意的是，所有文字相关的 token 参数都是使用 2x 定义，并使用 zoom 0.5 进行缩放。这是因为 Chrome 浏览器强制约束最小字体是 12px，但是我们希望在插件中使用比 12px 更小的文字

支持 Dark 模式，在变量文件下的 `:root.figma-dark` 注册 token 即可


# 组件

提供 Figma 插件开发中的常用组件：

## 1.创建区块

使用 `<section><section/>` 创建一个区块，区块会自动包含一个12px 的内间距，你也可以给任何一个元素 `.section` 类来创建统一的 padding

使用 `<divide/>` 可以创建一条分割线

## 2.文字

基本文字直接使用 `p` 标签即可调用，规范为 `11px 字号` ，`16px 行高`

    <p>这是一段文字<\p>
    

可以调用非常小的文字，规范为  `9px 字号` ， `12px 行高` ,

    <p class="small">这是一段小文字</p>

文字加粗，除了使用 `P` 标签，也可以使用 `h2`：

    <p class="bold">这是一段加粗文字</p>
    <h2>这是标题文字</h2>


文字默认 11px 使用一级颜色，9px 使用三级颜色，可以使用类名切换颜色级，白色文字和反白文字在 dark 模式下的展现形式是有差异的，前者在 dark 模式下会变成黑色，而后者不会

    <p class="main">这是一级颜色</p>
    <p class="sub">这是二级颜色</p>
    <p class="weak">这是三级颜色</p>
    <p class="theme">这是主题颜色</p>
    <p class="warning">这是警告颜色</p>
    <p class="succese">这是成功颜色</p>
    <p class="alt">这是反白颜色</p>
    <p class="white">这是白颜色</p>

## 3.图标

图标的使用非常简单，引入后是一个 svg ，默认为一级文字颜色，你可以通过 `fill` 属性自定义颜色。新增的图标请放在 `ui/assets/icons` 下

    <icon :use="name"/>
    <icon use="arrow-down-s-line" />

## 4.按钮

使用 `<button/>` 即可创建一个按钮

    <button>我是按钮</button>

## 5.输入框

使用 `<input/>` 即可创建一个输入框，可以使用 `v-modal` 和 `data` 进行绑定

    <input type="text" v-model="inputData" placeholder="请输入" />

## 6.Switch

使用 `<input type="checkbox" class="switch">` 创建一个 switch, 可以使用 `v-modal` 和 `data` 进行绑定，并且绑定 `click` 事件切换状态

      <input
        type="checkbox"
        class="switch"
        v-model="switchData"
        @click="switchData = !switchData"
      />

## 7.选择器

选择器是自定义组件，组件名  `<f-selector>` 但是框架已经帮你进行了注册，所以无需注册即可使用

      <f-selector
        :current="selectorData.current"
        :list="selectorData.list"
        :search="true"
        @change-value="changeValue"
      />

| 参数          | 说明               | 可选值                                                          |
| ------------- | ------------------ | --------------------------------------------------------------- |
| current       | 当前选中的值的 key | any，如果 current 和 list 中任何一个 key 不匹配，则判断为未选中 |
| list          | 选择器内的数据结构 | array                                                           |
| search        | 是否支持搜索       | true/false                                                      |
| @change-value | 监听内部的点击事件 | 会传出一个 key，可以调用一个函数修改 current 的值，实现切换     |

list 数据结构示范：

        list: [
          {
            value: 0,
            text: "第一项",
          },
          {
            value: 1,
            text: "第二项",
          },
          {
            value: 2,
            text: "第三项",
          },
        ],

切换监听 js 示范

    changeValue(value) {
      this.selectorData.current = value;
    },

## 8.Radiu/Checkbox

开发中

## 9.胶囊选择器

开发中

## 10.表单行

开发中

## 11.加载

当需要表现当前有任务正在进行时，可以使用加载条组件

在 UI 中可以调用全局变量控制加载开始

    GLOBAL.loading.isLoading = true

加载结束则使用

    GLOBAL.loading.isLoading = false

有时候，我们需要创建一个阻断式的加载，阻止用户在加载的时候进行其他操作，这时候我们可以

    this.GLOBAL.loading.isLoading = true;
    this.GLOBAL.loading.type = "mask";
    this.GLOBAL.loading.text = "Mask 上的一段话";

加载结束则使用

    GLOBAL.loading.isLoading = false;
    this.GLOBAL.loading.type = "line";

使用 `line` 作为 `type` 可以规定加载未 `line` 类型，推荐在 `mask` 类型加载结束时切换回来，也可以单独控制

    this.GLOBAL.loading.type = "line";

如果不是在 UI 而是在 figma 操作函数中控制加载，可以使用传参：

    dispatch("pushLoadingMsg", message);

    message: {
        isLoading // true 或者 false 控制是否进行加载
        type // 'line' 或者 'mask' 控制加载类型
        text // 加载时显示在屏幕上的文案
    }