import Vue from 'vue';
import App from './App';
//引入bootstrap样式
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//引入antd
import { Button, Layout, Spin, Icon, Menu, List, Comment, Alert, Input, Avatar, Tag, Tooltip, Popover, Breadcrumb, message, Modal, Form, FormModel, Row, Col, DatePicker, Pagination,Dropdown,Carousel,Collapse} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
//注册header为全局组件
import Header from './components/header.vue';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
//引入路由组件
import router from '@/router';
//引入vuex
import store from './store';
//复制连接插件
import VueClipboard from 'vue-clipboard2';

Vue.use(VueClipboard);

Vue.config.productionTip = false;

Vue.use(Layout);
Vue.use(Button);
Vue.use(Spin);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(List);
Vue.use(Comment);
Vue.use(Alert);
Vue.use(Input);
Vue.use(Avatar);
Vue.use(Tag);
Vue.use(Tooltip);
Vue.use(Popover);
Vue.use(Breadcrumb);
Vue.use(message);
Vue.use(Modal);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Row);
Vue.use(Col);
Vue.use(DatePicker);
Vue.use(Pagination);
Vue.use(Dropdown);
Vue.use(Carousel);
Vue.use(Collapse);




//挂载全局提示
Vue.prototype.$message = message;
let hasAdd = false;

router.beforeEach((to, from, next) => {
  const tokenStr = sessionStorage.getItem('TOKEN');
  const roles = sessionStorage.getItem('ROLES');
  // console.log(roles,tokenStr,newRoutes);
  //管理用用户则动态添加专属页面
  // console.log(from.path, to.path);
  //管理员登入动态添加路由
  if (tokenStr && roles == 'admin' && to.path === '/home/admin' && !hasAdd) {
    // console.log(roles);
    //路由规则中有namespace的路径需为 文件名+文件
    store.dispatch('permission/generateRoutes', roles).then(accessRoutes => {
      //！！！！（版本移除addroutes方法）该方法接受一个对象为参数 添加到路由仓库中
      for (let i = 0, length = accessRoutes.length; i < length; i += 1) {
        const element = accessRoutes[i];
        //向已有静态路由下添加动态子路由
        router.addRoute('home',element);
        // console.log(router.getRoutes());
      }
      hasAdd = true;
      // router.options.routes=newRoutes
      // router.options.isAddAsyncMenuData = true;
      next('/home/admin');
    });
  } else {
    next();
    //  // 未登录时，whiteList是我设置的免登录白名单就是不登录没有token也能进入
    //  if (whiteList.indexOf(to.path) !== -1) {
    //    // 在免登录白名单中，直接进入
    //    next()
    //  } else {
    //    // 其他没有访问权限的页面将重定向到登录页面
    //    next(`/login?redirect=${to.path}`)
    //  }
  }
});

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
  router,
  store
}).$mount('#app');
