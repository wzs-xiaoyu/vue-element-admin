/**
*web模拟客户端数据交互
*mock本地数据接口
**/
export default function mock({url, params}){
return require('./' + url + '.js').getMock(params)}
