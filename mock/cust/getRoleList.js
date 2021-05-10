const Mock = require('mockjs')
export function getMock(parmas){
  const result = Mock.mock({
    'list|1-6': [{
      'jsbm| 100-999' : 999,
      'jsmc|1':['管理员','超级管理员','一级审批'],'jsms':'这里是描述',
      'cjr': "@cname",
      'cjsj': "@date",
      'jslx|1':['管理类','操作类','审批类'],
      'jszt|1':['启用','停用']
    }]
  })
  return result
}
