<template>
  <echarts ref="echart" width="100%" height="100%" :option="chartOption"></echarts>
</template>
<script>
export default {
  props: ["charData", "legendData"],
  data() {
    return {};
  },
  computed: {
    chartOption() {
      const cdata = this.charData;
      const yAxisData = [];
      const barData = [];
      cdata.forEach((item) => {
        yAxisData.push(item.name);
        const bar = { ...item };
        barData.push(bar);
      });
      return {
        color: ["#38A2FE"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          show: false,
          data: this.legendData,
        },
        grid: {
          left: "2%",
          right: "2%",
          bottom: "6%",
          top: "10%",
          containLabel: true,
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          axisLabel: {
            fontSize: "16",
            color: "#5E75BA",
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: "#5E75BA",
            },
          },
        },
        xAxis: {
          type: "category",
          data: yAxisData,
          axisLabel: {
            fontSize: "16",
            color: "#38A2FE",
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: this.legendData[0],
            type: "bar",
            barWidth: "24",
            data: barData,
            label: {
              show: true,
              position: "top",
              color: "#38A2FE",
              fontSize: "16",
            },
            itemStyle: {
              // normal: {//4.0.0版本废弃
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: "rgba(255,192,0,1)" },
                  { offset: 1, color: "rgba(0,47,140,1)" },
                ],
                false
              ),
              // }
            },
          },
        ],
      };
    },
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
};
</script>
