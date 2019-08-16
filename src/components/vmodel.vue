<template>
  <div>
    <form action>
      <span>姓名:</span>
      <input type="text" v-model="login.name" />
      <span>密码:</span>
      <input type="text" v-model="login.psw" />
      <span>重新输入密码:</span>
      <input type="text" v-model="login.rpsw" />
      <input type="button" value="anniu " />
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      login: {
        name: "",
        psw: "",
        rpsw: ""
      }
    };
  }
};
</script>

<style>
</style>