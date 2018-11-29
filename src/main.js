// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 加载axios = ajax 模块

// Vue.prototype.$http = axios

// 加载element_ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入 ant-design-vue
import { BackTop,Collapse,List,Avatar } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(BackTop)
Vue.use(Collapse)
Vue.use(List)
Vue.use(Avatar)



// 加载jquery
import $ from 'jquery'
window.$ = $;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

