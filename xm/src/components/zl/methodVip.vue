<template>
    <div>
        <div id="top">
            <img @click="ret()" src="../../../static/img/back.png" alt="">
            <p style=" font-weight: bold;">会员问题</p>
            
        </div>
        <h3 style="backgroundColor:white;">Q1: 什么是订单数 订单数是指商家最近30天的订单总数，这个数据是动态的，每天都会进行更新。 ### Q2: 商品多久内可以评价？评价后是否能修改？ * 下单确认收货后，7天内可以对商品进行评价。超过7天，评价功能自动失效。 * 美食一旦点评就不能做修改，评价不可删除撤销，请知悉。 ### Q3: 为什么提示下单次数过多，无法下单？ 在24小时内，同一手机号在同一设备上最多可以成功提交7次订单。</h3> 
    </div>
</template>
<script>
export default {
    name:'methodVip',
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
h3{
    text-align: left;
    margin-top: -3%;
    widows: 100%;
    padding: 2% 3%;
    line-height: 0.3rem;
    color: black;
}
</style>
