<template>
  <div>
    <h1>我是子组件</h1>
    <p>{{myname}}</p>
    <button v-on:click="sendData">按钮</button>
  </div>
</template>

<script>
export default {
  props: ["myname"],
  data: function() {
    return {
      msg: "我被修改了"
    };
  },
  methods: {
    sendData() {
      this.$emit("getdata", { a: this.msg });
    }
  }
};
</script>

<style>
</style>