<template>
  <div class="bodybox">
    <img src="../images/bgc.jpg" id="bgc" />
    <!-- 内容部分 -->
    <div id="introduce">
      <div class="intro">
        <h3>写在前面</h3>
        <p>
          hi~欢迎你来到我的网站，我是一名在校大三学生。自学需要兴趣，更需要毅力。
          为了让你找到更优质的学习资源，我萌生了搭建这样一个分享前端资源网站的想法，希望
          这个网站可以帮到你。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Introduce',
}
</script>
<style scoped>
#bodybox {
  width: 100%;
  height: 100%;
}
#bgc {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
  left: 0;
  top: 0;
  background-size: cover;
  background-repeat: no-repeat;
}
#introduce {
  display: flex;
  justify-content: center;
  margin-bottom: 40%;
}
.intro {
  margin-top: 10%;
  padding: 24px;
  width: 40%;
  background: transparent;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: all 0.5s;
}
.intro:hover {
  transform: scale(1.1);
}
</style>


