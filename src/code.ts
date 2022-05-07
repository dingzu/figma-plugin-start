import { dispatch, handleEvent } from './utils/codeMessageHandler';
import appLoader from './utils/appLoader'
import start from './utils/start'
figma.showUI(__html__);

// 安装 app
appLoader.load()

// 启动插件
start()