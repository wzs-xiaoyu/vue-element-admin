/**操作dom的相关工具方法 */

// 判断是有class
export function hasClass(el,className){
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
// 添加class
export function addClass(el,className){
  if(hasClass(el,className)) {
    return
  }
  let newCalss= el.className.split(' ')
  newCalss.push(className)
  el.className=newCalss.join(' ')
}

// 删除class
export function removeClass(el,className){
  if(hasClass(el,className)) {
    return
  }
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)','g')
  el.className=el.className.replace(reg,' ')
}
// 获取元素data-标签数据
export function getData(el,name,val){
  let prefix='data-'
  if(val){
    return el.setAttribute(prefix + name,val)
  }
  return el.getAttribute(prefix + name)
}

// 获取元素位置信息
export function getRect(el){
  if (el instanceof window.sVGElement){
    let rect = el.getBoundingclientRect()
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    }
  }else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }
}
