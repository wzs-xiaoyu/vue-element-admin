<template>
  <div class="drag-box-item">
    <div class="item-title">
      {{ headerText }}
    </div>
    <draggable :list="list" v-bind="$attrs" class="item-ul" :set-data="setData">
      <div v-for="element in list" :key="element.content+''+element.id" class="board-item">
        {{ element.content }} {{ element.id }}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'TodoList',
  components: {
    draggable
  },
  props: {
    headerText: {
      type: String,
      default: 'Header'
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    setData(dataTransfer) {
      // to avoid Firefox bug
      // Detail see : https://github.com/RubaXa/Sortable/issues/1012
      dataTransfer.setData('Text', '')
    }
  }
}
</script>
<style lang="less" scoped>
.drag-box-item {
  flex: 1;
  background-color: #eff1f5;
  border-radius: 6px;
  border: 1px #e1e4e8 solid;
  &:nth-child(2n){
    margin: 0px 16px;
  }
  .item-title {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    color: #FFF;
    font-weight: 600;
    border-radius: 6px 6px 0 0;
  }
  .item-ul {
    padding: 14px;
    overflow-y: auto;
    .board-item {
      padding: 12px;
      margin: 0px 0 14px;
      list-style: none;
      background-color: #fff;
      border-radius: 6px;
      cursor: pointer;
      -webkit-transition: transform .1s ease-in;
      transition: transform .1s ease-in;
      box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
      &:last-child{
        margin-bottom: 0px;
      }

    }
    .board-item:hover{
      transform: scaleY(1.1);
    }
    .item-ul::-webkit-scrollbar{
      width: 0;
    }
  }
}
</style>