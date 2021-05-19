<template>
  <div class="login">
    <particlesJs></particlesJs>
    <div class="login-form">
      <div class="lf-header">
        <h3>用户登录</h3>
      </div>
      <p class="lf-err" v-show="isShow">
        <span><i style="margin-right: 6px" class="el-icon-error"></i>{{ msgErr }}</span
        ><i @click.stop="isShow = false" class="el-icon-close"></i>
      </p>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
        <el-form-item label="" prop="userName">
          <el-input type="text" v-model="ruleForm.userName" prefix-icon="el-icon-user" placeholder="请输入用户名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input type="password" v-model="ruleForm.password" prefix-icon="el-icon-lock" placeholder="请输入密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="" prop="code">
          <el-input type="text" v-model="ruleForm.code" prefix-icon="el-icon-c-scale-to-original" placeholder="请输入验证码" autocomplete="off">
            <validCode slot="suffix" v-model="validCode" ref="refreshCodeRef" @sendData="getCode"></validCode>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.stop="loginForm()" :loading="loading" style="width: 100%">登录</el-button>
        </el-form-item>
      </el-form>
      <a class="register" href="javascript:void(0);" @click.stop="registerForm">注册</a>
    </div>
  </div>
</template>
<script>
import validCode from "./validCode.vue";
export default {
  name: "Login",
  components: {
    validCode,
  },
  data() {
    var validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value !== this.validCode) {
        callback(new Error("验证码不正确"));
      } else {
        callback();
      }
    };
    return {
      validCode: "",
      ruleForm: {
        userName: "",
        password: "",
        code: "",
      },
      rules: {
        userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }],
      },
      loading: false,
      isShow: false,
      msgErr: "登录失败",
    };
  },
  mounted() {
    // 监听enter键登录
    document.addEventListener("keydown", (e) => {
      let key = window.event.keyCode;
      if (key == 13) {
        this.loginForm();
      }
    });
  },
  methods: {
    // 登录
    loginForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          let param = { ...this.ruleForm };
          delete param.code;
          this.$post("user/userLogin", param, true)
            .then((res) => {
              if (!res.success) {
                this.isShow = true;
                this.msgErr = res.message;
                this.loading = false;
                throw new Error(res.msg);
              } else {
                this.isShow = false;
                this.loading = false;
                window.loginData = res.data;
                window.localStorage.setItem("loginData", JSON.stringify(res.data));
                this.$router.push("/index");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    //从子组件获取验证码，并将验证码返回到页面
    getCode(data) {
      this.validCode = data;
    },
    // 注册
    registerForm() {
      this.$router.push("/register");
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  .login-form {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: fixed;
    z-index: 1;
    top: 50%;
    left: 50%;
    padding: 24px;
    width: 26%;
    margin: -11% -13%;
    .lf-header {
      display: flex;
      margin-bottom: 24px;
      font-size: 24px;
    }
    .lf-err {
      color: #f56c6c;
      font-size: 14px;
      margin-bottom: 10px;
      line-height: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #ffa39e;
      background-color: #fff1f0;
      padding: 8px 16px;
      border-radius: 4px;
      span i {
        cursor: default;
      }
      i {
        cursor: pointer;
      }
    }
    .el-form-item {
      margin-bottom: 24px;
    }
    .register {
      color: #1890ff;
    }
  }
}
</style>
