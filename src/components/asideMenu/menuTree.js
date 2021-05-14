import Vue from "vue";

export default Vue.component("menuTree", {
  render: function (h) {
    if (this.isIcon) {
      return h(
        "div",
        this.menuList.map((group) => {
          if (!group.children) {
            if (this.isCollapse) {
              return h(
                "el-menu-item",
                {
                  props: {
                    index: group.path,
                  },
                },
                [
                  h(
                    "el-tooltip",
                    {
                      class: "item",
                      props: {
                        content: group.name,
                        placement: "right",
                      },
                    },
                    [
                      h(
                        "div",
                        {
                          class: this.isCollapse ? "horizontal" : "vertical",
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
                              class: this.isCollapse ? "notitle" : "",
                            },
                            group.name
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              );
            } else {
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
                      class: this.isCollapse ? "horizontal" : "vertical",
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
                          class: this.isCollapse ? "notitle" : "",
                        },
                        group.name
                      ),
                    ]
                  ),
                ]
              );
            }
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
                    class: this.isCollapse ? "horizontal" : "vertical",
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
                        class: this.isCollapse ? "notitle" : "",
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
    } else {
      return h(
        "div",
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
                    class: this.isCollapse ? "horizontal" : "vertical",
                  },
                  [
                    group.icon &&
                      h("img", {
                        attrs: {
                          src: group.icon,
                        },
                      }),
                    group.name,
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
                    class: this.isCollapse ? "horizontal" : "vertical",
                    slot: "title",
                  },
                  [
                    group.icon &&
                      h("img", {
                        attrs: {
                          src: group.icon,
                        },
                      }),
                    group.name,
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
    }
  },
  props: {
    isCollapse: Boolean,
    menuList: Array,
    isIcon: Boolean,
  },
});
