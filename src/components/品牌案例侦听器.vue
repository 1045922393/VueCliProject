<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-fontsize="'red'" v-model="brand.id" />
      品牌名称:
      <input type="text" v-autoFocus v-model="brand.name" />
      <input @click="addBrand" type="button" value="添加" />
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" v-model="key" />
    </div>
    <div>
      <table class="tb">
        <thead>
          <tr>
            <th>编号</th>
            <th>品牌名称</th>
            <th>创立时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(val,index) in listenArr?listenArr:list" :key="index">
            <td>{{val.id}}</td>
            <td>{{val.name}}</td>
            <td>{{val.createDay|timeFormat('/')}}</td>
            <!-- |timeFormat('-') -->
            <td>
              <a href="#" @click.prevent="delBrand(index)">删除</a>
            </td>
          </tr>
          <tr v-show="listenArr.length===0">
            <td colspan="4">没有数据</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    search() {
      let arr = this.list.filter(val => {
        return val.name.indexOf(this.key) !== -1;
      });
      return arr;
    }
  },
  watch: {
    key() {
      this.listenArr = this.list.filter(val => {
        return val.name.indexOf(this.key) !== -1;
      });
    }
  },
  methods: {
    addBrand() {
      this.brand.createDay = new Date();
      this.list.push({ ...this.brand });
    },
    delBrand(delIndex) {
      this.list.splice(delIndex, 1);
    }
  },
  data() {
    return {
      key: "",
      brand: {
        name: "",
        id: ""
      },
      list: [
        {
          id: 1,
          name: "中华小当家",
          createDay: "Sun Aug 18 2000 09:37:33"
        },
        {
          id: 2,
          name: "蓝猫淘气三千问",
          createDay: "Sun Aug 18 2020 08:37:33"
        },
        {
          id: 3,
          name: "宛若游龙",
          createDay: "Sun Aug 18 2020 08:37:33"
        },
        {
          id: 4,
          name: "翩若惊鸿",
          createDay: "Sun Aug 18 2020 08:37:33"
        }
      ],
      listenArr: false
    };
  },

  // mounted() {
  //   this.key = "";
  // },
  //自定义过滤器
  filters: {
    timeFormat: function(el, spa) {
      let date = new Date(el);
      let getYear = date.getFullYear();
      let getMonth = date.getMonth() + 1;
      let getDate = date.getDate();
      let getHours = date.getHours();
      return `${getYear}${spa}${
        getMonth < 10 ? "0" + getMonth : getMonth
      }${spa}${getDate < 10 ? "0" + getDate : getDate} ${
        getHours < 10 ? "0" + getHours : getHours
      }`;
      /**
       * 过滤器的使用
       * filters下包含规则,规则是函数,函数的返回值就是代替原来数据的内容
       */
    }
  }
  //自定义命令
  // directives: {
  //   autochange: {
  //     inserted() {
  //       this.key = "";
  //     }
  //   }
  // }
};
</script>
<style lang="less" scoped>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
