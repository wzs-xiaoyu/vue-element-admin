<template>
  <div class="p0302">
    <div class="drag-box">
      <div class="drag-box-item">
        <div class="item-title todo">Todo</div>
        <draggable v-model="todo" @remove="removeHandle" :options="dragOptions">
          <transition-group tag="div" id="todo" class="item-ul">
            <div v-for="item in todo" class="drag-list" :key="item.content + '' + item.id">
              {{ item.content }}
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="drag-box-item">
        <div class="item-title doing">Doing</div>
        <draggable v-model="doing" @remove="removeHandle" :options="dragOptions">
          <transition-group tag="div" id="doing" class="item-ul">
            <div v-for="item in doing" class="drag-list" :key="item.content + '' + item.id">
              {{ item.content }}
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="drag-box-item">
        <div class="item-title done">Done</div>
        <draggable v-model="done" @remove="removeHandle" :options="dragOptions">
          <transition-group tag="div" id="done" class="item-ul">
            <div v-for="item in done" class="drag-list" :key="item.content + '' + item.id">
              {{ item.content }}
            </div>
          </transition-group>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "P0302",
  data() {
    return {
      dragOptions: {
        animation: 120,
        scroll: true,
        group: "sortlist",
        ghostClass: "ghost-style",
      },
      todo: [
        {
          id: 1,
          content: "开发图表组件",
        },
        {
          id: 2,
          content: "开发拖拽组件",
        },
        {
          id: 3,
          content: "开发权限测试组件",
        },
      ],
      doing: [
        {
          id: 1,
          content: "开发登录注册页面",
        },
        {
          id: 2,
          content: "开发头部组件",
        },
        {
          id: 3,
          content: "开发表格相关组件",
        },
        {
          id: 4,
          content: "开发表单相关组件",
        },
      ],
      done: [
        {
          id: 1,
          content: "初始化项目，生成工程目录，完成相关配置",
        },
        {
          id: 2,
          content: "开发项目整体框架",
        },
      ],
    };
  },
  components: {
    draggable,
  },
  methods: {
    removeHandle(event) {
      console.log(event);
      this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `);
    },
  },
};
</script>
<style lang="less" scoped>
.p0302 {
  width: 100%;
  background-color: #fff;
  .drag-box {
    display: flex;
    user-select: none;
    .drag-box-item {
      flex: 1;
      background-color: #eff1f5;
      border-radius: 6px;
      border: 1px #e1e4e8 solid;
      &:nth-child(2n) {
        margin: 0px 16px;
      }
      .item-title {
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        padding: 0 20px;
        text-align: center;
        color: #fff;
        font-weight: 600;
        border-radius: 6px 6px 0 0;
      }
      .todo {
        background-color: #4a9ff9;
      }
      .doing {
        background-color: #f9944a;
      }
      .done {
        background-color: #2ac06d;
      }
      .item-ul {
        padding: 14px;
        overflow-y: scroll;
        .drag-list {
          padding: 12px;
          margin: 0px 0 14px;
          list-style: none;
          background-color: #fff;
          border-radius: 6px;
          cursor: pointer;
          -webkit-transition: transform 0.1s ease-in;
          transition: transform 0.1s ease-in;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
          &:last-child {
            margin-bottom: 0px;
          }
        }
        .drag-list:hover {
          transform: scaleY(1.1);
        }
      }
      .item-ul::-webkit-scrollbar {
        width: 0;
      }
    }
  }
}
</style>
