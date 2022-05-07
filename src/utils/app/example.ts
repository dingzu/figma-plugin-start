// 插件名: 示范功能插件
// 开发者: dz(wangyihan)
// 功能介绍: 这是一个示范项目

import { dispatch, handleEvent } from '../codeMessageHandler'

// step1: 注册接口
const module = {
    // 在插件 UI 中运行
    load() {
        handleEvent('example', (key) => {
            run(key)
            dispatch('exampleDone', message)
        })
    },
    // 在快速指令中运行（非必须）
    quickAction(key) {
        run(key)
    }
}

export default module

const message = {
    type: 'text',
    content: '自动对齐像素完成'
}

// step2: 完成功能代码
function run(key) {
    const nodes = figma.currentPage.selection
    nodes.forEach((node) => {
        setNodeFixPixel(node, key)
    })
}

function setNodeFixPixel(node, key) {
    // 处理子集
    if ('children' in node) {
        node.children.forEach((child) => {
            setNodeFixPixel(child, key)
        })
    }
    // 处理逻辑
    const height = Math.round((node.height / key)) * key
    const width = Math.round((node.width / key)) * key
    const x = Math.round((node.x / key)) * key
    const y = Math.round((node.y / key)) * key
    node.resizeWithoutConstraints(width, height)
    node.x = x
    node.y = y
}
