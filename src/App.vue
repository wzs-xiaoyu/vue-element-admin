<template>
  <div id="app">
    <home></home>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import Home from './views/home/home'
export default {
  components: {Home}
}
</script>
<style lang="less">
@import"~@common/style/reset.less";
@import "~@common/style/common.less";
</style>
