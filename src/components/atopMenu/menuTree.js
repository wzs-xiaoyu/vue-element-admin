import Vue from "vue";

export default Vue.component("menuTree", {
  render: function (h) {
    return h(
      "div",
      {
        class: "menu",
      },
      this.menuList.map((group) => {
        if (!group.children) {
          return h(
            "el-menu-item",
            {
              props: {
                index: group.path,
              },
            },
            [
              h("div", [
                group.icon &&
                  h("i", {
                    class: !group.icon ? "el-icon-menu" : group.icon,
                  }),
                h(
                  "span",
                  {
                    slot: "title",
                  },
                  group.name
                ),
              ]),
            ]
          );
        } else {
          return h(
            "el-submenu",
            {
              props: {
                index: group.name,
              },
            },
            [
              h(
                "div",
                {
                  slot: "title",
                },
                [
                  group.icon &&
                    h("i", {
                      class: !group.icon ? "el-icon-menu" : group.icon,
                    }),
                  h(
                    "span",
                    {
                      slot: "title",
                    },
                    group.name
                  ),
                ]
              ),
              h("menu-tree", {
                props: {
                  menuList: group.children,
                  isCollapse: this.isCollapse,
                },
              }),
            ]
          );
        }
      })
    );
  },
  props: {
    menuList: Array,
  },
});
