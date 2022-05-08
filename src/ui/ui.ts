import { createApp } from 'vue'
import App from './ui.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import baseComponients from './componients/base'
import globalData from '../global-data/config'


const app = createApp(App)
app.use(router).use(VueAxios, axios).use(baseComponients)
app.config.globalProperties.GLOBAL = globalData
app.mount('#app')
