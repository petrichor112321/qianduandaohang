import Vue from 'vue';
import App from './App';
//引入bootstrap样式
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//引入antd
import { Button, Layout, Spin, Icon, Menu, List, Comment, Alert, Input, Avatar, Tag, Tooltip, Popover, Breadcrumb,message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
//注册header为全局组件
import Header from './components/header.vue'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button);
//引入路由组件
import router from '@/router'
//引入vuex
import store from './store';
//复制连接插件
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

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
//挂载全局提示 
Vue.prototype.$message = message;

/* eslint-disable no-new */
new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    },
    router,
    store
}).$mount('#app')