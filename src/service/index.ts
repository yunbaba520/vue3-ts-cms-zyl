import { localCache } from '@/utils/cache';
import { BASE_URL, TIME_OUT } from './config'
import GSRequest from './request'
// 根据不同配置创建不同axios实例
const gsRequest = new GSRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      const token = localCache.getCache('login/token')
      if (config.headers && token) {
        config.headers.Authorization = 'Bearer ' + token
      }
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
