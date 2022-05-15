import autoFixPixel from './app/autoFixPixel'
import example from './app/example'
import { dispatch, handleEvent } from './codeMessageHandler'

const CLOSE_PLUGIN_MSG = "_CLOSE_PLUGIN_"

function menu(com) {
    // 处理菜单
    switch (com) {
        // 启动插件 UI
        case 'open-window':
            figma.showUI(__html__, { width: 320, height: 680, themeColors: true });
            dispatch('goto', { path: '/custom' })
            break;
        // 示范功能
        case 'example':
            example.quickAction(1)
            throw CLOSE_PLUGIN_MSG
        // 对齐像素
        case 'fix-pixel-1px':
            autoFixPixel.quickAction(1)
            throw CLOSE_PLUGIN_MSG
        case 'fix-pixel-0-p-5px':
            autoFixPixel.quickAction(0.5)
            throw CLOSE_PLUGIN_MSG
        // 兜底：启动插件 UI
        default:
            figma.showUI(__html__, { width: 320, height: 680, themeColors: true });
            dispatch('goto', { path: '/custom' })
    }
}

export default function start() {
    try {
        menu(figma.command)
    } catch (e) {
        if (e === CLOSE_PLUGIN_MSG) {
            figma.closePlugin()
        } else {
            // If we caught any other kind of exception,
            // it's a real error and should be passed along.
            throw e
        }
    }
}
