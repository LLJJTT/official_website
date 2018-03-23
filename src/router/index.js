import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homepage'
import AboutUs from '@/components/aboutus'
import ContactUs from '@/components/contactus'
import YingYong from '@/components/yingyong'
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
      path: '/aboutus',//就是加载的路径名字
      name: 'aboutus',//随便起的
      component: AboutUs//跟import名字一样

    },
    {
      path: '/contactus',//就是加载的路径名字
      name: 'contactus',//随便起的
      component: ContactUs//跟import名字一样      
    },
    {
      path: '/yingyong',//就是加载的路径名字
      name: 'yingyong',//随便起的
      component: YingYong//跟import名字一样 
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
