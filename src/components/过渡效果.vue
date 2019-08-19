<template>
  <div>
    <button @click="()=>{this.isshow=!this.isshow}">click</button>
    <transition name="example">
      <p v-show="isshow">过渡的例子</p>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isshow: true
    };
  }
};
</script>

<style>
.example-enter {
  transform: translateX(200px);
  opacity: 0;
}
.example-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.example-enter-active {
  transition: all 1s;
}
.example-leave {
  transform: translateX(0);
  opacity: 1;
}
.example-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
.example-leave-active {
  transition: all 0.5s;
}
</style>