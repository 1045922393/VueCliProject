<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <brandshow></brandshow>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import brandShow from "./components/品牌案例.vue";
// import brandShow from "./components/品牌案例侦听器";
// import brandShow from "./components/过渡效果";
// import brandShow from "./components/样式库的使用.vue";
import brandShow from "./components/钩子函数控制动画";

export default {
  name: "app",
  components: {
    // HelloWorld
    brandshow: brandShow
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
