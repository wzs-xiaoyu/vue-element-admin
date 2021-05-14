<template>
  <div class="p0301">
    <div class="radio">
      排序：
      <el-radio-group v-model="reverse">
        <el-radio :label="true">倒序</el-radio>
        <el-radio :label="false">正序</el-radio>
      </el-radio-group>
    </div>
    <div style="margin-top: 16px; display: flex">
      <el-timeline :reverse="reverse" style="flex: 1">
        <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
          <div slot="dot" class="vab-dot"><span></span></div>
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
      <el-timeline :reverse="reverse" style="flex: 1">
        <el-timeline-item :timestamp="item.timestamp" placement="top" v-for="(item, index) in activeCard" :key="index">
          <div slot="dot" class="vab-dot"><span></span></div>
          <div class="vcard">
            <h4>{{ item.title }}</h4>
            <p>{{ item.content }}</p>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
export default {
  name: "P0301",
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13",
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11",
        },
      ],
      activeCard: [
        { timestamp: "2018/4/12", content: "王小虎 提交于 2018/4/12 20:46", title: "更新 Github 模板" },
        { timestamp: "2018/4/9", content: "王小虎 提交于 2018/4/9 20:46", title: "更新 Github 模板" },
        { timestamp: "2018/4/3", content: "王小虎 提交于 2018/4/3 20:46", title: "更新 Github 模板" },
        { timestamp: "2018/4/2", content: "王小虎 提交于 2018/4/2 20:46", title: "更新 Github 模板" },
      ],
    };
  },
};
</script>
<style lang="less">
.p0301 {
  .vcard {
    position: relative;
    width: 80%;
    padding: 20px;
    background: #ff6700;
    border-radius: 4.5px;
    color: #fff;
    &::after {
      position: absolute;
      top: 8px;
      left: -10px;
      width: 0;
      height: 0;
      overflow: hidden;
      content: "";
      border-color: #ff6700 transparent transparent;
      border-style: solid dashed dashed;
      border-width: 10px;
    }
  }
  @keyframes vabDot {
    0% {
      transform: scale(0.5);
      opacity: 1;
    }
    30% {
      opacity: 0.4;
    }
    40% {
      opacity: 0.2;
    }
    70% {
      opacity: 0.1;
    }
    100% {
      transform: scale(2.2);
      opacity: 0;
    }
  }
  .vab-dot {
    left: -1px;
    width: 12px;
    height: 12px;
    margin: auto !important;
    display: inline-block;
    border-radius: 50%;
    background-color: #ff6700;
    span {
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #ff6700;
      -webkit-animation: vabDot 1.2s ease-in-out infinite;
      animation: vabDot 1.2s ease-in-out infinite;
    }
  }
}
</style>
