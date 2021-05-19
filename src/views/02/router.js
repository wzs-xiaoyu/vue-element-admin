export default {
  name: "系统管理1",
  path: "/sys1",
  meta: {
    title: "系统管理1",
  },
  component: () => import("../Home.vue"),
  children: [
    {
      name: "P0201",
      path: "/P0201",
      meta: {
        title: "角色管理1",
      },
      component: () => import("./01/P0201.vue"),
    },
    {
      name: "P0202",
      path: "/P0202",
      meta: {
        title: "用户管理1",
      },
      component: () => import("./02/P0202.vue"),
    },
  ],
};
