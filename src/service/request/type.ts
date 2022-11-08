import type { AxiosRequestConfig, AxiosResponse } from 'axios'
// 因为我们对返回类型做了泛型处理,所以res不能写死
interface GSInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}
export interface GSRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: GSInterceptors<T>
}
