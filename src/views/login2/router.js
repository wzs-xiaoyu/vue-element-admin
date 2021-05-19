export default [
  {
    name: "Login",
    path: "/login",
    meta: {
      title: "登录",
    },
    component: () => import("./Login.vue"),
  },
  {
    name: "Register",
    path: "/register",
    meta: {
      title: "注册",
    },
    component: () => import("./Register.vue"),
  },
];
