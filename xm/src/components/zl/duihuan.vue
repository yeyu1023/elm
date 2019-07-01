<template>
    <div>
        <div id="top">
           <router-link to="/youhui">
            <img src="../../../static/img/back.png" alt="">
           </router-link>
            <p style=" font-weight: bold;">兑换红包</p>
            </div>
       
        <input id="names" v-model="names" type="text" placeholder="请输入兑换码"><br>
        <input id="inp" v-model="codeNumber" type="text" placeholder="验证码">
        <div id="right"><img :src="code&&code" alt="">
    <p>看不清</p>
        <p @click="getCode ()" style="color:blue;">换一张</p><br></div>
        <div id="btn" @click="login()">兑换</div>
       <div id="tankuang" v-if="show" class="animated heartBeat 2s"> 
           <img src="../../../static/img/警告.png" alt="">
           <p>无效的兑换码</p>
           <div id="bottom" @click="sure2()">确认</div>
       </div>
            
    </div>
</template>
<script>
import { Loading } from 'element-ui';
let loadingInstance
export default {
    name:"duihuan",
    data() {
        return {
            code:'',//存储验证码图片
            names:'',//兑换码
            show:false,//设置弹框的显示和隐藏
            codeNumber:''//存储验证码输入框的值
        }
    },
    created () {
       //首先获取验证码（进入页面就有验证码） 
//  let loadingInstance=Loading.service(options);
       this.getCode();
    },
    methods: {
       sure2(){
           this.show = false
       },
        //可以在点击之后就切换
        getCode(){
         const api = "https://elm.cangdu.org/v1/captchas";
         this.$http({
           url:api,
           method:'post',
           withCredentials:true,//用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
           data:{
              user_id :this.$store.state.userMsg.user_id,
             exchange_code:this.names,
             captcha_code : this.codeNumber
           }
         }).then(res=>{
             console.log("验证码数据");
             console.log(res);
             this.code = res.data.code
            //    loadingInstance.close();
         })
        },
        //登陆，点击之后请求数据，不能写在created里面
        login(){
            this.show = true
          const api = "https://elm.cangdu.org/v1/users/:user_id/hongbao/exchange"
          this.$http({
            url:api,
           method:'post',
           withCredentials:true,
           //请求参数
           data:{
             username :this.username,
             password :this.password,
             captcha_code : this.codeNumber
           }
          }).then(res=>{
              console.log("login数据");
              console.log(res);
              if (res.data.message) {
                    alert(res.data.message);//登陆失败
                } else {
                    //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
                    this.$router.push({
                        name:"person",
                        query:res.data,
                        params:{pID:res.data.id}
                    })
                }

          })
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
#names{
    width: 85%;
    padding: 3%;
    margin-left: 3%;
    margin-top: 5%;
}
#divimg{
    width: 0.8rem;
    position: absolute;
    top: 0.08rem;
    left: 1rem;
}
#divspan{
    display: inline-block;
    width: 2.5rem;
    position: absolute;
    top: 1rem;
    left: 0.69rem;
    font-size: 0.16rem;
}
#divspan1{
    display: inline-block;
    background-color: rgb(79, 217, 100);
    color: white;
    font-size: 0.18rem;
    line-height: 0.45rem;
    width: 2.8rem;
    position: absolute;
    top: 1.5rem;
    height: 0.45rem;
    text-align: center;
    border-bottom-right-radius: 0.05rem;
    border-bottom-left-radius: 0.05rem;
}
#inp{
    width: 40%;
    margin-left: 5%;
    padding: 3%;
    margin-top: 3%;
    float: left;
}
#right{
    /* border: 1px solid red; */
    width: 40%;
    float: right;
    margin-right: 3%;
    line-height: 0.13rem;
    margin-top: 3%;
    background-color: #fff;
}
#right img{
    float: left;
}
#btn{
    width: 90%;
    margin-left: 5%;
    position: absolute;
    top: 2rem;
    padding: 3% 0;
    background-color: rgb(113, 245, 113);
    color: white;
    border-radius: 5%;
}
#tankuang{
    width: 80%;
    margin-left: 10%;
    border: 1px solid gainsboro;
    margin-top: 35%;
    border-radius: 5%;
    overflow: hidden;
}
#tankuang img{
    width: 30%;
}
#tankuang p{
    margin-top: 0.15rem;
}
#bottom{
    width: 100%;
    background-color: rgb(94, 245, 94);
    padding: 4% 0;
    color: white;
    margin-top: 0.15rem;
}
</style>
