<template>
  <div id="app">
    <p>我是一个根目录</p>
    <router-link to="/index">主页</router-link>
    <br />
    <router-link to="/detail">详细页</router-link>
    <br />
    <router-link to="/detail/1">详细页1</router-link>
    <br />
    <router-link to="/detail/2">详细页2</router-link>
    <br />
    <router-link to="/detail/3">详细页3</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
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
