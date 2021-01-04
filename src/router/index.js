import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/movies/Films'
import NowPlaying from '@/views/movies/NowPlaying'
import ComingSoon from '@/views/movies/ComingSoon'
import Detail from '@/views/movies/Detail'
import Cinemas from '@/views/cinemas/Index'
import Center from '@/views/center/Me'
import NotFound from '@/views/not-found/404'
Vue.use(VueRouter)

const routes = [

    {
      path:"/",
      redirect:"/films/nowPlaying"
    },
     {
       path:"/films",
       component:Films,
       children:[
         {path:"nowPlaying",component:NowPlaying},
         {path:"comingSoon",component:ComingSoon}
       ]
     },
     {
       path:"/film/:id",
       component:Detail
     },
     {
       path:"/cinemas",
       component:Cinemas
     },
     {
       path:"/center",
       component:Center
     },{
       path:"*",
       component:NotFound
     }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
