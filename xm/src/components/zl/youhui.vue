<template>
    <div>
         <div id="top">
            <router-link to="/mine">
            <img  src="../../../static/img/back.png" alt=""></router-link>
            <p>我的优惠</p>
            <div id="nav">
            <ul>
                <li><router-link to="/hongbaos">红包</router-link></li>
                <li><router-link to="/daijinquan">商家代金券</router-link></li>
            </ul>
        </div>
        
        </div>
        <div id="bot">
           <ul>
                <li><router-link to="/duihuan">兑换红包</router-link></li>
                <li><router-link to="/tuijian">推荐有奖</router-link></li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"youhui",
    created() {
        this.sub();
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
    width: 7%;
    padding: 3% 0;
    float: left;
    margin-left: 2%;
}
#nav ul li{
    width: 100%;
    background-color: #fff;
}
#nav ul li,#money ul li,#bot ul li{
    width: 50%;
    float: left;
    /* border: 1px solid red; */
    color: black;
    font-size: 0.15rem;
}


#bot{
    background-color: #fff;
    padding: 4% 0;
    width: 100%;
    position: absolute;
    margin-top: 150%;
}


</style>
