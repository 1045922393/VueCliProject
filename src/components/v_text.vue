<template>
  <!-- <h1>{{msg}}</h1> -->
  <h1 v-text="msg">啊士大夫士大夫</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是text"
    };
  }
};
</script>

<style>
h1 {
  background-color: purple;
}
</style>