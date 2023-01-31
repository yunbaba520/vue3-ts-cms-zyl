// service配置
export let BASE_URL = ''
export const TIME_OUT = 10000
// import.meta.env是vite默认提供的环境变量
// 1.区分开发与生产环境import.meta.env
if (import.meta.env.MODE === 'production') {
  BASE_URL = 'http://152.136.185.210:5000'
} else {
  BASE_URL = 'http://152.136.185.210:5000'
}
// 生产环境验证，先build 再 preview
// 2.用.env文件
// console.log(import.meta.env.VITE_NAME)
