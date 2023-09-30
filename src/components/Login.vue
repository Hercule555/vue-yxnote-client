<template>
  <div id="login">
    <h1>{{ msg }}</h1>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="main"></div>
          <div class="form">
            <h3>创建账户</h3>
            <div v-show="false" class="register">
              <input type="text" placeholder="用户名" />
              <input type="password" placeholder="密码" />
            </div>
            <h3>登录</h3>
            <div v-show="true" class="login">
              <input type="text" placeholder="输入用户名" />
              <input type="text" placeholder="输入密码" />
              <div class="button">登录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "this is login page",
    };
  },
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
    }
    .login,.register {
      padding: 10px 20px;
      border-top: 1px solid #eee;

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
