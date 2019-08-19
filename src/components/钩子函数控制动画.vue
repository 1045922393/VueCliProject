<template>
  <div>
    <button @click="show=!show">click</button>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
    >
      <p v-show="show">我是一个会动的东西</p>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: true
    };
  },
  methods: {
    beforeEnter(el) {
      // window.console.log(1);
      el.style.transform = "translateX(200px)";
      // el.style.transition = "all 1s";
    },

    enter(el) {
      // window.console.log(2);

      //   el.style.offetWidth;
      //   el.style.transform = "translateX(-200px)";
      el.style.transition = "all 1s";
    },

    afterEnter(el) {
      //   window.console.log(3);
      el.style.transform = "translateX(-200px)";
      // el.style.transition = "all 1s";
      //   this.show = true;
    },
    beforeLeave(el) {
      // window.console.log(1);
      el.style.transform = "translateX(-200px)";
      //   el.style.opacity = "1";
    },
    leave(el) {
      // el.style.offetWidth;
      // el.style.transform = "translateX(-200px)";
      el.style.transition = "all 1s";
      // done();
    },
    afterLeave(el) {
      //   el.style.opacity = "0";
      el.style.transform = "translateX(200px)";
      //   this.show = true;
    }
  }
};
</script>

<style>
p {
  transition: all 1s;
}
</style>