import Vue from "vue";
import VueRouter from "vue-router";
import Nprogress from "nprogress";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
function installRouters() {
  let viewRouters = [];
  const context = require.context("../views", true, /router.js$/);
  context.keys().forEach((key) => {
    const keys = context(key).default;
    if (!keys.children) {
      keys && viewRouters.push(...keys);
    } else {
      viewRouters.push(keys);
    }
  });
  return viewRouters;
}
// 不需要权限的路由
const routes = [
  {
    path: "/",
    redirect: "/index",
  },
];
routes.push(...installRouters());
routes.push({
  path: "*",
  redirect: "/404",
});
const router = new VueRouter({
  // mode: 'hash',
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  Nprogress.start();
  let loginData = JSON.parse(localStorage.getItem("loginData"));
  if (loginData === null && to.path !== "/login" && loginData === null && to.path !== "/register") {
    next("/login");
  }
  next();
});
router.afterEach(() => {
  Nprogress.done();
});
export default router;
export { routes };
