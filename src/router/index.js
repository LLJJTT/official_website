import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homepage'
import Snack from '@/components/snack'
import Numbergame from '@/components/numbergame'
import Stickblock from '@/components/stickblock'
// @相当于项目的根路径
Vue.use(Router)

export default new Router({
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
      path:'/stickblock',
      name:'stickblock',
      component:Stickblock
    }

  ]
})
