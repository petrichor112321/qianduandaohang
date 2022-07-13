import VueRouter from "vue-router";
import Vue from "vue";
//引入路由组件
import Home from '../pages/home.vue'
import Content from '../pages/content.vue'
import Introduce from '../pages/introduce.vue'
import Sources from '../pages/sources.vue'
import Question from '../pages/questions.vue'
import Article from '../pages/techarticle.vue'



Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:'*',
            redirect:'/home',
        },
        //home页面路由
        {
            path:'/home',
          component:Home,
          name:"home",
          children:[
              {
                  path:'content',
                  component:Content
              },
              {
                path:'questions',
                component:Question
            },
            {
                path:'techarticle',
                component:Article
            },
              {
                  path:'/',
                  redirect:'content'
              }
              
          ]
        },
        //introduce页面路由
        {
            path:'/introduce',
            component:Introduce,
            name:"introduce"
        },
        //source页面路由
        {
            path:"/sources",
            component:Sources
        },    
    ]
})
