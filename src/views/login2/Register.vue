<template>
  <div class="register">
    <particlesJs></particlesJs>
    <div class="register-form">
      <div class="rf-header">
        <h3>用户注册</h3>
      </div>
      <p class="rf-err" v-show="isShow">
        <span><i style="margin-right: 6px" class="el-icon-error"></i>{{ msgErr }}</span
        ><i @click.stop="isShow = false" class="el-icon-close"></i>
      </p>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
        <el-form-item label="" prop="userName">
          <el-input type="text" v-model="ruleForm.userName" prefix-icon="el-icon-user" placeholder="请输入用户名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input type="password" v-model="ruleForm.password" prefix-icon="el-icon-goods" placeholder="请输入密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" prefix-icon="el-icon-goods" placeholder="请输入确认密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="" prop="name">
          <el-input type="text" v-model="ruleForm.name" prefix-icon="el-icon-goods" placeholder="请输入姓名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.stop="registerForm" :loading="loading" style="width: 100%">注册</el-button>
        </el-form-item>
      </el-form>
      <a class="register" href="javascript:void(0);" @click.stop="loginForm">登录</a>
    </div>
  </div>
</template>
<script>
import { rules } from "../../../commitlint.config";
export default {
  name: "Register",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value)) {
        callback(new Error("6-16位大小写字母和数字组合"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    var trvalidateName = (rules, value, callback) => {
      if (value === "") {
        callback(new Error("请输入姓名"));
      } else if (/[^\u4E00-\u9FA5]/g.test(value)) {
        callback(new Error("姓名只能为汉字"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        password: "",
        checkPass: "",
        name: "",
      },
      rules: {
        userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        name: [{ validator: trvalidateName, trigger: "blur" }],
      },
      loading: false,
      isShow: true,
      msgErr: "注册失败",
    };
  },
  methods: {
    // 注册
    registerForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          console.log(this.ruleForm);
        }
      });
    },
    // 登录
    loginForm() {
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="less" scoped>
.register {
  width: 100%;
  height: 100%;
  .register-form {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: fixed;
    z-index: 1;
    top: 50%;
    left: 50%;
    padding: 24px;
    width: 26%;
    margin: -13% -13%;
    .rf-header {
      display: flex;
      margin-bottom: 24px;
      font-size: 24px;
    }
    .rf-err {
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
