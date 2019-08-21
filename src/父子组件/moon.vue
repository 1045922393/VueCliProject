<template>
  <div>
    <h1>我是月亮,是来接收太阳的数据的</h1>
    <p>我收到的数据为{{msg}}</p>
  </div>
</template>

<script>
//引入公共实例
import eventBus from "./common";
export default {
  //用钩子函数来监听
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    eventBus.$on("emitSun", data => {
      window.console.log(data);
      this.msg = data;
    });
  }
};
</script>

<style>
</style>