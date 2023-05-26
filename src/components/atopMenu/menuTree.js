import Vue from "vue";

export default Vue.component("menuTree", {
  render: function (h) {
    if (this.isIcon) {
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
                    isIcon: this.isIcon,
                  },
                }),
              ]
            );
          }
        })
      );
    } else {
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
                h(
                  "div",
                  {
                    class: "vertical",
                  },
                  [
                    group.icon &&
                      h("img", {
                        attrs: {
                          src: group.icon,
                        },
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
                    class: "vertical",
                    slot: "title",
                  },
                  [
                    group.icon &&
                      h("img", {
                        attrs: {
                          src: group.icon,
                        },
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
                    isIcon: this.isIcon,
                  },
                }),
              ]
            );
          }
        })
      );
    }
  },
  props: {
    menuList: Array,
    isIcon: Boolean,
  },
});
