import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './movie'
import CinemaRouter from './cinema'
import MineRouter from './mine'

Vue.use(VueRouter)



export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    //一级路由
    MovieRouter,
    CinemaRouter,
    MineRouter,
    //重定向
    {
      path:"/",
      redirect:"/movie"
    }
  ]
})