import Vue from 'vue'
import father from './父子组件/sunseries.vue'
new Vue({
  render: h => h(father)
}).$mount("#app")