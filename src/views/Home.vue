<template>
  <div>
    <el-container>
      <el-header height="" v-if="!isSingle">
        <main-header></main-header>
      </el-header>
      <el-container>
        <!-- <div width='auto' v-if="!isSingle">
          <aside-menu :isMenuCollapse="isCollapse" @select="handleselect"></aside-menu>
        </div> -->
        <el-aside width="auto" v-if="!isSingle">
          <aside-menu :isMenuCollapse="isCollapse" :isMenuIcon="isIcon" @select="handleselect"></aside-menu>
        </el-aside>
        <el-main>
          <nav-tab ref="navTab" v-if="!isSingle"></nav-tab>
          <div class="main-view">
            <keep-alive>
              <router-view />
            </keep-alive>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { parseUrl } from "@common/js/utils";
export default {
  name: "Home",
  data() {
    return {
      isSingle: false,
      isCollapse: false,
      isIcon: true,
    };
  },
  created() {
    const urlPreams = parseUrl(window.location.href);
    if (urlPreams.singelPage === "true") {
      this.isSingle = true;
    }
  },
  methods: {
    handleselect(key) {
      this.$refs.navTab.addTab(key);
    },
  },
};
</script>
<style lang="less" scoped>
.el-main {
  color: #333;
  padding: 0;
  // margin-left: 16px;
}
.main-view {
  height: calc(92vh - 16px - 30px - 16px);
  // margin-right: 16px;
  overflow: auto;
  margin: 16px;
  // background-color: #fff;
  // padding: 16px;
}
.el-header {
  padding: 0;
  height: 8vh;
  border-bottom: 1px solid #fefefe;
  em {
    line-height: 50px;
  }
}
.el-container {
  background: #f4f4f4;
}
</style>
