<template>
  <div>
    <div :style="{ fontSize: number +'px' }">我应该是{{number}}的字体</div>
    <div :class="{red:true}" :style="{fontSize:twentyTwo+'px'}">{{redMsg}}69*{{twentyTwoMsg}}</div>
    <div :[valueName]="valueResult">123213</div>
    <img :[srcIsValue]="findUrl" :alt="altMsg" />
    <!-- 这个方式不会自动转为寻找服务器的字段符 -->
    <img src="@/assets/logo.png" alt />
    <img src="@/assets/default.png" alt />
    <!-- 直接引用的会去托管的静态资源那里寻找 -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      number: 40,
      redMsg: "我的背景应该是红色的",
      twentyTwo: 22,
      twentyTwoMsg: "我的字体大小应该是22",
      valueName: "id",
      valueResult: "getMeById",
      altMsg: "丢失了的图片能看到我",
      srcIsValue: "src",
      findUrl: "/img/logo.82b9c7a5.png"
    };
  }
};
</script>

<style>
.red {
  background-color: red;
}
[hidden] {
  background-color: blue;
}
</style>