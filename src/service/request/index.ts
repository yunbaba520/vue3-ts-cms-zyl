/**
 * 两个难点:
 * 1. 三种拦截器
 *   全局拦截器
 *   实例拦截器
 *   请求拦截器
 * 2. 返回结果类型处理<泛型>
 */

import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { GSRequestConfig } from './type'
// 用类封装的好处,可以创建多个axios实例
class GSRequest {
  instance: AxiosInstance
  constructor(config: GSRequestConfig) {
    this.instance = axios.create(config)
    // 每个instance都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        // console.log("全局请求成功拦截");

        return config
      },
      (err) => {
        // console.log("全局请求失败拦截");
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log("全局响应成功拦截");

        return res.data
      },
      (err) => {
        // console.log("全局响应失败拦截");
        return err
      }
    )
    // 对单个instance添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }
  // 封装网络请求方法
  // 使用泛型确定返回data的具体类型
  request<T = any>(config: GSRequestConfig<T>) {
    // 单个instance中某个请求也可能会有单独拦截器,对config进行处理后重新赋值给config
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个instance中某个请求也可能会有单独拦截器,对res进行处理后重新赋值给res
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: GSRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: GSRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: GSRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: GSRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default GSRequest
