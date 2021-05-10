import Vue from "vue";
import VueRouter from "vue-router";
import Nprogress from "nprogress";

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push( location){
  return originalPush.call(this,location).catch(err => err)
}
function installRouters () {
  let viewRouters = []
  const context = require.context('../views',true,/router.js$/)
  context.keys().forEach(key =>{
    const keys = context(key).default
    keys && viewRouters.push(...keys)
  })
  return viewRouters
}

const routes = [{
  path: '/',
  redirect: '/index'
}]
routes.push( ...installRouters())
routes.push({
  path: '*',
  redirect: '/404'
})

const router = new VueRouter({
  // mode: 'hash',
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to,from, next) =>{
  Nprogress.start()
  next()
})
router.afterEach(( )=>{
  Nprogress.done()
})
export default router
export {routes}
