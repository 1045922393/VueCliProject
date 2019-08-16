<template id="createTemplate">
  <p>
    <strong>我是加粗</strong>
    <i>我是斜体</i>
    <b>我是第一个模块{{ msgg }}</b>
    <createTagOne></createTagOne>
    <a>sdafsadfdsaf</a>
  </p>
</template>

<script>
export default {
  name: "firstTemplate",
  template: "#createTemplate",
  data() {
    return {
      msg: "我是一条message",
      name: "我是一个名字"
    };
  },
  components: {
    createTagOne: {
      template: "#createTemplate",
      data: function() {
        return {
          dataMsg: "fsdaf"
        };
      }
    }
  }
};
</script>

<style>
p {
  background-color: red;
}
strong {
  color: blue;
}
i {
  margin: 200px;
}
b {
  line-height: 62px;
  border: 1px red solid;
}
</style>