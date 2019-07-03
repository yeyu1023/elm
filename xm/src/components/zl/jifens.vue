<template>
    <div style="backgroundColor:white;">
        <div id="top">
           <router-link to="/jifen">
            <img src="../../../static/img/back.png" alt="">
           </router-link>
            <p>积分问题</p>
        </div>
        <div id="content">
            <ul id="ul1">
                <li>
                    <p>Q1:怎么获得积分？</p>
                    <p>在线支付的订单将获得订单积分奖励</p>
                    <p>积分将在用户完成评价后获得</p>
                    <p>可获的积分=订单金额*10（即一元=10点积分）</p>
                   <p>订单金额值实际付款金额，不包含活动优惠的金额和评价不会增加积分</p>
                </li>
                <li>
                    <p>Q2: 积分是用来做什么的？</p>
                   <p>可以在积分商城兑换各种礼品</p>
                </li>
                <li>
                    <p>Q3:积分兑换了很多天，还没有到，怎么办？</p>
                    <p>积分从兑换日起，3个工作其（周密不算）内处理发货，发货后，通常在3个工作其左右送达</p>
                </li> 
                <li>
                    <p>Q4:积分兑换的手机充值卡怎么使用，充值前需要电话确认吗？</p>
                    <p>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您填写的手机号上，充值前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确</p>
                </li>   
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"jifens",
    methods: {
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
    line-height:0.25rem;
    text-align: left; 
    margin-left: 2.5%;
}

#ul1 li p:nth-child(1){
    text-align: left;
    font-size: 0.15rem;
    font-weight: bold;
   
}
#ul1 li p{
    margin-top: 3%;
    margin-left: 3%;
    font-size: 0.13rem;
     color: gray;
}
</style>
