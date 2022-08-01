import { reqregist,reqlogin } from "@/api"
import Vue from "vue";
const actions={
    async regist({commit},userAccount){
        let result=await reqregist(userAccount)
        if (result.code==200) {
            console.log(result);
       commit('CODE',result.code)
        }else{
            commit('CODE',result.code)
        }
    },
    async login({commit},userInfo){
        let result= await reqlogin(userInfo)
        console.log(result);
        if(result.code==200){
            commit('CODE',result.code)
            sessionStorage.setItem('TOKEN',result.token)
            sessionStorage.setItem('ID',result.ID)
            sessionStorage.setItem('ROLES',result.role)
            commit('TOKEN',result.token)
        }else{
            commit('CODE',result.code)
        }
    }
   
}
const mutations={
    CODE(state,code){
        state.code=code
    },
    TOKEN(state,token){
        state.token=token
    },


}
const state={
    code:'',
    token:'',
   
}
const getters={
 
}

export default{
    actions,
    mutations,
    state,
    getters
}