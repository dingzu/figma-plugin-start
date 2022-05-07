// 插件名: 自动像素对齐
// 开发者: wangyihan
// 功能介绍: 可以实现检查选中的图层是否对齐到 1px 或者 0.5px 标准的栅格上，如果没有对齐，会自动取整数
// 支持参数: 1, 0.5, 用于规定栅格的类型

import { dispatch, handleEvent } from '../codeMessageHandler'

// step1: 注册接口
const module = {
  // 在插件 UI 中运行
  load() {
    handleEvent('autoFixPixel', (key) => {
      run(key)
      dispatch('autoFixPixelDone', message)
    })
  },
  // 在快速指令中运行
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
