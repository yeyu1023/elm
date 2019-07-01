<template  style="backgroundColor:white;">
    <div>
        <div id="top">
            <img @click="ret()" src="../../../static/img/back.png" alt="">
            <p style=" font-weight: bold;">购买记录</p>
            
        </div>
      <img id="img1" src="../../../static/img/下载.png" alt="">  
      <p style="color:grey;">没有购买记录</p>
    </div>
</template>
<script>
export default {
    name:'shopRecord',
    methods: {
        ret(){
            this.$router.back();
        }
    },
}
</script>
<style scoped>
#img1{
    width: 50%;
    margin-top: 30%;
    margin-bottom: 5%; 
}
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
</style>
