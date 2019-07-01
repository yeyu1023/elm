<template>
    <div style="backgroundColor:white;width:100%;height:5.75rem;">
        <div id="top">
            <img @click="ret()" src="../../../static/img/back.png" alt="">
            <p style=" font-weight: bold;">下载</p>
            <div id="content">
                <img src="../../../static/img/elm.jpg" alt="">
                
            </div>
      
                  <p id="p1">下载饿了么APP</p><div id="btn">下载</div>
            
        </div>
    </div>
</template>
<script>
export default {
    name:'downLoad',
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
#content{
    width: 40%;
    height: 250px;
    /* border: 1px solid red; */
    margin-top: 5%;
    margin-left: 30%;
    
}
#content img{
    width: 100%;
    margin-top: 10%;
    border-radius: 10%;
}
#p1{
    color: black;
    text-align: center;
    margin-top:-13%;
    color: rgb(122, 122, 122);
}
#btn{
    background-color: rgb(89, 192, 89);
    width: 90%;
    margin-left: 5%;
    border-radius: 5% 5% 5% 5% / 20% 20% 20% 20% ;
    font-size: 0.15rem;
}
</style>
