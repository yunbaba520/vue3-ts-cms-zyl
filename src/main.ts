import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './stores'
import registerIcons from './global/register-icons'

// 样式
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)
app.use(registerIcons)
app.use(router)
app.use(pinia)
app.mount('#app')
