<template>
    <div style="backgroundColor:white;">
        <div id="top">
            
            <img @click="ret()" src="../../../static/img/back.png" alt="">
            <p>{{this.$route.query.daser}}</p>
            
        </div>
        <div id="content">
            <p id="big">
                尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
              购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
              注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
            </p>
            <ul id="ul1">
                <li>
                    <p>Q1:特权介绍</p>
                    <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识</p>
                   <p>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
                    <p>更多特权，敬请期待！</p>
                </li>
                <li>
                    <p>Q2: 资费介绍</p>
                    <p>饿了么会员卡：20元</p>
                    
                </li>
                <li>
                    <p >Q3:使用说明</p>
                    <p >当用户满足以下任一条件，会员服务自动失效</p>
                    <p>自绑定之日起超过31天</p>
                    <p>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
                </li>  
                 <li>
                    <p>Q4:购卡说明</p>
                    <p>在线购买：饿了么APP>我的?饿了么会员卡</p>
                   
                </li> 
                 <li>
                    <p>Q5:温馨提示</p>
                    <p>用户在当前会员师兄啊之前</p>
                    <p>自绑定之日起超过31天</p>
                    <p>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
                </li>     
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"vipInstro",
    methods: {
       ret(){
           this.$router.back();
       } 
    }
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
#content{
    width: 95%;
    /* border: 1px solid red; */
    line-height:0.15rem;
    text-align: left; 
    margin-left: 2.5%;
}

#ul1 li p:nth-child(1){
    text-align: left;
    font-size: 0.15rem;
    font-weight: bold;
    color: black;
   
}
#ul1 li p{
    margin-top: 3%;
    margin-left: 3%;
    font-size: 0.13rem;
     color: gray;
}
#big{
    width: 80%;
    margin-left: 10%;
    padding: 3% 0;
    font-size: 0.15rem;
}
#content ul li:nth-child(3) p:nth-child(3),#content ul li:nth-child(3) p:nth-child(4){
    margin-left: 10%;
}

</style>
