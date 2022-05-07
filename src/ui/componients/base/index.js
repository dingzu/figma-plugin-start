// 批量注册基础组件

const imports = require.context('./', true, /\.vue$/)

export default {
    install(app) {
        imports.keys().forEach(e => {
            const component = imports(e).default
            app.component(component.name, component)
        })
    }
}