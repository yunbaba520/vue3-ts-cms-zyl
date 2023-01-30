import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './stores'
import registerIcons from './global/register-icons'

// 样式
import 'normalize.css'
import './assets/css/index.less'
// 1.全局引入
// 2.单个组件引入
// 对于逻辑中的组件，插件不会帮你导入，你可以引入全部样式，或者单独引入，或者使用别的插件
// 只引入el-message.css
// import 'element-plus/theme-chalk/el-message.css'
// 3.使用插件
// npm i vite-plugin-style-import -D
// npm i consola -D

const app = createApp(App)
app.use(registerIcons)
app.use(router)
app.use(pinia)
app.mount('#app')
