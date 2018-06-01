import Vue from 'vue'
import Router from 'vue-router'
import Main from '../modules/user/main.vue'
import Login from '../modules/user/login.vue'
import Register from '../modules/user/register.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'main', component: Main},
    {path:'/main',name:'main',component:Main},
    {path:'/login',name:'login',component:Login},
    {path:'/register',name:'register',component:Register},
  ]
})
