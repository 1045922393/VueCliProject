<template>
  <div>
    <h1>我是太阳,是来发送数据给月亮</h1>
    <input type="text" v-model="msg" />
    <button @click="sendDataToMoon">点击发送数据至太阳</button>
  </div>
</template>

<script>
import eventBus from "./common";
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    sendDataToMoon() {
      eventBus.$emit("emitSun", this.msg);
    }
  }
};
</script>

<style>
</style>