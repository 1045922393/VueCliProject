<template>
  <div>
    <ul>
      <li v-for="(val,index) in objArr" v-bind:key="index">
        <div v-for="(v,k,i) in val" v-bind:key="i">{{val.name}}</div>
      </li>
    </ul>
    <table :class="tableCss">
      <thead>
        <th v-for="(val,key,index) in objArr[0]" :key="index" :class="td">{{key}}</th>
      </thead>
      <tbody>
        <tr v-for="(val,index) in objArr" :key="index">
          <td :class="td+' text'" v-for="(v,k,i) in val" :key="i">{{v}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objArr: [
        { name: "one", age: 789, gender: "girl" },
        { name: "two", age: 456, gender: "boy" },
        { name: "three", age: 123, gender: "woman" },
        { name: "four", age: 3000, gender: "man" }
      ],
      tableCss: "tabC",
      td: "tdC"
    };
  }
};
</script>

<style>
.tabC {
  width: 500px;
  border: 1px red solid;
}
.tdC {
  border: 1px blue dashed;
}
.text {
  text-align: center;
}
</style>