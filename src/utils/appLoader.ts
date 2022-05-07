// 自动引入全部依赖
// @ts-ignore
const modulesFiles = require.context('./app', true, /\.ts$/)
const modules = modulesFiles.keys().reduce((module, modulePath) => {
    const moduleName = modulePath.replace(/^.\/(.*)\.js/, '$1')
    const value = modulesFiles(modulePath)
    module[moduleName] = value.default
    return module
}, {})

export default {
    load() {
        Object.keys(modules).forEach(key => {
            modules[key].load()
        })
    }
}