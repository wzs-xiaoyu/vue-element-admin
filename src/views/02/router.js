export default {
  name: "系统监控",
  path: "/sys1",
  meta: {
    title: "系统监控",
  },
  component: () => import("../Home.vue"),
  children: [
    {
      name: "P0201",
      path: "/P0201",
      meta: {
        title: "在线用户",
      },
      component: () => import("./01/P0201.vue"),
    },
    {
      name: "P0202",
      path: "/P0202",
      meta: {
        title: "日志管理",
      },
      component: () => import("./02/P0202.vue"),
    },
    {
      name: "P0203",
      path: "/P0203",
      meta: {
        title: "服务监控",
      },
      component: () => import("./03/P0203.vue"),
    },
  ],
};
