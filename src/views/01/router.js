export default [
  {
    name:"P0101",
    path:"/P0101",
    meta:{
      title:"角色管理"
    },
    component:()=> import ('./01/P0101.vue')
  },{
    name:'P0102',
    path:"/P0102",
    meta:{
      title:"用户管理"
    },
    component:()=> import('./02/P0102.vue')
  }
]