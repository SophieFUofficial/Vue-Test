<template>
  <el-container style="height: 800px; border: 1px solid #eee">
    <el-header style="font-size: 12px">
      <div style="text-align: left">
        <img src="../../assets/pic/logo2.jpg"/>
      </div>
    </el-header>
    <el-main style="margin-top: 50px">
      <el-form :label-position="labelPosition" style="width: 200px;margin-left: auto; margin-right: auto">
        <el-form-item label="昵称">
          <el-alert style="line-height: 20px"
                    v-bind:title=nameErrTitle
                    type="error"
                    show-icon v-if="nameErr">
          </el-alert>
          <el-input v-model="userName" placeholder="请输入昵称" clearable @change="nameValidate"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password" placeholder="请输入密码" minlength=6  maxlength=26  clearable
                    @change="changeValue"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-alert style="line-height: 20px"
                    v-bind:title=pwdErrTitle
                    type="error"
                    show-icon v-if="pwdErr">
          </el-alert>
          <el-input v-model="confirmPassword" placeholder="请输入密码" minlength=6  maxlength=26  clearable
                    @change="changeValue"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-alert style="line-height: 20px"
                    v-bind:title=phoneErrTitle
                    type="error"
                    show-icon v-if="phoneErr">
          </el-alert>
          <el-input v-model="phone" placeholder="请输入手机号" clearable @change="phoneValidate"></el-input>
        </el-form-item>
      </el-form>
      <el-row>
        <el-button round @click="saveInfo">保存信息</el-button>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import Axios from '../../common/axios'
  import Tips from '../../components/Tips'

  export default {
    data () {
      return {
        labelPosition: 'left',
        userName: '',
        password: '',
        confirmPassword: '',
        phone: '',
        pwdErr: false,
        pwdErrTitle: '',
        nameErr: false,
        nameErrTitle: '',
        phoneErr: false,
        phoneErrTitle: '',
      }
    },
    methods: {
      saveInfo: function () {
        let userName = this.userName;
        let password = this.password;
        let confirmPassword = this.confirmPassword;
        let phone = this.phone;
        if (password != confirmPassword) {
          this.pwdErrTitle = '两次密码不一致';
          this.pwdErr = true;
          return
        }
        if(!password.trim() || !confirmPassword.trim()){
          this.pwdErrTitle = '请输入密码';
          this.pwdErr = true;
          return
        }
        if (!userName.trim()) {
          this.nameErrTitle = '请输入昵称';
          this.nameErr = true;
          return
        }
        if(!phone.trim()){
          this.phoneErrTitle = '请输入手机号';
          this.phoneErr = true;
          return
        }
        let params = {};
        params.userName = userName;
        params.password = password;
        params.confirmPassword = confirmPassword;
        params.phone = phone;
        Axios.axiosPost("/login/register",params).then(res =>{
          if(res.rescode == 200){
            Tips.successTip("注册成功");
            this.$router.push({path: "/main"});
          }else {
            Tips.errorTip(res.msg);
          }
        }).catch((e) => {
          return
        })
      },
      changeValue: function () {
        this.pwdErr = false;
      },
      nameValidate: function () {
        if (this.userName.length > 10) {
          this.nameErrTitle = '请输入10字以内昵称';
          this.nameErr = true;
        } else {
          this.nameErr = false;
        }
      },
      phoneValidate:function () {
        let length = this.phone.length;
        let reg = /^1[34578]\d{9}$/;
        if (length != 11 || !reg.test(this.phone)){
          this.phoneErrTitle = "请输入正确的手机号";
          this.phoneErr = true;
        }else{
          this.phoneErr = false;
        }
      }
    },

  }
</script>

<style>

</style>
