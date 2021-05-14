/**
 *工具方法
 *主要是对开发中一些公共方法的封装，方便代码编写
 */
import Filesaver from "file-saver";
import XLSX from "xlsx";
/**
 *判断参数是否是数组其中之一
 *@export
 *@param {*} value 参数
 *@param {*} validList 数组
 *@returns
 */
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
/**
 * 获取url参数
 * @param {*} url
 * @returns
 */
export function parseUrl(url) {
  const pattern = /(\w+)=(\w+)/gi;
  let parames = {};
  url.replace(pattern, function (a, b, c) {
    parames[b] = c;
  });
  return parames;
}
/**
 * 导出excel
 */
export function exportExcel(el, fileName = "FDB") {
  /*从表生成工作簿对象 */
  var wb = XLSX.utils.table_to_book(el);
  /**获取二进制字符串作为输出 */
  var wbout = XLSX.write(wb, {
    bookType: "xlsx",
    bookSST: true,
    type: "array",
  });
  try {
    Filesaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), fileName + ".xlsx");
  } catch (e) {
    if (typeof console !== "undefined") console.log(e, wbout);
  }
  return wbout;
}
/**
 * 将毫秒转为标准时间格式
 */
export function getTimeOut(time) {
  date = new Date(time);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var m1 = date.getMinutes();
  var s = date.getSeconds();
  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d + " " + h + ":" + m1 + ":" + s;
}
/**
 * 将字典转化为数组对象的形式
 * @param {*} constants 字典对象
 * @param {*} key 返回的key的字段名，默认为value
 * @param {*} value 返回的value的字段名，label
 * @returns [{value:'',label:''}]
 */
export function constToArray(constants, key = "value", value = "label") {
  let array = [];
  for (let item in constants) {
    array.push({ [key]: item, [value]: constants[item] });
  }
  return array;
}
