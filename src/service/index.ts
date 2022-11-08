import { BASE_URL, TIME_OUT } from './config'
import GSRequest from './request'
// 根据不同配置创建不同axios实例
const gsRequest = new GSRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      // console.log("个别axios instance请求成功拦截");
      return config
    },
    requestFailureFn(err) {
      return err
    },
    responseSuccessFn(res) {
      return res
    },
    responseFailureFn(err) {
      return err
    }
  }
})

export default gsRequest
