<template>
    <div style="backgroundColor:white;">
        <div id="top">
            
            <router-link to="/youhui">
            <img src="../../../static/img/back.png" alt="">
            </router-link>
            <p>代金券说明</p>
            
        </div>
        <div id="content">
            <ul id="ul1">
                <li>
                    <p>Q1:什么是商家代金券？</p>
                    <p>商家代金券是值商家发放的代金券，只能在规定的商家使用</p>
                   
                </li>
                <li>
                    <p>Q2: 怎么获得商家代金券？</p>
                    <p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
                    <p>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</p>
                </li>
                <li>
                    <p>Q3:商家代金券使用条件？</p>
                    <p>商家代金券仅限在指定商家使用</p>
                    <p>商家代金券只限在现金付款时使用</p>
                    <p>么一个用户只能使用一次代金券，并且不能和其它的代金券叠加使用</p>
                </li>    
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"daijinquans",
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
