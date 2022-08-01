import VueRouter from 'vue-router';
import Vue from 'vue';
//引入路由组件

Vue.use(VueRouter);

//不要权限的公共路由
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('@/pages/login.vue')
  },
  {
    path: '/register',
    component: () => import('@/pages/register.vue')
  },
  {
    path: '/home',
    component: () => import('@/pages/home.vue'),
    name: 'home',
    children: [
      {
        path: 'content',
        component: () => import('@/pages/content.vue')
      },
      {
        path: 'questions',
        component: () => import('@/pages/questions.vue')
      },
      {
        path: 'techarticle',
        component: () => import('@/pages/techarticle.vue')
      },
      {
        path: 'comadmin',
        component: () => import('@/pages/comadmin.vue')
      },
      {
        path: 'project',
        component: () => import('@/pages/project.vue')
      },
      {
        path: '/',
        redirect: 'content'
      }
    ]
  },
  //introduce页面路由
  {
    path: '/introduce',
    component: () => import('@/pages/introduce.vue'),
    name: 'introduce'
  },
  //source页面路由
  {
    path: '/sources',
    component: () => import('@/pages/sources.vue')
  }
];
//管理员路由
export const asyncRoutes = [
  {
    path: '/home/admin',
    component: () => import('@/pages/admin.vue'),
    alwaysShow: true,
    meta: {
      title: 'admin',
      icon: 'lock',
      roles: ['admin', 'editor']
    }
  }
];

const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch(err => err);
};
//实例化vue时只挂载无权限菜单
export default new VueRouter({
  mode: 'history',
  routes: constantRouterMap
});
