<template>
  <div id="app">
    <p>我是根目录</p>
    <div>
      <router-link to="/index">切换至主页</router-link>
    </div>
    <div>
      <router-link to="/detail/1">切换至详细页1</router-link>
    </div>
    <div>
      <router-link to="/detail/2">切换至详细页2</router-link>
    </div>
    <div>
      <router-link to="/detail/3">切换至详细页3</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
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
