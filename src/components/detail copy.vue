<template>
  <div>
    <h1>我是详细页</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: ""
    };
  },
  watch: {
    $route: function(to) {
      if (to.params.id === "1") {
        this.msg = "这是华为详细页";
      } else if (to.params.id === "2") {
        this.msg = "这是vivo详细页";
      } else {
        this.msg = "这是小米详细页";
      }
    }
  },
  mounted() {
    if (this.$route.params.id === "1") {
      this.msg = "这是华为详细页";
    } else if (this.$route.params.id === "2") {
      this.msg = "这是vivo详细页";
    } else {
      this.msg = "这是小米详细页";
    }
  }
};
</script>
<style>
</style>