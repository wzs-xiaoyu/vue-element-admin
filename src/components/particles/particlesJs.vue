<template>
  <div id="particles-js"></div>
</template>
<script>
import particlesConfig from "./particles.json";
export default {
  name: "particlesJs",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      particlesJS("particles-js", particlesConfig);
      document.body.style.overflow = "hidden";
    },
  },
};
</script>
<style lang="less" scoped>
#particles-js {
  width: 100%;
  height: 100vh;
  background-color: rgb(14, 26, 83, 0.92);
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
</style>
