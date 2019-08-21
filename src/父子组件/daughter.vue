<template>
  <div>
    <h1>我是女儿</h1>
    <button @click="send">发送数据至son组件</button>
  </div>
</template>

<script>
import eventBus from "./common";
export default {
  data() {
    return {
      msg: "这是需要发送给son组件的数据"
    };
  },
  methods: {
    send() {
      eventBus.$emit("sendData", this.msg);
    }
  }
};
</script>

<style>
</style>