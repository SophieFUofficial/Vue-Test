import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '../modules/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'main', component: Main},
    {path:'/main',name:'main',component:Main},
  ]
})
