<template>
  <div>
    <div id="top">
      <router-link to="/zhanghu">
        <img src="../../../static/img/back.png" alt>
      </router-link>
      <span>编辑地址</span>
      <span id="change" @click="delet()" v-show="down">编辑</span>
      <span id="change2" @click="delet()" v-show="!down">完成</span>
    </div>
    <div id="line"></div>
    <div id="location">
      <ul>
        <li v-for="(v,i) in arr" :key="i" class="imgLiClass" :class="{'active': index==0}">
         <p style="padding: 0 3%;"> {{v.phone}}
          <br>
          {{v.address}}</p>
          <span v-if="show" @click="getdele(i)">❌</span>
        </li>
      </ul>
    </div>
    <div id="add">
      <p>新增收货地址</p>
      <router-link to="/addLocation">
        <img id="go" src="../../../static/img/iconfontjiantou2.png" alt>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "locationChange",
  data() {
    return {
      arr: [],
      show: false,
      down: true,
      address: "",
      index:''
    };
  },
  created() {
    this.getLoc();
    this.dele();
    this.getdele();
    this.address = v.id;
    console.log(this.address);
  },
  methods: {
    //获取用户的收货地址
    getLoc() {
      //get请求方式 第一个参数：地址
      const URL =
        "https://elm.cangdu.org/v1/users/" +
        this.$store.state.userMsg.user_id +
        "/addresses";
      this.$http({
        url: URL,
        method: "get"
      }).then(res => {
        //res返回请求的数据
        //将请求成功的所有的地址存在一个数组中，遍历数组得到该用户的所有收获地址
        var arr = [];
        console.log("成功");
        console.log(res.data); //返回请求到的数据
        this.arr = res.data;
       
      });
    },
    //删除收获地址
    getdele(i) {
      //get请求方式 第一个参数：地址
      //   https://elm.cangdu.org/v1/users/:user_id/addresses/:address_id
      const URL =
        "https://elm.cangdu.org/v1/users/" +
        this.$store.state.userMsg.user_id +
        "/addresses/" +
        this.arr[i].id;
      this.$http({
        url: URL,
        method: "delete"
      }).then(res => {
        //res返回请求的数据
        //请求成功后的回调函数
        console.log("成功");
        console.log(res.data); //返回请求到的数据
        this.arr.splice(i, 1);
       
      });
    },
    delet() {
      this.down = !this.down;
      this.show = !this.show;
    }
  }
};
</script>
<style scoped>
#top {
  position: fixed;
  width: 100%;
  height: 0.53rem;
  line-height: 0.52rem;
  background-color: rgb(49, 144, 232);
  font-size: 0.2rem;
  color: white;
  top: 0;
  margin-bottom: 3%;
}
#top img {
  width: 8%;
  padding: 3% 0;
  float: left;
  margin-left: 2%;
  position: relative;
}
#change,
#change2 {
  font-size: 0.15rem;
  float: right;
  padding: 1% 0;
  margin-right: 5%;
}
#change2 {
  margin-right: 5%;
}
#line {
  width: 100%;
  border: 1px solid gainsboro;
  margin-top: 3%;
}
#add {
  width: 100%;
  float: left;
  font-size: 0.15rem;
  background-color: #fff;
  color: gray;
  text-align: left;
  margin-top: 3%;
  position: relative;
}
#app p{
    padding: 5%;
}
#go {
  width: 5%;
  position: absolute;
  left: 90%;
  top: 20%;
}
#location {
  color: white;
  width: 100%;
  text-align: left;
  display: flex;
  font-size: 0.15rem;
  line-height: 0.3rem;
}
#location ul li {
  margin-right: 10%;
  padding: 2% 0;
  margin-left: 0;
  margin-bottom: 2%;
  border: 1px solid gainsboro;
  width: 100vw;
  background-color: rgb(245, 199, 199);
}
#location ul li > span {
  float: right;
  margin-right: 5%;
  margin-top: -8%;
}
.imgLiClass{
  background-color: #fff;
}
</style>
