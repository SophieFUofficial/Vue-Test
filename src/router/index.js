import Vue from 'vue'
import Router from 'vue-router'
import Main from '../modules/main.vue'
import Login from '../modules/login.vue'
import Register from '../modules/register.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'main', component: Main},
    {path:'/main',name:'main',component:Main},
    {path:'/login',name:'login',component:Login},
    {path:'/register',name:'register',component:Register},
  ]
})
