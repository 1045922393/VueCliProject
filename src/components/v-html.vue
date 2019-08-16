<template>
  <div class="father">
    <div v-html="html"></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      html: "<h1>我是被引进去的标题1</h1>"
    };
  }
};
</script>

<style>
</style>