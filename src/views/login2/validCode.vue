<template>
  <div class="valid-code pointer disabled-select" :style="`width:${width}; height:${height}`" @click="refreshCode">
    <span class="va-span" v-for="(item, index) in codeList" :key="index" :style="getStyle(item)">{{ item.code }}</span>
  </div>
</template>
<script>
export default {
  name: "validCode",
  props: {
    width: {
      type: String,
      default: "40%",
    },
    height: {
      type: String,
      default: "40px",
    },
    length: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      codeList: [],
    };
  },
  mounted() {
    this.createdCode();
  },
  methods: {
    //刷新验证码的方法
    refreshCode() {
      this.createdCode();
    },
    // 生成验证码的方法
    createdCode() {
      let len = this.length,
        codeList = [],
        chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789",
        charsLen = chars.length;
      // 生成
      for (let i = 0; i < len; i++) {
        let rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)];
        codeList.push({
          code: chars.charAt(Math.floor(Math.random() * charsLen)),
          color: `rgb(${rgb})`,
          fontSize: "22px",
          padding: `${[Math.floor(Math.random() * 10)]}px`,
          transform: `rotate(${Math.floor(Math.random() * 60) - Math.floor(Math.random() * 60)}deg)`,
        });
      }
      // 指向
      this.codeList = codeList;
      // 将当前数据派发出去
      // this.$emit('update:value', codeList.map(item => item.code).join(''))
      this.$emit("sendData", codeList.map((item) => item.code).join(""));
      //this.$emit('暴露给父组件的方法名',携带的参数); //记住你命名的这个方法
    },
    // 每个元素生成动态的样式
    getStyle(data) {
      return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`;
    },
  },
  activated() {
    this.createdCode();
  },
};
</script>
<style scoped>
.valid-code {
  display: flex;
  justify-content: center;
  align-items: center;
}
.va-span {
  display: inline-block;
}
</style>
