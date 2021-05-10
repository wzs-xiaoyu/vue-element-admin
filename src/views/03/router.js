export default [
  {
    name:"P0301",
    path:"/P0301",
    meta:{
      title:"角色管理2"
    },
    component:()=> import ('./01/P0301.vue')
  },{
    name:'P0302',
    path:"/P0302",
    meta:{
      title:"拖拽看板"
    },
    component:()=> import('./02/P0302.vue')
  }
]