export default {
  name: "系统管理",
  path: "/sys",
  meta: {
    title: "系统管理",
  },
  component: () => import("../Home.vue"),
  children: [
    {
      name: "P0101",
      path: "/P0101",
      meta: {
        title: "角色管理",
      },
      component: () => import("./01/P0101.vue"),
    },
    {
      name: "P0102",
      path: "/P0102",
      meta: {
        title: "用户管理",
      },
      component: () => import("./02/P0102.vue"),
    },
    {
      name: "P0103",
      path: "/P0103",
      meta: {
        title: "菜单管理",
      },
      component: () => import("./03/P0103.vue"),
    },
    {
      name: "P0105",
      path: "/P0105",
      meta: {
        title: "单位管理",
      },
      component: () => import("./05/P0105.vue"),
    },
    {
      name: "P0104",
      path: "/P0104",
      meta: {
        title: "日志管理",
      },
      component: () => import("./04/P0104.vue"),
    },
  ],
};
