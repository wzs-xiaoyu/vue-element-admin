export function getMock(params) {
  const result = [
    {
      name: "首页",
      icon: "el-icon-setting",
      path: "/index",
    },
    {
      name: "系统管理",
      icon: "el-icon-setting",
      children: [
        { name: "角色管理", path: "/P0101" },
        { name: "用户管理", path: "/P0102" },
        { name: "菜单管理", path: "/P0103" },
        { name: "单位管理", path: "/P0105" },
        { name: "日志管理", path: "/P0104" },

        // {name:'',path:''},
        // {name:'',path:''},
        // {name:'',path:''}
      ],
    },
    {
      name: "系统管理1",
      icon: "el-icon-setting",
      children: [
        { name: "角色管理1", path: "/P0201" },
        { name: "用户管理1", path: "/P0202" },
        // {name:'',path:''},
        // {name:'',path:''},
        // {name:'',path:''},
        // {name:'',path:''},
        // {name:'',path:''}
      ],
    },
    {
      name: "组件",
      icon: "el-icon-setting",
      children: [
        { name: "时间线", path: "/P0301" },
        { name: "拖拽看板", path: "/P0302" },
      ],
    },
  ];
  return result;
}
