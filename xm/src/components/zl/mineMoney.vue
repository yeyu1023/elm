<template>
    <div id="container">
      <div id="top">
          <router-link to="/mine">
          <img src="../../../static/img/back.png" alt="">
          </router-link>
          <p>我的余额</p>
          <div id="content">
              <span style="margin-left:4%;">当前余额</span>
              <router-link to="/bank"><span>?余额明细</span></router-link>
               <p style="margin-left:-70%;font-size:0.4rem;">{{$store.state.balance}}</p>
                <p id="money">元</p>
                <div id="tixian">提现</div>
          </div>
        
          </div> 
            <div id="jiaoyi"><P>交易明细</P></div>
              <div id="cot">
                  <img src="../../../static/img/下载.png" alt="">
                  </div> 
        
    </div>
</template>
<script>
export default {
    name:"jifen",
    methods: {
         ret(){
            //返回上一级页面
            this.$router.back();
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
    background-color:lightgrey;
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
</style>
