<template>
  <div class="hello">
    <!-- 头部 -->
    <div class="top">
      <img id="img1" @click="goBack()" src="../../static/img/back.png" alt />
      <p class="p1">{{datas.name}}</p>
      <router-link :to="'/mine?'"></router-link>
      <img v-if="!bool" id="img2" src="../../static/img/imgs/wd1.png" alt />
      <div v-if="bool" class="a1">
        <router-link style="color:white;" to="/register">登录/注册</router-link>
      </div>
    </div>
    <!-- 底部四栏固定部分 -->
    <div id="nav">
      <ul>
        <li>
          <router-link to="/waimai">
            <img src="../../static/img/homeF.png" alt="">
            <P style="font-size:0.1rem;color:grey;">外卖</P>
          </router-link>
        </li>
        <li>
          <router-link to="/search">
            <img src="../../static/img/指南针 (6).png" alt="">
            <P style="font-size:0.1rem;color:grey;">搜索</P>
          </router-link>
        </li>
        <li>
          <router-link to="/dingdan">
            <img src="../../static/img/dingdan2.png" alt="">
            <P style="font-size:0.1rem;color:grey;">订单</P>
          </router-link>
        </li>
        <li>
          <router-link to="/mine">
            <img src="../../static/img/meF.png" alt="">
            <P style="font-size:0.1rem;color:grey;">我的</P>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "dingdan",
  data() {
    return {
      datas: {},
      bool: false //未登录时为false
    };
  },
  methods: {
    goBack() {
      // 返回上一个历史记录
      // this.$router.go(-1);
      // 或者
      this.$router.back();
    }
  },
  created() {
    //接收dianmian页面传来的参数
    console.log(this.$route.query);
    this.datas = this.$route.query;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  /* border: 1px solid black; */
  position: fixed;
  width: 100%;
  height: 0.53rem;
  line-height: 0.52rem;
  background-color: rgb(49, 144, 232);
  font-size: 0.2rem;
  color: white;
  top: 0;
  text-align: center;
  z-index: 15;
}
#img1 {
  position: fixed;
  height: 0.3rem;
  top: 0.11rem;
  left: 0.11rem;
}
#img2 {
  position: fixed;
  height: 0.3rem;
  top: 0.11rem;
  right: 0.11rem;
}
.a1 {
  position: absolute;
  right: 0.1rem;
  top: 0;
}
#nav {
  /* border: 1px solid red; */
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid gainsboro;
  background-color: #fff;
}
#nav ul li {
  float: left;
  width: 25%;
  padding: 1% 0;
  /* border: 1px solid red; */
}
#nav ul li img {
  width: 25%;
}
</style>
