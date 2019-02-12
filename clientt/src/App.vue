<template>
  <div id="app">
    <div class="title">书签列表</div>
    <div class="box">
      <div class="sbox"
        v-for="(value,key) in initData"
        :key="key">
        <div class="sboxl"><a :href="value.url" target="_bank">{{value.name}}</a></div>
        <div class="sboxr"><a @click="deleteData(value.id)">删除</a> </div>
      </div>
    </div>
    <input
      type="text"
      class="add"
      placeholder="请输入网址"
      v-model="val"
    >
    <div
      class="btn"
      @click="add"
    >添加加加加加加</div>
  </div>
</template>

<script>
import api from "./utils/api";
export default {
  name: "app",
  data() {
    return {
      initData: [
      ],
      val: "",
      switch:true
    };
  },
  methods: {
    add() {
      if(this.switch){
        this.switch=false
        let params={
        url:this.val
      }
      api.addData(params)
        .then(res=>{
          console.log(res)
          alert("添加成功")
          this.getList()
          this.switch=true
          this.val=""
        })
        .catch(err=>{
          console.log(err)
          this.switch=true
          alert("添加失败")
        })
      }

    },
    getList() {
      api.getList()
        .then(res => {
          console.log(res);
          this.initData=res.data.data
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteData(id){
      let params={
        id:id
      }
      api.deleteData(params)
        .then(res => {
          console.log(res);
          alert("删除成功")
          this.getList()
        })
        .catch(err => {
          console.log(err);
          alert("删除失败")
        });
    }
  },
  created() {
    this.getList()
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  width: 800px;
  height: auto;
  border: solid 1px #999;
  border-bottom: none;
  margin: 10px auto;
}
.sbox {
  width: 100%;
  height: 30px;
  border-bottom: solid 1px #999;
}
.sboxl {
  width: 90%;
  float: left;
  border-right: solid 1px #999;
  box-sizing: border-box;
  height: 100%;
}
.sboxr {
  width: 10%;
  float: left;
  height: 100%;
}
.sboxl a {
  text-decoration: none;
  display: inline;
  line-height: 30px;
  color: #666;
}
.sboxl a:hover {
  color: aqua;
}
.sboxr a {
  text-decoration: none;
  display: inline;
  line-height: 30px;
  color: #666;
  cursor: pointer;
}
.sboxr a:hover {
  color: aqua;
}
.add {
  width: 200px;
  height: 25px;
  margin: 10px auto;
}
.btn {
  width: 150px;
  height: 30px;
  line-height: 30px;
  display: block;
  margin: 10px auto;
  border: solid 1px #999;
  border-radius: 5px;
  cursor: pointer;
}
</style>
