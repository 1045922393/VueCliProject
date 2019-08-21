<template>
  <div>
    <h1>我是子</h1>
    <p>显示从父获得的数据---{{giveSon}}</p>
    <p>显示{{msg}}</p>
    <input type="text" v-model="dataFromSon" @change="sendData" />
    <button @click="sendData">发送子数据至父组件</button>
  </div>
</template>

<script>
import eventBug from "./common";
export default {
  methods: {
    sendData() {
      this.$emit("sondata", this.dataFromSon); //发送数据
    }
  },
  props: ["giveSon"],
  data() {
    return {
      msg: "",
      dataFromSon: ""
    };
  },
  mounted() {
    eventBug.$on("sendData", obj => {
      window.console.log(obj);
      this.msg = obj;
    });
  }
};
</script>

<style>
</style>