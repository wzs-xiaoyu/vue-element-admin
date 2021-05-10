/**
 * 格式相关方法
 */

import Nzh from 'nzh/cn'

/**
 * 去除空格
 * @param value
 * @returns {string}
 */
export function removeSpace(value){
  let rtnVal=value + ''
  return rtnVal.replace(/\s/g,'')
}
/**
 * 格式化账号
 * @param value
 * @param hidden 是否脱敏
 * @returns{string|*}
 */
export function fmtAcctNo(value,hidden){
  if(value == null || value === ''){
    return ''
  }
  value=removeSpace(value)
  let tmpStr=''
  if(hidden){
    let start = value.length - 4
    if (start < 4){
      start = 4
    }
    tmpstr = tmpstr + value.substring(0,6) + '******'+ value.substring(start,value.length)
      
  }else{
    while (value. length > 4){
      tmpstr = tmpstr + value.substring(0,4)
      tmpstr = tmpstr +''
      value = value.substring(4,value.length)
    }
    tmpstr = tmpstr + value
  }
  return tmpStr
}
/**
 * 金额格式化
 * @param v
 * @param c
 * @param d
 * @param t
 * @returns {string}
 */
export function fmtMoney(v, c = 2, d = '.', t = ',' ){
  v =v + ''
  v = v.replace(/,/g, '')
  v *= 1
  let p = v < 0 ? '-': ""
  v = v.toFixed(c)
  c = Math.abs(c) + 1 ? c : 2
  let m= (/(\d+)(?:(\.\d+)|)/.exec(v + ''))
  let x = m[1].length > 3 ? m[1].length % 3 : 0
  return p + (x ? m[1].substr(0,x) + t : '') +
    m[1].substr(x).replace(/(\d{3})(?=\d)/g,'$1' + t) +
    (c ? d +(+m[2] || 0).toFixed(c).substr(2) : '')

}
/**
 * 去除金额格式化
 * @param value 
 * @returns {*}
 */
export function unFmtMoney(value){
  return value.replace(/,/g,'')
}
/**
 * 利率格式化
 * @param value 
 * @returns {string}
 */
export function fmtPercent(value){
  let a=Math.floor(value * 100) / 100
  a=(a.toFixed(2))
  return a + '%'
}
/**
 * 转换大小写
 */
export function fmtSMoney(value){
  return Nzh.toMoney(value).replace('人民币','')
}