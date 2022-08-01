<template>
  <div
    :style="{
      padding: '24px',
      background: '#fff',
      minHeight: '360px',
      height: '70%',
    }"
  >
    <div class="headLayout">
      <strong style="font-size: 22px">首先为大家推荐我自己的学习路线：</strong>
      <a-tag color="#f50" style="height: 25px">
        <a-icon type="eye" theme="filled" /> 浏览量{{ artbrowsed }}
      </a-tag>
    </div>
    <br /><br />
    <p style="font-size: 17px">
      <strong style="font-size: 23px">1.HTML CSS:</strong
      ><a
        href="https://www.bilibili.com/video/BV14J4114768?share_source=copy_web"
        target="blank"
        >黑马程序员pink老师前端入门教程，零基础必看的h5(html5)+css3+移动端前端视频教程</a
      ><br />
      pink老师的这套课程非常适合零基础的同学，或许有同学一打开视频被540集给劝退了，但其实每节课都只有5-7分钟，讲解很详细，课堂气氛也很活跃。这部分学习主要是<strong>熟练掌握标签的用法，HTML5，CSS3新特性，以及CSS的布局方式，定位，浮动，弹性布局</strong>等内容。其中移动端部分如果自己时间比较紧张的话可以先跳过，当你掌握PC端的知识后再去学习移动端就相当轻松了。<br />
      <strong style="font-size: 22px">2.JS:</strong
      ><a
        href="https://www.bilibili.com/video/BV1Sy4y1C7ha?share_source=copy_web"
        >JavaScript基础语法-dom-bom-js-es6新语法-jQuery-数据可视化echarts黑马pink老师前端入门基础视频教程(500多集)持续更新</a
      ><br />
      学习完HTML+CSS之后，我在pink老师和<a
        href="https://www.bilibili.com/video/BV1YW411T7GX?share_source=copy_web"
        target="blank"
        >超哥</a
      >之间还是选择了前者。主要是因为习惯了pink老师的讲课方式。大家可以在俩者之间比较一下，适合自己的才是最好的。这部分的学习主要是：<br />（1）熟练掌握<strong
        >JS的基本语法，数据类型（重点：对数组，对象的操作），运算符，流程控制，函数，预解析等；</strong
      ><br />（2）<strong>Dom(文档对象模型)部分：</strong>掌握<strong>事件基础，排他算法（应用：Tab栏切换）</strong>等内容,并多做一些小案例巩固自己的掌握程度，例如留言板案例，动态创建表格，验证码，拖动模态框，轮播图，倒计时，筋斗云等；<br />
      （3）<strong>BOM(浏览器对象模型):</strong>掌握计时器，JS执行机制，元素偏移量，动画函数，及this指向问题;<br /><br />

      这部分内容学习完之后，建议大家能用<strong>原生JS</strong>写一个轮播图，使用swiper确实很方便，但必须要清楚它的实现原理。<br />
      <strong style="font-size: 22px">3.框架学习:</strong
      >我选择的是vue，所以就给大家推荐vue的学习视频吧：<br />

      <a
        href="https://www.bilibili.com/video/BV1Zy4y1K7SH?share_source=copy_web"
        >尚硅谷Vue2.0+Vue3.0全套教程丨vuejs从入门到精通</a
      ><br />
      宝藏老师<strong>张天禹</strong>，知识体系非常全面，对于重要内容的讲解从源码出发，这样使得同学们能够更深入的理解原理。以我自己的理解来看，到目前为止，我认为这部分最重要的是要形成一种<strong>模块化的开发思维</strong>，要理解什么是<strong>代码复用</strong>，框架到底比原生好在哪里,最最重要的是要形成<strong>以组件来构建页面</strong>的思维方式，等到实际开发时，你就会理解框架存在的意义<strong>不只是提升开发效率</strong>那么片面，而是一种模块化的思维方式。<br /><br />

      好了，这就是到目前为止我自己的学习路线，接下来要学习的东西还有很多：<strong>node.js,webpack,ajax</strong>等等，由于我还没有学习完，所以我会在我学习完之后再给大家推荐学习路线。到目前为止对前端的学习我最大的感悟是前后端分离是一种很棒的开发方式，但作为前端开发人员，我们不可能完完全全不去接触后台的技术，就比如我目前网站的资源页面就需要自己在后台写数据，再通过ajax请求返回数据，而不是把数据写死，那样的页面和静态页面也没什么区别。所以说，大家不要抱着一种我就是前端，我一点后端也不接触，后端浪费时间的想法，也不要跳着学习，脚踏实地把基础打好，再去学别的技术就会很快很快。<br />
      <strong
        >这是我第一次写技术博客，欢迎大家批评指正，如果你看到我的网站也想分享自己的学习经验的话，可以在右边的<a
          href="#author"
          >关于作者</a
        >添加我的联系方式，我们一起交流，共同进步。</strong
      >
    </p>
    <br /><br />

    <p style="font-size: 17px">
      &nbsp; &nbsp;
      &nbsp;<strong>另外</strong>，这里给大家隆重的推荐我的前端启蒙老师：<strong>鱼皮大大</strong>！他的路线对我来说最大的意义就是让我少走了很多弯路，因为看他的视频我才认识了pink老师，尚硅谷的张天禹老师等等。其次，鱼皮大大做的<a
        href="https://www.code-nav.cn/"
        target="blank"
        >编程导航网站</a
      >给了我搭建这个网站的灵感，再加上自学途中遇到了很多大大小小的困难，而技术博客上太专业的术语不但晦涩难懂，对我这种小白来说也非常不友好，所以我希望在鱼皮的基础上自己搭建一个专门服务于前端学习的网站，在这个网站我会把自己遇到的一些问题用更便于理解的形式上传，也会分享一些自己感觉很不错的前端编程资源，后续也会开发评论和上传资源的功能，希望在这里你可以找到自己想要的资源。（鱼皮大大如果能看到我的网站请踢我一脚【手动狗头】）<br />
      <br /><br />

      我个人认为鱼皮大大整理的学习路线比较全面，不论你是小白还是想要进一步提升自己的同学，都可以找到一条属于你自己的学习路线。<br />
      <br />
    </p>
    <strong style="font-size: 18px">附鱼皮b站路线讲解视频：</strong><br />
    <br />
    <iframe
      src="//player.bilibili.com/player.html?aid=205979521&bvid=BV1nh411e7oG&cid=349848369&page=1"
      scrolling="no"
      border="1"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true"
      style="width: 100%; height: 30%"
    >
    </iframe
    ><br /><br /><br />
  </div>
</template>

<script>
export default {
  name: 'Content',
  mounted() {
    this.getartbrowsed()
  },
  computed: {
    artbrowsed() {
      return this.$store.state.sources.artbrowsed
    }
  },
  methods:{
       getartbrowsed(){
      this.$store.dispatch('getartbrowsed')
    }
  }
}
</script>

<style>
.headLayout {
  display: flex;
  justify-content: space-between;
}
</style>