/**网络请求相关 */
import axios from 'axios'
import mock from "../../../mock"
import {serviceType} from "../../../ares.config"
import {MessageBox} from 'element-ui'
import NProgress from "nprogress"
// import { reject, resolve } from 'core-js/fn/promise'

function _ajax(type,url,params){
  let request = {
    method:type,
    url:`/api/${url}.do`,
    timeout:1000
  }
  NProgress.start()
  if(type=== 'get'){
    request=Object.assign({},request,{params})
  }else{
    request= Object.assign({},request,{data:params})
  }
  return new Promise((resolve,reject) =>{
    axios(request).then(res=>{
      if(res.data['STATUS'] ==='1'){
        resolve(res.data)
      }else{
        MessageBox.alert(res.data.MSG,'提示')
        reject(res.data)
      }
    }).catch(err=>{
      MessageBox.alert('系统繁忙，稍后重试','提示')
    }).finally(()=>{
      NProgress.done()
    })
  })
}

function _service(type,url,parames,isMock){
  if(serviceType ==='mock' || isMock){
    let cfg={
      url,
      parames,
    }
    return Promise.resolve(mock(cfg))
  }else if(serviceType === 'http'){
    return _ajax(type,url,parames)
  }else if(serviceType === 'static'){
    return new Promise((resolve,reject)=>{
      // 模拟1秒后响应
      setTimeout(()=>{
        axios('/staticMock/'+url+'.json').then(res=>{
          if(res.data['STATUS'] ==='1'){
            resolve(res.data)
          }else{
            MessageBox.alert(res.data.MSG,'提示')
            reject(res.data)
          }
        }).catch(err=>{
          reject(err)
        },1000)
      })
    })
  }
}

export function get(url,parames={},isMock = false){
  return _service('get',url,parames,isMock)
}

export function post(url,parames={},isMock = false){
  return _service('post',url,parames,isMock)
}