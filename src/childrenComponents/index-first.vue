<template>
  <div>
    <h2>我是嵌套在index的第一个子组件</h2>
    <soncom v-bind:myname="sugar" v-on:getdata="done">
      <!-- 此标签里面挂载着getdata的动作事件 -->
    </soncom>
    <input type="text" v-model="getFromSon" />
  </div>
</template>

<script>
import soncom from "./sonComponent";
export default {
  components: {
    soncom
  },
  data() {
    return {
      sugar: "给子组件赋名",
      getFromSon: ""
    };
  },
  methods: {
    done(obj) {
      window.console.log(obj);
      this.getFromSon = obj.a;
    }
  }
};
</script>

<style>
</style>