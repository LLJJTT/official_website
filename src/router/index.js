import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homepage'
import Snack from '@/components/snack'
import Numbergame from '@/components/numbergame'
import Seven from '@/components/seven'
import Stickblock from '@/components/stickblock'
import Shortest from '@/components/shortest'
import Cube from '@/components/cube'
import Login from '@/components/login'
import LeaveInfo from '@/components/leave_info'

// @相当于项目的根路径
Vue.use(Router)
const r = new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage',
      component: HomePage

    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    {
      path:'/snack',
      name:'snack',
      component:Snack
    },
    {
      path:'/numbergame',
      name:'numbergame',
      component:Numbergame
    },
    {
      path:'/seven',
      name:'seven',
      component:Seven
    },
    {
      path:'/stickblock',
      name:'stickblock',
      component:Stickblock
    },
    {
      path:'/shortest',
      name:'shortest',
      component:Shortest
    },
    {
      path:'/cube',
      name:'cube',
      component:Cube
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/leave_info',
      name:'leave_info',
      component:LeaveInfo,
      meta:{
        requiresAuth:true
      }
    }

  ]
})

export default r;
r.beforeEach((to,from,next) =>{
  if (to.path === '/homepage') {
    next()
  }
  else{
    if(to.meta.requiresAuth && !sessionStorage.getItem('login')) {
      next({ path: '/homepage' })
    } 
    else { 
      next() 
    }
  } 
})
