
<template>
  <div class="drag-box">
    <TodoList :key="1" :list="todo" :group="group" class="kanban todo" header-text="Todo" />
    <TodoList :key="2" :list="doing" :group="group" class="kanban working" header-text="Working" />
    <TodoList :key="3" :list="done" :group="group" class="kanban done" header-text="Done" />
  </div>
</template>
<script>
import TodoList from './TodoList.vue'

export default {
  name: 'P0302',
  components: {
    TodoList
  },
  data() {
    return {
      group: 'mission',
      todo: [
        {
          id: 1,
          content: '开发图表组件'
        },
        {
          id: 2,
          content: '开发拖拽组件'
        },
        {
          id: 3,
          content: '开发权限测试组件'
        }
      ],
      doing: [
        {
          id: 1,
          content: '开发登录注册页面'
        },
        {
          id: 2,
          content: '开发头部组件'
        },
        {
          id: 3,
          content: '开发表格相关组件'
        },
        {
          id: 4,
          content: '开发表单相关组件'
        }
      ],
      done:[
        {
          id: 1,
          content: '初始化项目，生成工程目录，完成相关配置'
        },
        {
          id: 2,
          content: '开发项目整体框架'
        }
      ]
    }
  }
}
</script>
<style lang="less">
.drag-box {
  display: flex;
  user-select: none;
}
.kanban {
  &.todo {
    .item-title {
      background: #4A9FF9;
    }
  }
  &.working {
    .item-title {
      background: #f9944a;
    }
  }
  &.done {
    .item-title {
      background: #2ac06d;
    }
  }
}
</style>