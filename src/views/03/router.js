export default {
  name: "组件",
  path: "/assembly",
  meta: {
    title: "组件",
  },
  component: () => import("../Home.vue"),
  children: [
    {
      name: "P0301",
      path: "/P0301",
      meta: {
        title: "时间线",
      },
      component: () => import("./01/P0301.vue"),
    },
    {
      name: "P0302",
      path: "/P0302",
      meta: {
        title: "拖拽看板",
      },
      component: () => import("./02/P0302.vue"),
    },
  ],
};
