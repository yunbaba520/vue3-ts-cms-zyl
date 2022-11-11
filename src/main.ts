import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './stores'
import registerIcons from './global/register-icons'

// 样式
import 'normalize.css'
import './assets/css/index.less'
// 对于逻辑中的组件，插件不会帮你导入，你可以引入全部样式，或者单独引入，或者使用别的插件
import 'element-plus/theme-chalk/el-message.css'


const app = createApp(App)
app.use(registerIcons)
app.use(router)
app.use(pinia)
app.mount('#app')
