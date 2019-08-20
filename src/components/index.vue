<template>
  <div>
    <h1>我是主页</h1>
    <button @click="showComponents">点击显示主页子组件</button>
    <p>
      <router-view></router-view>
    </p>
  </div>
</template>

<script>
export default {
  //这是主页模板
  methods: {
    showComponents: function() {
      this.$router.push({ name: "indexFirst" });
    }
  }
};
</script>

<style>
</style>