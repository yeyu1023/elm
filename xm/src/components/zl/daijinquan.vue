<template>
    <div>
        <div id="top">
            <router-link to="/mine">
            <img  src="../../../static/img/back.png" alt=""></router-link>
            <p>我的优惠</p>
            
        </div>
        <p id="instro"><router-link to="/daijinquans">?商家代金券说明</router-link></p>
        <div id="content">
        <img id="img1" src="../../../static/img/下载 (8).png" alt="">
        <h2>无法使用代金券</h2>
        <p>非客户端，或者客户端用户版本过低</p>
        <router-link to="/downLoad"><input id="int" type="button" value="下载或升级客户端"></router-link></div>
    </div>
</template>
<script>
export default {
    name:'daijinquan'
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
#instro{
    float: right;
    position: fixed;
    right: 0;
    top: 15%;
    margin-right: 3%;
    margin-top: 3%;
}
#img1{
    width: 40%;
    margin-top: 0%;
    margin-bottom: 5%;
}
#content{
    width: 90%;
   /* border: 1px solid red; */
   margin-left: 5%;
   margin-top: 60%;
   line-height: 0.25rem;
}
#int{
padding: 3%;
background-color:lightgreen;
color: white;
border-radius: 3%;
}
</style>



