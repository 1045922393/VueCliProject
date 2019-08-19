<template>
  <div>
    <h1>详细页</h1>
    <p>{{detail}}</p>
    <button @click="look">查看详细页</button>
    <router-link to="/index">aaa</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: ""
    };
  },
  methods: {
    look() {
      let id = this.$route.params.id;
      if (id === "1") {
        this.$router.push({
          name: "phone",
          params: { age: 12, name: "phone" }
        });
      } else if (id === "2") {
        this.$router.push({
          name: "washingMachine",
          params: { age: 12, name: "defauwashingMachinelt" }
        });
      } else if (id === "3") {
        this.$router.push({
          name: "computer",
          params: { age: 12, name: "computer" }
        });
      } else {
        this.$router.push({
          name: "defaultA",
          params: { age: 12, name: "default" }
        });
      }
    }
  },
  mounted() {
    let id = this.$route.params.id;
    if (id === "1") {
      this.detail = "手机";
    } else if (id === "2") {
      this.detail = "电脑";
    } else if (id === "3") {
      this.detail = "洗衣机";
    } else {
      this.detail = "五东西";
    }
  },
  watch: {
    $route(to) {
      let id = to.params.id;
      if (id === "1") {
        window.console.log(this.$route);
        this.detail = "手机";
      } else if (id === "2") {
        window.console.log(this.$route);

        this.detail = "电脑";
      } else if (id === "3") {
        window.console.log(this.$route);

        this.detail = "洗衣机";
      } else {
        window.console.log(this.$route);

        this.detail = "五东西";
      }
    }
  }
};
</script>

<style>
</style>