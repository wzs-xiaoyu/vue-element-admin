<template>
  <div class="no-authority">
    <img src="@common/image/403.png" alt="" />
    <div class="na-desc">
      <h3>Forbidden</h3>
      <h4>当前用户无权限，请联系管理员...</h4>
      <p>You don't have permission to access on this server.</p>
      <div>
        <el-button type="primary" round @click.stop="goHome">{{ count }}秒返回首页</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Forbidden",
  data() {
    return {
      count: 5,
      timer: null,
    };
  },
  methods: {
    // 直接跳转
    goHome() {
      this.$root.$emit("close");
      this.$router.push("/");
    },
    // 五秒后跳转
    closePage() {
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.count > 0) {
            this.count--;
          } else {
            clearInterval(this.timer);
            this.timer = null;
            this.count = 5;
            this.goHome();
          }
        }, 1000);
      }
    },
  },
  activated() {
    this.closePage();
  },
};
</script>
<style lang="less" scoped>
.no-authority {
  background-color: #fff;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  img {
    width: 464px;
    height: 412px;
  }
  .na-desc {
    width: 336px;
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    h3 {
      font-size: 36px;
      color: #1890ff;
      font-weight: 600;
      font-family: sans-serif;
      margin-bottom: 28px;
    }
    h4 {
      font-weight: 600;
      color: #222;
      margin-bottom: 16px;
    }
    p {
      color: rgba(0, 0, 0, 0.65);
      margin-bottom: 32px;
      font-size: 14px;
      line-height: 1.6;
    }
    .el-button--primary {
      background-color: #1890ff;
      border-color: #1890ff;
    }
  }
}
</style>
