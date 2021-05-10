import router from "@/router"

// 返回到客户端
export function goBack(index=-1){
  router.isBack = true
  router.go(index)
}

export function go(url,parames){
  router.isBack=false,
  router.push(url,parames)
}