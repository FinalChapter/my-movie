import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/views/not-found/404'
import Films from './routes/film'
import Cinemas from './routes/cinema'
import Center  from "./routes/center"
Vue.use(VueRouter)

const routes = [
    {
      path:"/",
      redirect:"/films/nowPlaying"
    },
     ...Films,
     Cinemas,
     Center,
    {
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
