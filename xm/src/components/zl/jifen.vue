<template>
    <div id="container">
      <div id="top">
          <router-link to="/mine">
          <img  src="../../../static/img/back.png" alt="">
          </router-link>
          <p>我的积分</p>
          <div id="content">
              <span style="margin-left:4%;">积分说明</span>
              <router-link to="/jifens"><span>?积分说明</span></router-link>
               <p style="margin-left:-70%;font-size:0.4rem;">{{$store.state.integral}}</p>
                <p id="money">元</p>
                <div id="tixian" @click="sure">积分兑换商品</div>
          </div>
        <div id="tankuang" v-if="show" class="animated heartBeat 2s">
            <img src="../../../static/img/警告.png" alt="">
            <p>快去下单赚取大量积分吧</p>
            <div id="bottom" @click="sure2">确认</div>
        </div>
          </div> 
            <div id="jiaoyi"><P>最近30天积分记录</P></div>
              <div id="cot" >
                  <img src="../../../static/img/下载.png" alt="">
                  <p>最近30天无积分记录</p>
                  <p>快去下单，赚取大量积分吧！</p>
                 
                  </div> 
        
    </div>
</template>
<script>
export default {
    name:"jifens",
    data(){
        return{
            show:false
        }
    },
    methods: {
       sure(){
           this.show = true
       },
       sure2(){
           this.show = false
       }
    },
}
</script>
<style scoped>
#container{
    position: relative;
}
#top {
/* border: 1px solid black; */
position: fixed;
width: 100%;
line-height: 0.52rem;
background-color: rgb(49, 144, 232);
font-size: 0.2rem;
color: white;
top: 0;
padding: 2% 0;
}
#top img{
    width: 8%;
    position: absolute;
    left:3%;
    top: 5%;
}
#content{
    border-radius: 2%;
    width: 100%;
    background-color: #fff;
    color: gray;
    font-size: 0.15rem;
    padding: 2% 0;
}
#content span:nth-child(1){
    margin-left: 55%;
}
#money{
    position: absolute;
    left: 30%;
    top: 50%;
}
#tixian{
    width: 90%;
    margin-left: 5%;
    background-color:red;
    text-align: center;
    font-size: 0.2rem;
    color: white;
    border-radius: 3%;
    margin-bottom: 2%;
}
#jiaoyi{
    width: 100%;
    /* border: 1px solid red; */
   margin-top: 66%;
   text-align: left;
   display: flex;
   color: grey;
}
#jiaoyi p{
   margin-left: 2%;
   padding: 2% 0;
}
#cot img{
    width: 60%;
    margin-top: 20%;
}
#cot p{
    margin-top: 2%;
}
#cot p:nth-child(3){
    margin-top: 2%;
    font-size: 0.1rem;
}
#tankuang{
    /* border: 1px solid red; */
    position: absolute;
    top: 85%;
    background-color: #fff;
    margin-left: 15%;
    border-radius: 5%;
    color: black;
    width: 70%;
    overflow: hidden;
}
#bottom{
    width: 100%;
    background-color: rgb(122, 240, 87);
    color: white;
    margin-top: 5%;
}
#tankuang p{
    margin-top: 35%;
}
#tankuang img{
    width: 30%;
    margin-left: 33%;
}
</style>
