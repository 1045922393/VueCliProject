import Vue from 'vue'
// import App from './App.vue'
// import vueFirst from './components/first.vue'
// import vtext from './components/v_text.vue'
// import vhtml from './components/v-html.vue'
// import vbind from './components/v_bind.vue'
// import vfor from './components/v-for.vue'
import vmodel from './components/vmodel.vue'

Vue.config.productionTip = true

new Vue({
  render: h => h(vmodel)
}).$mount('#app')

// new Vue({
//   render: h => h(vfor)
// }).$mount("#app")

// new Vue({

//   render: h => h(App)

// }).$mount("#app")

// new Vue({

//   render: h => h(vbind)

// }).$mount("#app")

// // new Vue({
//   render: h => h(vhtml)
// }).$mount("#app")

// new Vue({
//   render: h => h(vueFirst),
// }).$mount('#app')
// new Vue({
//   render: h => h(vtext)
// }).$mount('#app')

// new Vue({
//   render: h => h(vueFirst),
// }).$mount('#second')
