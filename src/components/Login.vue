<template>
  <div id="login">
    <h1></h1>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="main"></div>
          <div class="form">
            <h3 @click="showRegister">创建账户</h3>
            <transition name="slide">
              <div :class="{show: isShowRegister}" class="register">
                <input type="text" v-model="register.username" placeholder="用户名" />
                <input type="password" v-model="register.password" placeholder="密码" />
                <p :class="{error: register.isError}">{{register.notice}}</p>
                <div class="button" @click="onRegister">创建账号</div>
              </div>
            </transition>
            <h3 @click="showLogin">登录</h3>
            <transition name="slide">
              <div :class="{show: isShowLogin}" class="login">
                <input type="text" v-model="login.username" placeholder="输入用户名" />
                <input type="password" v-model="login.password" placeholder="输入密码" />
                <p :class="{error: login.isError}">{{login.notice}}</p>
                <div class="button" @click="onLogin">登录</div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/helpers/request'

request('/auth/login', 'POST', {username: 'hunger', password: '123456'})
  .then( data => { 
    console.log(data) 
  }) 

export default {
  name: "Login",
  data() {
    return {
      isShowLogin: true,
      isShowRegister: false,
      login: {
        username: 'hunger',
        password: '123456',
        notice: '请输入用户名和密码',
        isError: false
      },
      register: {
        username: '',
        password: '',
        notice: '请记住账户和密码',
        isError: false
      }
    };
  },
  methods: {
    showLogin() {
      this.isShowLogin = true
      this.isShowRegister = false
    },
    showRegister() {
      this.isShowRegister = true
      this.isShowLogin = false
    },
    onRegister() {
      let result1 = this.validUsername(this.register.username)
      if(!result1.isValid) {
        this.register.isError = true
        this.register.notice = result1.notice
        return
      }
      let result2 = this.validPassword(this.register.password)
      if(!result2.isValid) {
        this.register.isError = true
        this.register.notice = result2.notice
        return
      }
      this.register.isError = false
      this.register.notice= '创建成功'
      console.log('开始注册,用户名是:',this.register.username, '密码是：', this.register.password )
      
    },
    onLogin() {
      let result1 = this.validUsername(this.login.username)
      if(!result1.isValid) {
        this.login.isError = true
        this.login.notice = result1.notice
        return
      }
      let result2 = this.validPassword(this.login.password)
      if(!result2.isValid) {
        this.login.isError = true
        this.login.notice = result2.notice
        return
      }
      this.login.isError = false
      this.login.notice= '登录成功'
      console.log('开始登录,用户名是:',this.login.username, '密码是：', this.login.password )
    },
    validUsername(username) {
      return {
        isValid: /^[a-zA-Z_0-9\u4e00-\u9fa5]{3,15}$/.test(username),
        notice: '用户名必须是3~15个字符, 限于字母、数字、下划线'
      }
    },
    validPassword(password) {
      return {
        isValid: /^.{6,16}$/.test(password),
        notice: '密码长度必须是6~16个字符'
      }
    }
    
  }
};
</script>

<style lang="less" scoped>
.fi {
  color: red;
  font-size: 60px;
}
h1 {
  background-color: darkcyan;
}
.modal-mask {
  display: table;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  background-color: #fff;
  width: 800px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0,  0, .33);
  transition: all .3 ease;
  font-family: Arial, Helvetica, sans-serif;
  
  .main {
    flex: 1;
    background: #a3c7af url(~@/assets/re.png) center center no-repeat;
    background-size: contain;  
  }
  .form {
    width: 270px;
    border-left: 1px solid #ccc ;
    overflow: hidden;

    h3 {
      padding: 10px 20px;
      font-size: 16px;
      font-weight: normal;
      border-top: 1px solid #eee;
      cursor: pointer;

      &:nth-of-type(2) {
        border-bottom: 1px solid #eee;
      }
    }
    .button {
      height: 36px;
      line-height: 36px;
      text-align: center;
      color: #fff;
      background-color: #2bb964;
      border-radius: 4px;
      margin-top: 15px;
      cursor: pointer;
    }
    .login,.register {
      padding: 0px 20px;
      border-top: 1px solid #eee;
      height: 0px;
      overflow: hidden;
      transition: height .4s;
      &.show {
        height: 190px;
      }

      input {
        // display: block;
        height: 35px;
        line-height: 35px;
        width: 100%;
        padding: 0 6px;
        border-radius: 4px;
        border: 1px solid #ccc;
        outline: none;
        font-size: 14px;
        margin-top: 10px;
      }
      input:focus {
        border: 3px solid #9dcafa;
      }
      p {
        font-size: 16px;
        margin-top: 10px;
        color: #444;
      }
      .error {
        color: red;
      }
    }
    .login { 
        border-top: 0;
    }
  }
}
</style>
