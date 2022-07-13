<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <footer>
      <div id="footerBox">©2022<a title="站长晚风">&amp;晚风</a><span> 丨 </span>
      <span><a
          href="https://beian.miit.gov.cn"
          title="工业和信息化部域名信息备案管理系统"
          target="_blank"
          >晋ICP备2022004095号</a
        >丨 </span>
        <span><a title="关于「前端导航」">关于</a>丨 </span>
    </div>
    <div id="browsed"><a-icon type="eye" theme="filled" />本站累计浏览量：{{browsed}} </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted() {
    this.getBrowsed()
  },
  computed:{
    browsed(){
      return this.$store.state.sources.browsed
    }
   
  },
  methods: {
    //通知气泡
    // openNotification() {
    //   this.$notification.open({
    //     message: 'hey，欢迎回来~',
    //     description:
    //       '欢迎回到我的网站，祝你能够找到自己想要的学习资源',
    //     icon: <a-icon type="smile" style="color: #108ee9" />,
    //   });

    // }
    getBrowsed(){
      this.$store.dispatch('getbrowsed')
    }
  }
}
</script>
<style>
footer{
  z-index: 1;
}
#footerBox{
  display: flex;
  justify-content: center;
}
#browsed{
  display: flex;
  justify-content: center;
  align-items: center;
}
#footerBox a {
  color: #606672;
}
#footerBox a:hover {
  color: #0099ff;
}
</style>
