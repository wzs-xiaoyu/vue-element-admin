<template>
  <div :class="isIcon ? 'aside-menu-icon' : 'aside-menu'">
    <el-menu :default-active="currentMenu" :class="isIcon ? 'el-menu-vertical-demo' : 'el-menu-vertical'" :collapse="isCollapse" :router="true" @select="handleSelect">
      <template v-if="menuList.length > 0">
        <menus-tree :list="menuList" :isCollapse="isCollapse" :isIcon="isIcon"></menus-tree>
      </template>
    </el-menu>
    <div class="collapse-btn" v-if="isIcon">
      <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="isCollapse = !isCollapse"></i>
    </div>
    <div class="collapse-btn" v-else>
      <el-button size="medium" @click="isCollapse = !isCollapse">
        <i :class="isCollapse ? 'el-icon-right' : 'el-icon-back'" :style="!isCollapse ? 'padding:0 20px;' : ''"></i>
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "asideMenu",
  props: {
    isMenuCollapse: {
      type: Boolean,
      default: false,
    },
    isMenuIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuList: [],
      currentMenu: "",
      isCollapse: this.isMenuCollapse,
      isIcon: this.isMenuIcon,
    };
  },
  created() {
    this.getMenuList();
    this.currentMenu = this.$route.path;
  },
  watch: {
    $route(to, from) {
      this.currentMenu = "/" + to.name;
    },
  },
  methods: {
    handleSelect(key) {
      this.$emit("select", key);
    },
    async getMenuList() {
      this.menuList = await this.$post("menu/getMenuList", {}, true);
    },
  },
};
</script>
<style lang="less">
.aside-menu {
  .el-menu {
    border-right: none;
  }
  .el-menu-vertical {
    height: 84vh;
    width: 200px;
    overflow-x: auto;
    .is-active.el-menu-item {
      border-right: 2px solid #e81734;
    }
    .vertical {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
    }
  }
  .el-menu--collapse {
    width: 100px;
    .el-menu-item,
    .el-submenu__title {
      line-height: normal;
      height: auto;
      margin: 20px 0;
    }
    .horizontal {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
      }
      & + .el-submenu__icon-arrow {
        display: none;
      }
    }
  }
  .collapse-btn {
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
  }
}
.aside-menu-icon {
  .el-menu {
    border-right: none;
  }
  .el-menu-vertical-demo {
    height: 84vh;
    width: 200px;
    overflow-x: auto;
    .is-active.el-menu-item {
      border-right: 2px solid #e81734;
    }
    i {
      font-size: 20px;
    }
  }
  .el-menu--collapse {
    width: 64px;
    .horizontal {
      .notitle {
        display: none;
      }
      & + .el-submenu__icon-arrow {
        display: none;
      }
    }
  }
  .collapse-btn {
    height: 8vh;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0px 20px;
    i {
      font-size: 26px;
    }
  }
}
</style>
