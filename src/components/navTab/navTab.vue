<template>
  <div class="nav-tab">
    <div class="tab-item" :class="{ activeTab: currentPath == item.path }" v-for="(item, index) in tabList" :key="index" @click="_clickTab(index)">
      {{ item.title }}
      <em v-show="tabList.length > 1" class="el-icon-error close-item" :class="{ activeClose: currentPath == item.path }" @click.stop="_clickClose(index)"> </em>
    </div>
    <el-dropdown @command="_handleCommand" class="tabEdit">
      <span class="el-dropdown-link">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="closeThis">关闭当前页面</el-dropdown-item>
        <el-dropdown-item command="closeOther">关闭其他页面</el-dropdown-item>
        <el-dropdown-item command="closeAll">关闭所有页面</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { routes } from "../../router/index";
export default {
  name: "navTab",
  data() {
    return {
      tabList: [],
      currentPath: "",
    };
  },
  watch: {
    $route(to) {
      const { name, path, meta } = to;
      this.currentPath = path;
      //如果通过直接跳转，加上tab
      const tabNameList = this.tabList.map((item) => item.name);
      if (!tabNameList.includes(name)) {
        this.addTab(name);
      }
    },
  },
  computed: {
    currentIndex() {
      let pathList = this.tabList.map((item) => item.path);
      let index = pathList.indexOf(this.currentPath);
      return index;
    },
  },
  created() {
    // 第一次打开时，添加当前标签页
    let [currentItem] = this.findTab(routes, this.$route.name);
    const { name, path, meta } = currentItem;
    this.currentPath = path;
    const tabItem = { name, path, title: meta ? meta.title : "" };
    this.tabList.push(tabItem);
  },
  mounted() {
    this.$root.$on("close", () => {
      this._clickClose(this.currentIndex);
    });
  },
  methods: {
    _clickTab(index) {
      this.$router.push(this.tabList[index].name);
    },
    _clickClose(index) {
      const step = index === 0 ? 1 : -1;
      this.$router.push(this.tabList[index + step].name);
      this.tabList.splice(index, 1);
    },
    _handleCommand(command) {
      if (command === "closeThis") {
        this._clickClose(this.currentIndex);
      } else if (command === "closeOther") {
        this.tabList = [this.tabList[this.currentIndex]];
      } else {
        this.tabList = [];
        this.$router.push("/");
      }
    },
    findTab(routes, tabName) {
      let arr = [];
      if (!routes.length) return [];
      for (let i in routes) {
        if (routes[i].children) {
          let data = routes[i].children;
          data.map((item) => {
            if (item.name === tabName) {
              arr.push(item);
            }
          });
        }
      }
      return !arr.length ? [] : arr;
    },
    addTab(tabName) {
      tabName = tabName.replace("/", "");
      let [currentItem] = [];
      if (tabName.indexOf("P") >= 0 || /^\d+$/.test(tabName)) {
        [currentItem] = this.findTab(routes, tabName);
      } else {
        [currentItem] = routes.filter((router) => router.name === tabName);
      }
      if (!currentItem) {
        tabName = "404";
      }
      const tabNameList = this.tabList.map((item) => item.name);
      // 如果已经有标签了，跳转到以有标签
      if (tabNameList.includes(tabName)) {
        this._clickTab(tabNameList.indexOf(tabName));
      } else {
        if (tabName.indexOf("P") >= 0 || /^\d+$/.test(tabName)) {
          [currentItem] = this.findTab(routes, tabName);
        } else {
          [currentItem] = routes.filter((router) => router.name === tabName);
        }
        const { name, path, meta } = currentItem;
        const tabItem = {
          name,
          path,
          title: meta ? meta.title : "",
        };
        this.tabList.push(tabItem);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.nav-tab {
  background: #fff;
  display: flex;
  font-size: 12px;
  margin-bottom: 16px;
  .tab-item {
    width: 100px;
    line-height: 30px;
    padding: 0 10px;
    border-right: 1px solid #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &.activeTab {
      background-color: #fdf6f7;
      color: #e81734;
    }
    .close-item {
      color: #ddd;
      &.activeClose {
        color: #e81734;
      }
    }
  }
  .tabEdit {
    line-height: 30px;
    margin-left: auto;
    margin-right: 20px;
    color: #e81734;
    cursor: pointer;
  }
}
</style>
