<template>
  <div class="main-header">
    <div class="header-left">
      <img class="logo" src="@common/image/logo.png"/>
      <span class="logo-text">Element UI Admin</span>
    </div>
    <div class="header-right">
      <img src="@common/image/headImg.gif" class="head-img"/>
      <div>
        <span class="user-name">李四</span>
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
export default {
  name:"mainHeader",
  data(){
    return{

    }
  },
  methods:{
    _handleCommand(command){
      console.log(command);
    }
  }
}
</script>
<style lang="less" scoped>
.main-header{
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  height: 100%;
  border-bottom: none;
  box-shadow: 10px 10px 5px rgba(0,21,41,8%);
  .header-left,.header-right{
    display: flex;
    color: #333;
    font-size: 12px;
    align-items: center;
    .logo{
      width: 26px;
      height: 27px;
      margin-right: 5px;
    }
    .logo-text{
      font-size: 20px;
    }
    .head-img{
      width: 40px;
      height: 40px;
      margin: 0 10px;
      border-radius: 50%;
    }
    .user-name{
      font-size: 16px;
    }
    i{
      font-size: 18px;
    }
  }
}
</style>