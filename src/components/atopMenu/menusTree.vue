<template>
  <div class="menu">
    <div v-for="(item, index) in menuList" :key="index">
      <el-submenu v-if="isNotEmpty(item.children)" :index="item.path || item.name">
        <div slot="title" class="vertical">
          <i v-if="isIcon && item.icon" :class="item.icon"></i>
          <img :src="item.icon" v-else />
          <span>{{ item.name }}</span>
        </div>
        <menus-tree :menu-list="item.children" :is-icon="isIcon" />
      </el-submenu>
      <el-menu-item v-if="!isNotEmpty(item.children) && isIcon" :index="item.path || item.name">
        <i :class="item.icon" v-if="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
      <el-menu-item v-if="!isNotEmpty(item.children) && !isIcon" :index="item.path || item.name">
        <div class="vertical">
          <img :class="item.icon" v-if="item.icon" :src="item.icon" :alt="item.name" />
          <span slot="title">{{ item.name }}</span>
        </div>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "menusTree",
  props: {
    menuList: Array,
    isIcon: Boolean,
  },
  methods: {
    isNotEmpty(children) {
      return children && children.length > 0;
    },
  },
};
</script>
