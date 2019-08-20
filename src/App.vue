<template>
  <div id="app">
    <h1>我是根目录</h1>
    <!-- 路由导航 -->
    <pre>
    <router-link to="/index">turn to index</router-link>
    </pre>
    <pre>
    <router-link to="/detail">turn to detail</router-link>
    <ul>
      <li>
        <router-link to="/detail/1">turn to detail of computer</router-link>
      </li>
      <li>
        <router-link to="/detail/2">turn to detail of car</router-link>
      </li>
      <li>
        <router-link to="/detail/3">turn to detail of phone</router-link>
      </li>
    </ul>
    </pre>
    <pre>
    <router-link to="/all">turn to all</router-link>
    </pre>
    <pre>
    <router-link to="/paying">turn to paying</router-link>
    </pre>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  //通过路由来确定需要渲染的组件
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
