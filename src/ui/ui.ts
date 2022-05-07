import { createApp } from 'vue'
import App from './ui.vue'
import router from './router'
import baseComponients from './componients/base'

createApp(App).use(router).use(baseComponients).mount('#app')