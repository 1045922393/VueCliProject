<template>
  <div>
    <h2>我是嵌套在detail的第二个子组件</h2>
  </div>
</template>

<script>
export default {
  watch: {
    //监听的是route
    $route() {
      window.console.log(this.$router);
      window.console.log(this.$route);
    }
  },
  mounted() {
    window.console.log(this.$route);
    window.console.log(this.$router);
  }
};
</script>

<style>
</style>