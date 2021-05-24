export function getMock(params) {
  const result = [
    {
      name: "首页",
      icon: "el-icon-data-analysis",
      path: "/index",
    },
    {
      name: "系统管理",
      icon: "el-icon-setting",
      path: "/sys",
      children: [
        { name: "角色管理", path: "/P0101" },
        { name: "用户管理", path: "/P0102" },
        { name: "菜单管理", path: "/P0103" },
        { name: "单位管理", path: "/P0105" },
        { name: "字典管理", path: "/P0104" },
        // {name:'',path:''},
        // {name:'',path:''},
        // {name:'',path:''}
      ],
    },
    {
      name: "系统监控",
      icon: "el-icon-odometer",
      path: "/sys1",
      children: [
        { name: "在线用户", path: "/P0201" },
        { name: "日志管理", path: "/P0202" },
        { name: "服务监控", path: "/P0203" },
        // {name:'',path:''},
        // {name:'',path:''},
        // {name:'',path:''},
        // {name:'',path:''}
      ],
    },
    {
      name: "组件",
      icon: "el-icon-monitor",
      path: "/assembly",
      children: [
        { name: "时间线", path: "/P0301" },
        { name: "拖拽看板", path: "/P0302" },
      ],
    },
  ];
  return result;
}
