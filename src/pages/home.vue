<template>
  <div>
   <a-layout id="components-layout-demo-side" style="min-height: 100vh" >
      <!-- 侧边栏  移动端：断点+可折叠属性-->
      <a-layout-sider v-model="collapsed" collapsible theme="light" breakpoint="sm" >
        <a-menu theme="light" :default-selected-keys="['1']" mode="inline"  @click="golane" >
          <a-menu-item key="1" ref="val" @click="$router.push('/home/content')">
            <a-icon type="edit" />
            <span>学习路线</span>
          </a-menu-item>
          <a-menu-item key="2"  @click="$router.push('/home/techarticle')">
            <a-icon type="desktop" />
            <span>常见问题</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" /><span>我的收藏</span></span>
            <a-menu-item key="3">开发中...</a-menu-item>
        
          </a-sub-menu>
         
          <a-menu-item key="9" @click="$router.push('/home/questions')">
            <a-icon type="file" />
            <span>问题交流</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <!-- 主体内容部分 -->
      <a-layout>
        <div class="content">
          <a-layout-content style="margin: 0 16px; zindex: 1; height: 190%">
            <!-- 面包屑 -->
         <div class="bread">
              <a-breadcrumb style="margin: 16px 0">
              <a-breadcrumb-item style="font-weight:500">{{currentPlate}}</a-breadcrumb-item>
            </a-breadcrumb>
         </div>
            <!-- 侧边栏文章显示区 -->
            <transition name="fade" appear>
            <router-view ></router-view>
            </transition>
          </a-layout-content>
     
        </div>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      collapsed: false,
      //当前版块
      currentPlate:"学习路线",
      flag:false
    };
  },
  methods:{
    //跳转学习路线并携带当前点击的value 实现方式：事件委派+event获取当前点击元素
    golane(event){ 
      let plate=event.domEvent.target.outerText
       this.currentPlate=plate
       console.log(event.domEvent.target.outerText);
    },
 
  }

}
</script>

<style>
.author {
  position: absolute;
  top: 117px;
  right: 5%;
  font-size: 18px;
}
.bread{
  display: flex;
  justify-content: space-between;
  width: 75%;
  align-items: center;
}
.avtar{
  margin-top: 10px;
  width: 64px;
  height: 64px;
  }
  .avtar img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  /* 路由动画过渡部分 */
  .fade-enter-active{
   transition:all 0.5s;
  }
   .fade-enter{
            /*设置透明度为0*/
            opacity: 0;
            visibility: hidden;
            transform: translateX(-20px);
        }
        .fade-enter-to{
          visibility: visible;
            opacity: 1;
            transform: translateX(0px);
        }

</style>