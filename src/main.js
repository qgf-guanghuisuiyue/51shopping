import Vue from 'vue'
import App from './App.vue'
import './assets/css/top.scss'
import './assets/css/nav.scss'
import './assets/css/common.scss'

//路由安装
import VueRoute from 'vue-router'
Vue.use(VueRoute)
//引入路由模块，创建路由实例
import routes from './route.config'
const router=new VueRoute(routes)

new Vue({
  el: '#app',
  render: h => h(App),
    router
})
