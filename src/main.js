import Vue from 'vue'
import App from './App.vue'
import animate from "@/styles/Animate.css";
window.console.log(animate)
Vue.config.productionTip = true

//自定义全局组件,到时候 <input type="text" v-autoFocus /> 即可
Vue.directive('autoFocus', {
  inserted(el) {
    el.focus()
  }
})

Vue.directive('fontsize', {
  inserted(el, binding) {
    //window.console.log(el, binding)
    el.style.color = binding.value
  }
})


new Vue({
  render: h => h(App)
}).$mount('#app')