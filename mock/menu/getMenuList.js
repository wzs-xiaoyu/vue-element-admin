export function getMock(params){
  const result=[{
    name:"首页",
    icon:'/icon/destop.png',
    path:"/index",
  },{
    name:'系统管理',
    icon:'/icon/destop.png',
    children:[
      {name:'角色管理',path:'/P0101'},
      {name:'用户管理',path:'/P0102'}
      // {name:'',path:''},
      // {name:'',path:''},
      // {name:'',path:''},
      // {name:'',path:''},
      // {name:'',path:''},
      // {name:'',path:''}
    ]
  },{
    name:'系统管理1',
    icon:'/icon/destop.png',
    children:[
      {name:'角色管理1',path:'/P0201'},
      {name:'用户管理1',path:'/P0202'}
      // {name:'',path:''},
      // {name:'',path:''},
      // {name:'',path:''},
      // {name:'',path:''},
      // {name:'',path:''}
    ]
  },{
    name:'组件',
    icon:'/icon/destop.png',
    children:[
      {name:'角色管理2',path:'/P0301'},
      {name:'拖拽看板',path:'/P0302'},
    ]
  }]
  return result
}