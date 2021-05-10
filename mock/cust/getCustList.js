const Mock = require('mockjs')
export function getMock(parmas){
  const result=Mock.mock({
    'list|1-6':[{//属性list 的值是一个数组，其中含有1到 10个元素
      'id|+1': 1,//属性id是一个自增数，起始值为l，每次增i
      'name': "@cname",//字符串
      "city": {
        'number|1- 100':1,
        'cityname': "@region"
      }
    }]
  })
  return result
}