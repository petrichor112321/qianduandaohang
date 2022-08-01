<template>
  <div class="wrapper">
    <form class="form-regist">
      <h2 class="form-signin-heading text-center">注 册</h2>
      <input
        type="text"
        class="form-control"
        name="username"
        placeholder="输入用户名"
        required=""
        v-model="userAccount.username"
      />
      <input
        type="password"
        class="form-control"
        name="password"
        placeholder="密码"
        required=""
        v-model="userAccount.passwd"
      />
      <div v-if="this.$store.state.registlogin.code==200">
        <router-link :to="'/login'">返回登录页</router-link>
      </div>
      <button class="btn btn-lg btn-block" type="button" @click="regist">
        点击注册
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      userAccount: {
        username: '',
        passwd: ''
      }
    }
  },
  methods: {
    async regist() {
        //等到请求完成后执行消息提示
      await this.$store.dispatch('regist', this.userAccount)
      if (this.$store.state.registlogin.code == 200) {
          this.$message.success('注册成功！请返回登录页面进行登录')
      }else{
          this.$message.error('该用户已注册！！！')

      }
    }
  }

}
</script>

<style>
.form-regist {
 width: 370px;
  margin: 0 auto;
  padding: 15px 40px 50px;
  border: 1px solid #e5e5e5;
  border-radius: 15px;
  /*设置上边界和左边界亮纹，使card有一种层次感*/
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);

  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
}
.form-control {
  margin-bottom: 5%;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 20px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.btn {
  margin-top: 10%;
}
.wrapper {
   display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  height: 100vh;
   background: url(../assets/bg.jpeg) no-repeat fixed;
    background-size: cover;
}
</style>