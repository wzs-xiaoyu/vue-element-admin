<template>
  <div class="menu">
    <div v-for="(item, index) in list" :key="index">
      <el-submenu v-if="isNotEmpty(item.children)" :index="item.path || item.name">
        <div slot="title">
          <i v-if="item.icon" :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </div>
        <menus-tree :list="item.children" />
      </el-submenu>
      <el-menu-item v-if="!isNotEmpty(item.children)" :index="item.path || item.name">
        <i :class="item.icon" v-if="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "amenuTree",
  props: {
    list: Array,
  },
  methods: {
    isNotEmpty(children) {
      return children && children.length > 0;
    },
  },
};
</script>
