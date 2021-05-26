<template>
  <div class="demo">
    <div class="demo-chart">
      <div style="width: 50%; height: 400px" id="myechart">
        <chartBridge :charData="bridgeData" :legendData="['桥梁数量']" :width="'100%'" :height="'100%'"></chartBridge>
      </div>
      <div style="width: 50%; height: 400px">
        <chartMileage :charData="bridgeData" :legendData="['里程']" :width="'100%'" :height="'100%'"></chartMileage>
      </div>
    </div>
  </div>
</template>
<script>
import chartBridge from "./chartBridge.vue";
import chartMileage from "./chartMileage.vue";
export default {
  name: "index",
  components: {
    chartBridge,
    chartMileage,
  },
  data() {
    return {
      mileageData: [
        { name: "2016年", value: 238052.09 },
        { name: "2017年", value: 242546.3 },
        { name: "2018年", value: 252928.63 },
        { name: "2019年", value: 262408.66 },
        { name: "2020年", value: 292479.29 },
      ],
      bridgeData: [
        { name: "2016年", value: 26020 },
        { name: "2017年", value: 27621 },
        { name: "2018年", value: 28737 },
        { name: "2019年", value: 30563 },
        { name: "2020年", value: 35335 },
      ],
    };
  },
  mounted() {
    // this.initEcharts()
  },
  methods: {
    initEcharts() {
      let myEcharts = this.$echarts.init(document.getElementById("myechart"));
      let option = {
        title: {
          text: "按需引入",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五"],
        },
        yAxis: {
          type: "value",
        },
        legend: {},
        series: [
          {
            name: "星期",
            type: "bar",
            data: [23, 33, 45, 56, 78],
          },
        ],
      };
      myEcharts.setOption(option);
    },
  },
};
</script>
<style lang="less" scoped>
.demo {
  width: 100%;
  background-color: #fff;
  .demo-chart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 400px;
  }
}
</style>
