<template>
  <div id="hello">
    <div id="top">
      <img @click="houtui()" src="../../static/img/back.png" alt="">
        <h3 style="text-align: center;font-weight:bold;">密码登陆</h3>
      <img src alt>
    </div>
    <div id="content">
        <input type="text" id="one" v-model="username" placeholder="账号" value="">
      <br>
      <input @click=" yanzheng()" type="text" v-model="password" placeholder="密码">
      <br>
      <input type="text" v-model="codeNumber" placeholder="验证码">
      <img :src="code&&code" alt id="yanzheng">
      <div id="change">
        <p>看不清</p>
        <p @click="getCode ()">换一张</p>
      </div>
      <div id="font">
        <p style="color: red;">温馨提示：未注册过的账号，登陆时将自动注册</p>
        <p style="color: red;">注册过的用户，可凭账号密码登陆</p>
      </div>
      <div id="register" @click="login()">登陆</div>
      <router-link id="reset" :to="'/reset?username =' +this.username">重置密码?</router-link>
    </div>
  </div>
</template>

<script>

export default {
  
  name: "register",
  data() {
    return {
      code: "", //存储验证码图片
      username: "",
      password: "",
      codeNumber: "" //存储验证码输入框的值
    };
  },
  created() {
    //首先获取验证码（进入页面就有验证码）
    this.getCode();
  },
  methods: {
    houtui(){
      this.$router.back();
    },
    //可以在点击之后就切换
    getCode() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true //用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
      }).then(res => {
        console.log("验证码数据");
        console.log(res);
        this.code = res.data.code;
      });
    },
    //登陆，点击之后请求数据，不能写在created里面
    login() {
      const api = "https://elm.cangdu.org/v2/login";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        //请求参数
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.codeNumber
        }
      }).then(res => {
        console.log("login数据");
        console.log(res);
        if (res.data.message) {
          alert(res.data.message); //登陆失败
        } else {
          console.log(res.data);
          this.$store.commit("getUsers", res.data);
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "mine",
            query: res.data,
            params: { pID: res.data.id }
          });
        }
      });
    },
    yanzheng(){
      if($("#one").value == ""){
        alert("请输入账号")
        return
      }
    }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top {
  position: fixed;
  top: 0;
  background-color: rgb(74, 146, 241);
  width: 100%;
  padding: 4% 0;
  color: white;
}
#top img{
  width: 5%;
  position: absolute;
  left: 3%;
  top: 25%;
}
#content {
  width: 100%;
  position: fixed;
  left: 0;
  top: 10%;
}
#content input {
  line-height: 0.4rem;
}
#content input {
  width: 100%;
  font-size: 0.15rem;
  line-height: 0.35rem;
  border: 1px solid gainsboro;
  padding: 2%;
}

#content p:nth-child(1) {
  color: gray;
}
#content p:nth-child(2) {
  width: 100%;
  position: absolute;
  left: 5%;
  color: blue;
  /* border: 1px solid black; */
}
#register {
  width: 95%;
  border-radius: 3% 3% 3% 3% / 15% 15% 15% 15%;
  margin-left: 2.5%;
  margin-top: 10%;
  background-color: rgb(137, 224, 137);
  color: white;
  line-height: 0.45rem;
}
#yanzheng {
  position: absolute;
  right: 15%;
  top: 45%;
}
#change {
  font-size: 0.15rem;
  position: absolute;
  right: 2%;
  top: 45%;
  margin-bottom: 3%;
}
#font {
  margin-top: 5%;
  color: red;
  text-align: left;
  font-size: 0.1rem;
}
#font p:nth-child(1) {
  margin-left: 5%;
  margin-bottom: 3%;
}
#reset {
  position: absolute;
  bottom: -15%;
  right: 8%;
  color: blue;
}
</style>

 