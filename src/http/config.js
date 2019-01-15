import fly from 'flyio/dist/npm/wx'
import Vue from 'vue'
// 配置请求基地址
// 定义公共headers
fly.config.headers = {
  token: 111
}
// 设置超时
fly.config.timeout = 10000
// 设置请求基地址
fly.config.baseURL = 'https://yc1228.com'
// 添加拦截器
fly.interceptors.request.use((config, promise) => {
  // 给所有请求添加自定义header
  config.headers.token = 'token'
  return config
})
// 将fly实例挂在vue原型上
Vue.prototype.$http = fly
