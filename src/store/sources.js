import { reqgetToolsDetail, reqgetComponentGallery, reqgetViewDesign, reqChangeLiked, reqbrowsed, reqartbrowsed, reqadditem, reqremitem } from '@/api/index';
const actions = {
  //获取浏览量数据
  async getbrowsed({ commit }) {
    let result = await reqbrowsed();

    if (result.code == 200) {
      //等于200请求成功 返回请求到的数据 提交给mutations
      commit('GETBROWSED', result.browsed);
    }
  },
  async getartbrowsed({ commit }) {
    let result = await reqartbrowsed();
    if (result.code == 200) {
      //等于200请求成功 返回请求到的数据 提交给mutations
      commit('GETARTBROWSED', result.artbrowsed);
    }
  },
  //获取 工具 数据
  async getToolsDetail({ commit }) {
    let result = await reqgetToolsDetail();
    // console.log(result);
    if (result.code == 200) {
      //等于200请求成功 返回请求到的数据 提交给mutations
      commit('GETSOURCEURL', result.data);
    }
  },
  //获取 组件库 数据 并覆盖页面遍历的数据
  async getComponentGallery({ commit }) {
    let result = await reqgetComponentGallery();
    // console.log(result);
    if (result) {
      //提交给mutations
      commit('GETCOMPONENTGALLERY', result.data);
    }
  },
  //获取 界面设计 数据 并覆盖页面遍历的数据
  async getViewDesign({ commit }) {
    let result = await reqgetViewDesign();
    if (result) {
      //提交给mutations
      commit('GETVIEWDESIGN', result.data);
    }
  },
  async ChangeLiked({ commit }, { _id, id }) {
    let result = await reqChangeLiked(_id, id);
    if (result.code == 200) {
      //提交给mutations
      console.log('点赞接口成功');
    }
  },
  async additem({ commit }, newitem) {
    let result = await reqadditem(newitem);
    console.log(result);
  },
  async removeitem({ commit }, { delid, id }) {
    let result = await reqremitem(delid, id);
    if(result.code==200){
        return 'ok'
    }
  }
};
const mutations = {
  GETBROWSED(state, browsed) {
    state.browsed = browsed;
  },
  GETSOURCEURL(state, ToolsDetail) {
    state.ToolsDetail = ToolsDetail;
  },
  GETTOTAL(state, total) {
    state.total = total;
  },
  //点击组件库标签时 覆盖 实用工具数据(关键)
  GETCOMPONENTGALLERY(state, ComponentGallery) {
    state.ToolsDetail = ComponentGallery;
  },
  GETVIEWDESIGN(state, ViewDesign) {
    state.ToolsDetail = ViewDesign;
  },
  GETARTBROWSED(state, artbrowsed) {
    state.artbrowsed = artbrowsed;
  }
};
const state = {
  ToolsDetail: [],
  browsed: 0,
  artbrowsed: 0
};
const getters = {
  ToolsDetail(state) {
    return state.ToolsDetail;
  }
};

export default {
  actions,
  mutations,
  state,
  getters
};
