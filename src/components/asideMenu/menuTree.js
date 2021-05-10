import Vue from 'vue'

export default Vue.component('menuTree',{
  render:function(h){
    if(this.isIcon){
      return h('div',this.menuList.map(group=>{
        if(!group.children){
          return h('el-menu-item',{
            props:{
              index:group.path
            }
          },[h('div',{
            class:this.isCollapse ? 'iconh' : 'iconv'
          },[group.icon && h('i',{
            class:!group.icon?'el-icon-menu':group.icon
          }),h('span',{
            slot:'title',
            class:this.isCollapse ? 'notitle': ''
          },group.name)])])
        }else{
          return h('el-submenu',{
            props:{
              index:group.name
            }
          },[h('div',{
            class:this.isCollapse ? 'iconh' : 'iconv',
            slot: 'title'
          },[group.icon && h('i',{
            class:!group.icon?'el-icon-menu':group.icon
          }),h('span',{
            slot:'title',
            class:this.isCollapse ? 'notitle': ''
          },group.name)]),h('menu-tree',{
            props: {
              menuList: group.children,
              isCollapse: this.isCollapse
            }
          })])
        }
      }))
    }else{
      return h('div',this.menuList.map(group=>{
        if(!group.children){
          return h('el-menu-item',{
            props: {
              index: group.path
            },
          },[h('div',{
            class: this.isCollapse ? 'horizontal' : 'vertical'
          },[group.icon && h('img',{
            attrs:{
              src: group.icon
            }
          }),group.name])])
        }else{
          return h('el-submenu',{
            props: {
              index: group.name
            }
          }, [h('div',{
              class: this.isCollapse ? 'horizontal' : 'vertical',
              slot: 'title'
            }, [group.icon && h('img',{
              attrs:{
                src: group.icon
              }
            }),group.name]),h('menu-tree',{
              props: {
                menuList: group.children,
                isCollapse: this.isCollapse
              }
            })])
        } 
      }))
    }
  },
  props:{
    isCollapse:Boolean,
    menuList:Array,
    isIcon:{
      type:Boolean,
      default:false
    }
  }
})