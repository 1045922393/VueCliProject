<template>
  <div>
    111
    <button @click="isshow=!isshow">click</button>
    <transition enter-active-class="animated flip" leave-active-class="animated flip">
      <p v-if="isshow" class="animate">aaaa</p>
    </transition>
  </div>
</template>

<script>
import "@/styles/Animate.css";

export default {
  data() {
    return {
      msg: "aaa",
      isshow: true
    };
  }
};
</script>

<style>
.animate {
  background-color: blue;
  width: 200px;
  height: 200px;
}
</style>