import Vue from "vue"
import VueRouter from "vue-router"
import app from "./App.vue"
import routes from "./routes"
const router = new VueRouter({
  routes: routes
})
Vue.use(VueRouter)
new Vue({
  router: router,
  render: h => h(app)
}).$mount('#app')