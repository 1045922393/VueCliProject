//引入Vue模块
import Vue from 'vue'
//引入Vue根页面
import App from './App.vue'
//引入Vue路由模块
import VueRouter from 'vue-router'
//引入路由规则数组
import routes from './routes.js'
Vue.config.productionTip = true
//使用路由中间件
Vue.use(VueRouter)
//创建路由对象
const router = new VueRouter({
  routes
})
//创建Vue实例对象,渲染到页面
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')