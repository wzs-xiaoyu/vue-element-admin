<template>
  <div>
    <el-menu :default-active="currentMenu" class="el-menu-vertical" :collapse="isCollapse" :router="true" @select="handleSelect">
      <template v-if="menuList.length > 0">
        <menu-tree :menu-list="menuList" :is-collapse="isCollapse"></menu-tree>
      </template>
    </el-menu>
    <div class="collapse-btn">
      <el-button size="medium" @click="isCollapse = !isCollapse">
        <i :class="isCollapse?'el-icon-right':'el-icon-back'" :style="!isCollapse?'padding:0 20px;':''"></i>
      </el-button>
    </div>
  </div>
</template>
<script>
import menuTree from "./menuTree.js"
export default {
  name:"asideMenu",
  components:{menuTree},
  props:{
    isMenuCollapse:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      menuList:[],
      currentMenu:'',
      isCollapse:this.isMenuCollapse
    }
  },
  created(){
    this.getMenuList();
  },
  watch:{
    $route(to,from){
      this.currentMenu="/" + to.name
    }
  },
  methods:{
    handleSelect(key){
      this.$emit("select",key)
    },
    async getMenuList(){
      this.menuList= await this.$post("menu/getMenuList",{},true)
    }
  }
}
</script>
<style lang="less" >
.el-menu-vertical{
  height: 84vh;
  overflow-x: auto;
}
.el-menu{
  border-right: none;
}
.vertical{
  display: flex;
  align-items: center;
  img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
}
.horizontal{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }
  & + .el-submenu__icon-arrow{
    display: none;
  }
}
.collapse-btn{
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
}
</style>