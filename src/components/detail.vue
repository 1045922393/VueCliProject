<template>
  <div>
    <h1>我是detail页面内容</h1>
    <p>{{content}}</p>
    <button v-if="routerId" @click="showComponent">点击我显示子组件</button>
    <router-view></router-view>
  </div>
</template>

<script>
function aditition(kamo, callback1, callback2, callback3, callback4) {
  if (kamo === "1") {
    callback1();
  } else if (kamo === "2") {
    callback2();
  } else if (kamo === "3") {
    callback3();
  } else {
    callback4();
  }
}
export default {
  data() {
    return {
      content: "",
      routerId: ""
    };
  },
  watch: {
    $route() {
      this.routerId = this.$route.params.id;
      // let id = this.$route.params.id;
      // if (this.routerId === "1") {
      //   this.content = "detail of computer";
      // } else if (this.routerId === "2") {
      //   this.content = "detail of car";
      // } else if (this.routerId === "3") {
      //   this.content = "detail of phone";
      // } else {
      //   this.content = "just the detail";
      // }
      aditition(
        this.routerId,
        () => {
          this.content = "detail of computer";
        },
        () => {
          this.content = "detail of car";
        },
        () => {
          this.content = "detail of phone";
        },
        () => {
          this.content = "just the detail";
        }
      );
    }
  },
  //创建页面渲染钩子函数
  mounted() {
    //window.console.log(this.$route);
    /** this.$route 有以下内容
     * fullPath: "/detail/3"
        hash: ""
        matched: [{…}]
        meta:
        __proto__: Object
        name: "detail"
        params:{id: "3"}
        __proto__: Object
        path: "/detail/3"
        query: {}*/
    this.routerId = this.$route.params.id;
    // if (this.routerId === "1") {
    //   this.content = "detail of computer";
    // } else if (this.routerId === "2") {
    //   this.content = "detail of car";
    // } else if (this.routerId === "3") {
    //   this.content = "detail of phone";
    // } else {
    //   this.content = "just the detail";
    // }
    aditition(
      this.routerId,
      () => {
        this.content = "detail of computer";
      },
      () => {
        this.content = "detail of car";
      },
      () => {
        this.content = "detail of phone";
      },
      () => {
        this.content = "just the detail";
      }
    );
  },
  methods: {
    showComponent() {
      // window.console.log(1);
      // this.$router.push();
      aditition(
        this.routerId,
        () => {
          // window.console.log(this.routerId);
          this.$router.push({
            name: "detailFirst",
            params: {
              id: 1,
              name: "computer",
              querstion: "不知道,不晓得"
              //传入的参数在被显示的组件中可以通过$route查看
            }
          });
        },
        () => {
          this.$router.push({ name: "detailSecond" });
        },
        () => {
          this.$router.push({ name: "detailThird" });
        },
        () => {
          return;
        }
      );
    }
  }
};
</script>

<style>
</style>