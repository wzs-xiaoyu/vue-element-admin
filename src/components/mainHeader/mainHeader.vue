<template>
  <div class="main-header">
    <div class="header-left">
      <img class="logo" src="@common/image/logo.png" />
      <span class="logo-text">Element UI Admin</span>
    </div>
    <div v-show="active === 'atopMenu'" class="header-menu"><slot name="menu"></slot></div>
    <div class="header-right">
      <img src="@common/image/headImg.gif" class="head-img" />
      <div>
        <span class="user-name">{{ userInfo.userName }}</span>
        <el-dropdown @command="_handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="personal">个人中心</el-dropdown-item>
            <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "../../views/storeSysSetting.js";
export default {
  name: "mainHeader",
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem("loginData"));
  },
  computed: {
    ...mapState({ navmode: "navmode" }),
    active() {
      return this.navmode;
    },
  },
  methods: {
    _handleCommand(command) {
      if (command === "loginOut") {
        window.localStorage.clear();
        this.$router.push("/login");
      } else {
        this.$router.push("/mine");
      }
    },
  },
};
</script>
<style lang="less" scoped>
.main-header {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  // box-shadow: 10px 10px 5px rgba(0,21,41,8%);
  .header-left,
  .header-right {
    display: flex;
    color: #333;
    font-size: 12px;
    align-items: center;
    .logo {
      width: 26px;
      height: 27px;
      margin-right: 5px;
    }
    .logo-text {
      font-size: 20px;
    }
    .head-img {
      width: 40px;
      height: 40px;
      margin: 0 10px;
      border-radius: 50%;
    }
    .user-name {
      font-size: 16px;
    }
    i {
      font-size: 18px;
    }
  }
  .header-menu {
    flex: 1;
    margin: 0px 14px;
    height: 100%;
  }
}
</style>
