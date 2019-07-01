<template>
  <div style="backgroundColor:white;height:5.75rem;">
    <div id="top">
      <router-link to="/youhui">
      <img  src="../../../static/img/back.png" alt>
      </router-link>
      <p style=" font-weight: bold;">推荐有奖</p>
    </div>
    <img id="img1" src="../../../static/img/download.png" alt>
    <div id="content">
      <ul>
        <li>
          <img @click="sure" src="../../../static/img/下载 (6).png" alt>
          <p>邀请微信好友</p>
        </li>
        <li>
          <img @click="sure" src="../../../static/img/qq.png" alt>
          <p>邀请QQ好友</p>
        </li>
        <li>
          <img @click="sure" src="../../../static/img/下载 (4).png" alt>
          <p>面对面邀请</p>
        </li>
      </ul>
    </div>
    <div id="tankuang" v-if="show"  class="animated heartBeat 2s">
        <img src="../../../static/img/警告.png" alt="">
         <p>请在饿了么APP中打开</p>
         <div id="btn" @click="sure2()">确认</div>
    </div>
    <div id="center">
      <ul>
        <li>
          <p>累计收益</p>
          <p>
            <span style="color:red;">0</span>元
          </p>
        </li>
        <li>
          <p>成功邀请</p>
          <p>
            <span style="color:black">0</span>人
          </p>
        </li>
      </ul>
    </div>
    <div id="bottom">
      <p>-收益明细-</p>
      <img src="../../../static/img/下载 (3).png" alt>
      <p>还不赶紧去邀请好友</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "tuijian",
  data() {
      return {
          show:false
      }
  },
  created() {},
  methods: {
    sure(){
        this.show =true
    },
     sure2(){
        this.show =false
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
}
#img1 {
  width: 100%;
  height: 40%;
}
#content ul li {
  width: 32.5%;
  /* border: 1px solid red; */
  float: left;
  background-color: #fff;
  padding: 5% 0;
}
#content ul li p {
  margin-top: 3%;
}
#center {
  /* border: 3px solid black; */
  width: 100%;
  margin-top: 40%;
  overflow: hidden;
}
#center ul li {
  width: 48%;

  float: left;
}
#center ul li:nth-child(1) {
  border-right: 1px solid gainsboro;
}
#center ul li p {
  line-height: 0.2rem;
  color: grey;
}
#content ul li img {
  width: 40%;
}
#bottom p {
  margin-top: 3%;
}
#bottom img {
  width: 8%;
  margin-top: 3%;
}
#tankuang{
    float: left;
    width: 80%;
    height: 35%;
    background-color: #fff;
    border: 1px solid gainsboro;
    border-radius:  5%;
    margin-left: 10%;
    position: relative;
    margin-top: -50%;
}
#btn{
    width: 100%;
    background-color: rgb(80, 230, 142);
    position: absolute;
    bottom: 0;
    padding: 5% 0;
    border-radius:0 0 5% 5%;
}
#tankuang p{
    margin-top: -3.8%;
    line-height: -0.5rem;
    color: gray;
}
#tankuang img{
/* margin-top: -2%; */
width: 35%;
}
</style>
