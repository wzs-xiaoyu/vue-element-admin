export default {
  name: "exception",
  path: "/exception",
  meta: {
    title: "异常",
  },
  component: () => import("../Home.vue"),
  children: [
    {
      name: "404",
      path: "/404",
      meta: {
        title: "404",
      },
      component: () => import("./404.vue"),
    },
    {
      name: "403",
      path: "/403",
      meta: {
        title: "403",
      },
      component: () => import("./403.vue"),
    },
    {
      name: "500",
      path: "/500",
      meta: {
        title: "500",
      },
      component: () => import("./500.vue"),
    },
  ],
};
