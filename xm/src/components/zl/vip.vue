<template>
    <div>
        <div id="top">
            <img @click="ret()" src="../../../static/img/back.png" alt="">
            <p>会员中心</p>
            
        </div>
        <p id="p1">为账户{{$store.state.userMsg.username}}购买会员</p>
        <div id="vip" style="backgroundColor:white;padding:4% 0;">
            <span>会员特权</span>
           <span>会员说明</span>
            <router-link to="/vipInstro"><img src="../../../static/img/iconfontjiantou2.png" alt=""></router-link>
        </div>
        <div id="content">
            <ul>
                <li>
                    <img src="../../../static/img/5.jpg" alt="">
                    <div class="fots"><p>减免配送费</p>
                    <p>每月减免30单，每日可减免三单，每单最高减4元</p>
                    <p>蜂鸟转送专享</p></div>
                </li>
                 <li>
                    <img src="../../../static/img/4.jpg" alt="">
                   <div class="fots"><p>减免配送费</p>
                    <p>每月减免30单，每日可减免三单，每单最高减4元</p>
                    <p>蜂鸟转送专享</p></div>
                </li>
            </ul>
            <div id="open">
                <p>开通会员</p>
                <p>一个月<span>￥20</span></p>
              
                <span> <router-link to="/zhifu">购买</router-link></span>
               
               
            </div>
           <div id="vip2">
            <span>兑换会员</span>
            <span>使用卡号卡密</span>
            <router-link to="/duihuanVip"><img src="../../../static/img/iconfontjiantou2.png" alt=""></router-link>
        </div>
        <div id="vip3">
           <router-link to="/pra"> <span>购买记录</span></router-link>
            <span>开发票</span>
            <router-link to="/shopRecord">
                <img src="../../../static/img/iconfontjiantou2.png" alt="">
            </router-link>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"vip",
    methods: {
        ret(){
            this.$router.back();
        }
    },
}
</script>
<style scoped>
#top{
    
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
#top img{
    width: 8%;
    padding: 3% 0;
    float: left;
    margin-left: 2%;
}
#p1{
    text-align: left;
    margin-left: 3%;
    padding: 3% 0;
}
#vip,#vip2,#vip3{
    width: 100%;
    background-color: #fff;
    text-align: left;
    border-bottom: 1px solid gainsboro;
    
}
#vip span:nth-child(1),#vip2 span:nth-child(1),#vip3 span:nth-child(1){
    float: left;
    margin-left: 3%;
}
#vip img{
     margin-right: 3%;
    float: right;
    width: 5%;
}
#content{
    float: left;
    width: 100%;
}
#vip span:nth-child(2),#vip2 span:nth-child(2),#vip3 span:nth-child(2){
    /* float: right; */
    margin-left: 57%;
    color: grey;
}

#content ul li{
    width: 100%;
    background-color: #fff;
    padding: 5% 0;
      text-align: left; 
      border-bottom: 1px solid gainsboro;
     
}
#content ul li p{
 margin-left: 15%;
 font-size: 0.12rem;
 color: grey;
 padding: 1% 0;
 
}
#content ul li p:nth-child(1){
      margin-top: 5%; 
}
#content ul li p:nth-child(1){
    font-size:0.18rem; 
    color: black;
}
.fots{
    margin-left: 5%;
    margin-top: -18%;
}
#content img{
    width: 12%;
    margin-left: 3%;
}
#open{
    background-color: #fff;
    text-align: left;
    margin-bottom: 3%;
}
#open p:nth-child(1){
    font-size: 0.2rem;
    margin-left: 3%;
    padding: 3% 0;
    margin-top: 3%;
}
#open p:nth-child(2){
    margin-left: 3%;
    margin-top: 3%;
    padding: 3% 0;
}
#open span:nth-child(1){
    color: orangered;
}
 #open span:nth-child(3){
     display: inline-block;
   border: 1px solid orangered;
margin-left: 80%;
margin-top: -100%;
padding: 3% 5%;
border-radius: 10%;
color: red;
}
#vip2,#vip3{
    margin-bottom: 3%;
    padding: 5% 0;
}
#vip2 img,#vip3 img{
    width: 5%;
}
#vip2 span:nth-child(2){
margin-left: 45%;
}
</style>
