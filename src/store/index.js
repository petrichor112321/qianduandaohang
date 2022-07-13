import Vuex from 'vuex'
import Vue from 'vue'
//引入资源模块仓库
import sources from './sources'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        sources
    },
})
