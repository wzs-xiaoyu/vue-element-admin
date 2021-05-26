<template>
  <div class="bread-crumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadCrumbList" :key="index">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>{{ breadCrumbList[1].meta.title }}</h3>
  </div>
</template>
<script>
import { routes } from "../../router/index";
export default {
  name: "breadCrumb",
  data() {
    return {
      breadCrumbList: [],
    };
  },
  watch: {
    $route(to) {
      const { name, path, meta } = to;
      this.breadCrumbList = this.getBreadCrumbList(routes, name);
    },
  },
  created() {
    this.breadCrumbList = this.getBreadCrumbList(routes, this.$route.name);
  },
  methods: {
    getBreadCrumbList(routes, tabName) {
      let arr = [];
      if (!routes.length) return [];
      for (let i in routes) {
        if (routes[i].children) {
          let data = routes[i].children;
          data.map((item) => {
            if (item.name === tabName) {
              arr.push(routes[i]);
              arr.push(item);
            }
          });
        }
      }
      return !arr.length ? [] : arr;
    },
  },
};
</script>
<style lang="less" scoped>
.bread-crumb {
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  padding: 16px 22px;
  h3 {
    display: flex;
    align-items: center;
    margin: 4px 0px;
    overflow: hidden;
    margin-top: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
