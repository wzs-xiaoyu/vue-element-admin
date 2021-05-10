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
      console.log(cdata);
      const xAxisData = [];
      const barData = [];
      cdata.forEach(item => {
        xAxisData.push(item.name);
        const bar = { ...item };
        barData.push(bar);
      });
      return {
        color: ["#38A2FE"],
        legend: {
          show: false,
          data: this.legendData
        },
        grid: {
          left: "2%",
          right: "2%",
          bottom: "2%",
          top: "2%",
          containLabel: true
        },
        yAxis: {
          type: "category",
          data: xAxisData,
          axisLabel: {
            fontSize: "16",
            color: "#FFF"
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          axisLabel: {
            show: false,
            fontSize: "16",
            color: "#5E75BA"
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#5E75BA"
            }
          }
        },
        series: [
          {
            name: this.legendData[0],
            type: "bar",
            barWidth: "56",
            data: barData,
            label: {
              show: true,
              position: "right",
              color: "#FFF",
              fontSize: "16"
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    { offset: 0, color: "rgba(103,247,255,1)" },
                    { offset: 1, color: "rgba(0,47,140,1)" }
                  ],
                  false
                )
              }
            }
          }
        ]
      };
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {}
};
</script>
