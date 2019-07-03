<template>
  <div class="hello">
      <div class="top">
       <p class="p1"><router-link to="/city">
       <img id="return" src="../../static/img/back.png" alt="">
       </router-link></p>
    <div class="a1">
      <p>我的</p>
      <p></p>
    </div>
    </div>
    <div id="content">
        <div id="container">
          
        <div id="fonts">
          <div id="urlImg" @click="sure2()">
            <!-- 原始的头像 -->
            <!-- <img v-if="show" style="width:100%;" :src="'https://elm.cangdu.org/img/'+img2" alt=""> -->
             <img :src="img1" alt=""> 
          </div>
           
          <p @click="getFont()" style="font-weight: bold;font-size: 0.2rem;">{{user||username}}</p>
           <img src="../../static/img//手机 (2).png" alt="" id="phone">
        <p id="iph">暂无绑定的手机号</p>
        </div>
          
          <img @click="getFont()" id="go"  src="../assets/iconfontjiantou2.png" alt="">
  
        
        </div>
    </div>
    <div id="my_money">
       <ul id="ul1">
         <li>
           <router-link to="/mineMoney">
             <p style="color: orange;
  font-size: 0.25rem;  font-weight: bold;">{{$store.state.balance}}<span style="color: gray;
  font-size: 0.1rem;">元</span></p>
           <p style="color: gray;
  font-size: 0.1rem;margin-top: 5%;">我的余额</p>
           </router-link>
         </li>
         <li>
          <router-link to="/youhui">
       
           
           <p @click="getFont()" style="color: red;
  font-size: 0.25rem;  font-weight: bold;">{{share||0}}<span style="color: gray;
  font-size: 0.1rem;">个</span></p>
       
           <p style="color: gray;
  font-size: 0.1rem;margin-top: 5%;">我的优惠</p>
          </router-link>
         </li>
        <li>
          <router-link to="/jifen">
           <p @click="getFont()" style="color: green;
  font-size: 0.25rem;  font-weight: bold;">{{this.$store.state.userMsg.point||0}}<span style="color: gray;
  font-size: 0.1rem;">分</span></p>
           <p style="color: gray;
  font-size: 0.1rem;margin-top: 5%;">我的积分</p>
          </router-link>
         </li>
       </ul>
    </div>
    <div id="main_top" style="margin-top: 2%;">
      <ul id="ul2">
       <router-link to="/dingdan"> <li>
          <img src="../../static/img/订单.png" alt="">
        <span>我的订单</span>
        <img src="../../static/img/iconfontjiantou2.png" alt="">
        </li>
        </router-link>
       <router-link to="/jifenShop">
        <li>
          <img src="../../static/img/积分商城.png" alt="">
          <span>积分商城</span>
          <img src="../../static/img/iconfontjiantou2.png" alt="">
        </li></router-link>
        <router-link to="/vip"><li>
         <img src="../../static/img/会员.png" alt="">
          <span>饿了么会员卡</span>
          <img src="../../static/img/iconfontjiantou2.png" alt="">
        </li></router-link>
      </ul>
    </div>
     
    <div id="main_bot">
      <ul id="ul3">
        <router-link to="/serviceCentre">
        <li>
          <img src="../../static/img/服务中心 (1).png" alt="">
        <span>服务中心</span>
        <img src="../../static/img/iconfontjiantou2.png" alt="">
       </li>
        </router-link>
        <router-link to="/downLoad">
        <li>
          <img src="../../static/img/elm.jpg" alt="">
          <span>下载饿了么APP</span>
          <img src="../../static/img/iconfontjiantou2.png" alt="">
        </li>
        </router-link>
      </ul>
    </div>
    <div id="nav">
    <ul>
      <li>
        <router-link to="/waimai">
        <img src="../../static/img/homeF.png" alt=""><P style="font-size:0.1rem;color:grey;">外卖</P>
        </router-link>
      </li>
      <li>
       <router-link to="/search">
        <img src="../../static/img/zhinanzhen.png" alt=""><P style="font-size:0.1rem;color:grey;">搜索</P></router-link>
      </li>
      <li>
        <router-link to="/dingdan"><img src="../../static/img/dingdan1.png" alt=""><P style="font-size:0.1rem;color:grey;">订单</P></router-link>
      </li>
      <li>
        <router-link to="/mine"><img src="../../static/img/meT.png" alt=""><P style="font-size:0.1rem;color:grey;">我的</P></router-link>
        </li> 
    </ul>
  </div>
  </div>
</template>
<script>
//使用辅助函数
import {mapState} from 'vuex'
export default {
  name: 'mine',
  data(){
    return {
      imgSrc:"",//存储请求出来的头像
       user:'',
      username:'登陆/注册',
       img1:'',
      //  show:true,
       img2:'',
       yes:true,
       share:'',
       down:true,
       downIt:'' 
    }
  },
  created(){
     this.user = this.$store.state.userMsg.username
     this.share = this.$store.state.userMsg.gift_amount
     console.log(this.share)
    this.getImg();
    this.img1 = this.$store.state.imgavatar
  //  this.getDatas();
    console.log(this.username)
  },
  methods: {
    //获取用户信息
   getImg(){
         const api = "https://elm.cangdu.org/v1/user";
         this.$http({
           url:api,
           method:'get',
           withCredentials:true//用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
         }).then(res=>{
          //  this.$store.commit("getUsers",res.data);
             console.log(res.data.avatar);
             this.img2 = res.data.avatar
             console.log(this.img2)
         })
        },
        //获取头像
        handleAvatarSuccess(res, file) {
      console.log(file, res)
      //立刻显示
      this.imageUrl = URL.createObjectURL(file.raw);


      var file = file.raw;
      var formdata1 = new FormData(); // 创建form对象
      formdata1.append("file", file, file.name); // 通过append向form对象添加数据,可以通过append继续添加数据
      //或formdata1.append('img',file);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      }; //添加请求头
      this.axios.post(`https://elm.cangdu.org/eus/v1/users/${this.$store.state.userMsg.user_id}/avatar`, formdata1, config).then(response => {
        //这里的/xapi/upimage为接口
        console.log(response.data);
      });
    },
   getUser(){
     if(username == this.$store.state.userMsg.username){
       this.$router.push({path:'zhanghu'})
      
     }else{
       this.$router.push({path:'register'})
     }
   },
  //  sure(){
  //    this.show = !show
  //  },
   sure2(){
           this.yes = !this.yes
   },
   getFont(){
     if(this.user){
        // this.show = false
        this.$router.push({
          name: "zhanghu"  
        })
     }else{
        this.$router.push({
          name: "register"
        })
     } 
  },
  computed:{
...mapState({
balance:'balance',
discounts:'discounts',
integral:'integral'
})
},
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
/* border: 1px solid black; */
position: fixed;
width: 100%;
height: 0.53rem;
line-height: 0.52rem;
background-color: rgb(49, 144, 232);
font-size: 0.2rem;
color: white;
top: 0;
}
.p1 {
position: absolute;
left: 0.1rem;
top: 0;
}
.a1 {
position: absolute;
right: 45%;
top: 0;
}
#return{
  width: 15%;
  color: white;
  margin-left: -80%;
}
#container{
  width: 90%;
 padding: 6%;
}
#content{
  width: 100%;
 background-color: rgb(49, 144, 232);
  overflow: hidden;
  padding: 3% 0;
  position: relative;
  display: flex;
  margin-top: -2%;
}
#go{
  width: 8%;
  position: absolute;
  right: 4%;
  top: 35%;
}
#mine{
  width: 15%;
  float: left; 
}
#fonts{
 position: absolute;
 top: 0%;
 left: 25%;
  color: white;
  padding: 3% 0;
  }
#fonts p:nth-child(3){
  width: 100%;
  margin-left: 30%;
 /* border: 1px solid red; */
}
#col{
  width: 100%;
  background-color: blue;
  height: 100%;
}
#my_money{
  background-color: #fff;
}
#ul1 li{
  border: 1px solid ghostwhite;
  padding: 5% 0;
  width: 32.4%;
  list-style-type: none;
  float: left;
  background-color: #fff;
}
#main_top,#main_bot{
  width: 100%;
  margin-top: 2%;
  /* border: 1px solid red; */
  overflow: hidden;
  background-color: #fff;
}
#ul2 li,#ul3 li{
  border: 1px solid gainsboro;
  width: 100%;
 float: left;
 list-style-type: none;
 padding: 3% 0;
 text-align: left;
}
#ul2 li img,#ul3 li img{
  width: 5%;
  margin-left: 4%;
}
#main_bot{
  margin-top: 3%;
}
#main_top img:nth-child(3),#main_bot img:nth-child(3){
  /* width: 8%; */
  float: right;
  margin-right: 3%;
}
  #phone{
    color: white;
    position: absolute;
    left: -20%;
    top:52%;
    width: 18%;
    color: white;
  }
  #urlImg{
   width:40%;
    height: 50px;
    position: absolute;
    left: -60%;
    top: 20%;
    z-index: 2;
    /* border: 1px solid red; */
    border-radius: 50%;
    overflow: hidden;
  }
   #urlImg img{
   width: 100%;
   height:100%;
  }
  #iph{
    margin-top: 5%;
  }
  #nav{
  /* border: 1px solid red; */
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid gainsboro;
  background-color: #fff;
}
#nav ul li{
  float: left;
  width: 25%;
  padding: 1% 0;
  /* border: 1px solid red; */

}
#nav ul li img{
  width: 25%;
}
</style>
