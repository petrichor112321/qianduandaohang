import Vuex from 'vuex'
import Vue from 'vue'
//引入资源模块仓库
import sources from './sources'
import registlogin from './registlogin'
import permission from "./permission";

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        sources,
        registlogin,
        permission
    },
})
