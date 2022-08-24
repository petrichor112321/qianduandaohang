<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",

  methods: {
    // 1321321
    //通知气泡
    // openNotification() {
    //   this.$notification.open({
    //     message: 'hey，欢迎回来~',
    //     description:
    //       '欢迎回到我的网站，祝你能够找到自己想要的学习资源',
    //     icon: <a-icon type="smile" style="color: #108ee9" />,
    //   });
    // }
  },
};
</script>
<style>
#app {
  height: 100vh;
}
</style>
