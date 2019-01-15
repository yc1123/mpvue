import fly from './config'
import qs from 'qs'
// 配置API接口地址
let root = 'www.yc1228.com'
/**
 接口模板=post
 export const test = params => {
   return fly.post('${root}/xx/xx',qs.stringify(params))
 }
 接口模板=get
 export const test1 =function(){
   return fly.get('${root}/api/getNewsList')
 }
 用法：
 在页面引用test
 import {test} from '../../http/api.js'
 test(params).then(res=>{
   console.log(res)
 })
*/
export const test = params => {
  return fly.post(`${root}/xx/xx`, qs.stringify(params))
}
