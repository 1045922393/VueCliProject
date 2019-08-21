<template>
  <div class="father">
    <h1>我是父</h1>
    <p>
      <son v-bind:giveSon="msg" class="son" @sondata="doneSonData"></son>
      <daughter class="daugther"></daughter>
      <span>
        从父发给子的数据
        <input type="text" v-model="msg" />
      </span>
    </p>
    <p>从子获得的数据----{{dataFromSon}}</p>
  </div>
</template>

<script>
import son from "./son";
import daughter from "./daughter";
export default {
  data() {
    return {
      msg: "",
      dataFromSon: ""
    };
  },
  components: {
    son,
    daughter
  },
  mounted() {},
  methods: {
    doneSonData(obj) {
      window.console.log(obj);
      this.dataFromSon = obj;
    }
  }
};
</script>

<style>
.father {
  background-color: red;
}
.son {
  width: 80%;
  background-color: yellowgreen;
}
.daugther {
  width: 80%;
  background-color: purple;
}
</style>