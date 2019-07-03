<template>
    <div>
       <div id="top">
            <router-link to="/zhanghu"><img src="../../../static/img/back.png" alt=""></router-link>
            <p>修改用户名</p>
            
        </div>
        <input v-model="$store.state.userMsg.username" type="text" placeholder="请输入用户名">
        <p style=" text-align: left;margin-left:1%;padding:3%;font-size: 0.1rem; ">用户名只能修改一次（5-24字符之间）</p>
        <router-link to="/zhanghu">
        <div id="change">确认修改</div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"changeName",
    data(){
        return {
            newName:''
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
    width: 90%;
    font-size: 0.16rem;
    border: 1px solid gainsboro;
    background-color: lavender;
    padding: 3% 0;
    margin-top: 3%;
}
#change{
    margin-top: 3%;
    width: 100%;
    background-color: rgb(124, 207, 235);
    padding: 5% 0;
    color: lightblue;
}
</style>
