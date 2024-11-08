export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number

  [propName: string]: any
}

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}
export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}

export interface AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}

export interface AxiosInterceptorManager<T> {
  use(resolved: (val: T) => T | Promise<T>, rejected?: (error: any) => any): number
  eject(id: number): void
}

export interface Axios {
  defaults: AxiosRequestConfig
  // 定义interceptor类型
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>
    response: AxiosInterceptorManager<AxiosResponse>
  }

  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  get: (url: string, config?: AxiosRequestConfig) => AxiosPromise
  delete: (url: string, config?: AxiosRequestConfig) => AxiosPromise
  head: (url: string, config?: AxiosRequestConfig) => AxiosPromise
  options: (url: string, config?: AxiosRequestConfig) => AxiosPromise
  post: (url: string, data?: any, config?: AxiosRequestConfig) => AxiosPromise
  put: (url: string, data?: any, config?: AxiosRequestConfig) => AxiosPromise
  patch: (url: string, data?: any, config?: AxiosRequestConfig) => AxiosPromise
}
export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>

  <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
}

// 拦截器管理
export interface AxiosInterceptorManager<T> {
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number
  eject(id: number): void
}

export interface ResolvedFn<T> {
  (val: T): T | Promise<T>
}

export interface RejectedFn {
  (error: any): any
}
