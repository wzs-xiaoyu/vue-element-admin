<template>
  <div :class="isIcon ? 'atop-menu-icon' : 'atop-menu'">
    <el-menu :default-active="currentMenu" class="el-menu-demo" mode="horizontal" :router="true" @select="handleSelect">
      <template v-if="menuList.length > 0">
        <amenu-tree :list="menuList"></amenu-tree>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "atopMenu",
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
.menu {
  display: flex;
  height: 100%;
}
.el-menu--horizontal .el-menu--popup > div {
  flex-direction: column;
}
.el-menu--horizontal .el-menu--popup .el-menu-item.is-active,
.el-menu--horizontal .el-menu--popup .el-submenu.is-active > .el-submenu__title {
  color: #ed455d;
  background-color: #fdecef;
}
.el-menu--horizontal .el-menu--popup .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu--popup .el-menu-item:not(.is-disabled):hover {
  color: #ed455d;
  background-color: #fdecef;
}
.el-menu--horizontal .el-menu--popup .el-menu-item,
.el-menu--horizontal .el-menu--popup .el-submenu__title {
  color: #303133;
}
.atop-menu-icon {
  height: 100%;
  .el-menu.el-menu--horizontal {
    height: 100%;
    border-bottom: none;
    .el-menu-item,
    .el-submenu__title {
      height: 100%;
    }
    .el-menu-item.is-active {
      border-bottom: 2px solid #ed455d;
      background-color: #fdecef;
    }
  }
  .el-menu--horizontal .el-submenu.is-active .el-submenu__title {
    border-bottom: 2px solid #ed455d;
    background-color: #fdecef;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    color: #ed455d;
    background-color: #fdecef;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    color: #ed455d;
    background-color: #fdecef;
  }
}
.atop-menu {
  height: 100%;
  .el-menu.el-menu--horizontal {
    border-bottom: none;
    height: 100%;
    .el-menu-item,
    .el-submenu__title {
      height: 100%;
    }
    .el-menu-item.is-active {
      border-bottom: 2px solid #ed455d;
      background-color: #fdecef;
    }
  }
  .el-menu--horizontal .el-submenu.is-active .el-submenu__title {
    border-bottom: 2px solid #ed455d;
    background-color: #fdecef;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    color: #ed455d;
    background-color: #fdecef;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    color: #ed455d;
    background-color: #fdecef;
  }
}
</style>
