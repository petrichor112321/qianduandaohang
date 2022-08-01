<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- 移动端相关 -->
      <div class="navbar-header container-fluid">
        <button
          type="button"
          class="navbar-toggle"
          ref="change"
          data-toggle="collapse"
          data-target="#nav-collapse"
        >
          <span class="sr-only">切换导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span class="hidden-md hidden-lg hidden-sm logo">FrontNav</span>
      </div>
      <!-- //要折叠的内容 bootstrap网格布局系统-->
      <div class="collapse navbar-collapse row" id="nav-collapse">
        <!-- logo部分 -->
        <div class="logo hidden-xs col-md-3">
          <img
            src="../assets/favicon.png"
            style="vertical-align: middle; margin-right: 3px"
          />
          Frontnav
        </div>
        <!-- tabs部分 -->
        <div class="co-md-3">
          <ul
            class="nav navbar-nav"
            @click="changeState"
            v-if="
              this.$route.path != '/login' && this.$route.path != '/register'
            "
          >
            <!-- tabs -->
            <li>
              <router-link to="/introduce" class="tabs">
                <a-icon type="solution" />
                简介
              </router-link>
            </li>
            <li>
              <router-link to="/home" class="tabs">
                <a-icon type="home" />
                主页
              </router-link>
            </li>
            <li>
              <router-link to="/sources" class="tabs">
                <a-icon type="read" />
                资源
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 头像部分 -->
        <div
          class="
            avatarbox
            hidden-md hidden-xs hidden-sm
            col-md-2 col-md-offset-5
          "
   
        >
          <div>
            去
            <router-link to="/login">登录 |</router-link>
            <router-link to="/register">注册</router-link>
          </div>
          <div class="avatar">
            <a-dropdown placement="bottomCenter">
              <a-avatar size="large" icon="reddit" />

              <a-menu slot="overlay">
                <a-menu-item>
                  <a @click="logout">退出登录</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    changeState() {
      // 实现点击链接后自动折叠
      $('#nav-collapse').collapse('hide');
    },
    logout() {
      const tokenStr = sessionStorage.getItem('TOKEN');
      if (tokenStr) {
        sessionStorage.clear();
        this.$router.push('/login');
        this.$message.info('您已退出登录！');
      } else {
        this.$message.info('未登录，请登录！');
        this.$router.push('/login');
      }
    }
  }
};
</script>
<style scoped>
.logo {
  font-size: 20px;
  font-weight: 600;
  color: #2c3038;
}
.logo img {
  height: 100%;
}
.navbar,
.navbar-default {
  margin-bottom: 3px;
  line-height: 64px;
}
.navbar-header {
  line-height: 50px;
}
.tabs {
  list-style: none;
  padding: 0 12px;
  font-size: 16px;
  line-height: 64px;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #1c1d1d;
}
a:hover {
  color: rgb(14, 108, 202);
}
.router-link-active {
  border-bottom: 2px solid #729999;
}
.avatarbox {
  display: flex;
  align-items: center;
}

.avatar {
  margin-left: 20px;
}
</style>
