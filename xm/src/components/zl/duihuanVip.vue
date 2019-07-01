<template>
    <div>
       <div id="top">
            <img @click="ret()" src="../../../static/img/back.png" alt="">
            <p>兑换会员</p>
        </div>
        <p id="p1">成功兑换后将关联到当前账号：{{$store.state.userMsg.username}}</p> 
        <div id="inp">
            <input type="text" placeholder="请输入10位卡号">
             <input type="text" placeholder="请输入6位卡密">
        </div>
        <div id="duihuan">兑换</div>
        <p style="margin-top:6%;color:gary;">——温馨提示——</p>
        <div id="fonts">
            <p style="margin-top:6%;">新兑换的会员服务，权益以[会员说明]为准</p>
      <p>月卡：30次减免配送费</p>
   <p>季卡：90次减免配送费</p>
   <p>年卡：360次假面配送费</p>
   <p>*仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一月按31天计算）</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'duihuanVip',
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
input{
    width: 100%;
    padding: 4%;
    margin-top: 3%;
    font-size: 0.15rem;
}
#duihuan{
    width: 80%;
    margin-left: 5%;
    border-radius: 5;
        margin-top: 3%;
    background-color: gainsboro;
    padding: 4%;
    color: white;
    font-weight: bold;
}
#fonts{
    text-align: left;
    margin-left: 13%;
    color: grey;
    font-size: 0.1rem;
}
#fonts p{
margin-top: 2%;
}
#p1{
    text-align: left;
    margin-left: 3%;
    padding: 2%;
}
</style>
