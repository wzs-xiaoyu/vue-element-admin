<template>
  <div class="not-found">
    <img src="@common/image/404.png" alt="" />
    <div class="nf-desc">
      <h3><span>Sorry,</span>Page Not Found</h3>
      <h4>当前页面不存在...</h4>
      <p>请检查您输入的地址是否正确，或者点击下面的按钮返回首页</p>
      <div>
        <el-button type="primary" round @click.stop="goHome">{{ count }}秒返回首页</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound",
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
.not-found {
  background-color: #fff;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  img {
    width: 474px;
    height: 414px;
  }
  .nf-desc {
    width: 336px;
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    h3 {
      font-size: 28px;
      color: #1890ff;
      font-weight: 600;
      font-family: sans-serif;
      margin-bottom: 28px;
      span {
        font-weight: 600;
        font-family: sans-serif;
        font-size: 46px;
        display: block;
        margin-bottom: 16px;
      }
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
