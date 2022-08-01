//引入静态 动态路由数据
import { asyncRoutes, constantRouterMap } from '@/router';
//用于把角色和route.meta.role匹配
function hasPermission(roles, route) {
  if (route.meta & route.meta.roles) {
    return roles.some((role = route.meta.roles.includes(role)));
  } else {
    return true;
  }
}

//这个方法是通过递归来遍历路由，把需要权限的路由给遍历出来
export function filterAsyncRoutes(routes, roles) {
  const res = [];
  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });
  return res;
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes;
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || [];
      } else {
        //核心代码，把路由和获取到的角色（后台获取的）传进去进行匹配
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
      }
      //把匹配完有权限的路由给set到vuex里面
      commit('SET_ROUTES', accessedRoutes);
      //返回添加的动态路由
      resolve(accessedRoutes);
    });
  }
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    //这个地方维护了两个状态一个是addRouters,一个是routes
    state.addRoutes = routes;
    state.routes = constantRouterMap.concat(routes);
    sessionStorage.setItem('newRoutes',JSON.stringify(constantRouterMap.concat(routes)))
  }
};
const state = {
  routes: [],
  addRoutes: []
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,

};
