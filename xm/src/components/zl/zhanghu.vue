<template>
  <div>
    <div id="top">
      <router-link to="/mine">
        <img src="../../../static/img/back.png" alt>
      </router-link>
      <p>账户信息</p>
    </div>
    <div id="touxiang">
      <ul id="ul1">
        <li>
          <div id="mineImg">
            <el-upload
              class="avatar-uploader"
              action="https://elm.cangdu.org/v1/addimg/type=avatar"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload" >
              
              <img v-if="imageUrl" :src="imageUrl" id="img1" style="width:15%;height:8%;">
              <img v-else :src="imgs" id="img2" style="width:15%;height:8%;">
            </el-upload>
          </div>
          <p>头像</p>
          <img src="../../../static/img/iconfontjiantou2.png" alt>
        </li>
        <li>
          <p>用户名</p>

          <p id="mineName">{{$store.state.userMsg.username}}</p>

          <router-link to="/changeName">
            <img src="../../../static/img/iconfontjiantou2.png" alt>
          </router-link>
        </li>
        <li>
          <p>收货地址</p>
          <router-link to="/locationChange">
            <img src="../../../static/img/iconfontjiantou2.png" alt>
          </router-link>
        </li>
      </ul>
    </div>
    <p style="text-align: left;margin-left: 3%;padding: 2% 0; ">账号绑定</p>
    <div id="pht">
      <p id="phone" class="el-icon-mobile"></p>
      <p style="margin-left: 10%;">手机</p>
      <img src="../../../static/img/iconfontjiantou2.png"  @click="sure2()" alt>
    </div>
    <p style="text-align: left;margin-left: 3%;padding: 2% 0; ">安全设置</p>
    <div id="pht">
      <p style="margin-left: 3%;">登陆密码</p>
      <p id="change">修改</p>
      <router-link to="/reset">
        <img src="../../../static/img/iconfontjiantou2.png" alt>
      </router-link>
    </div>
    <div id="return" @click="sure3()" v-if="down">退出登录</div>
    <div class="animated heartBeat 2s" v-if="show" id="div1">
      <img id="divimg" src="../../../static/img/警告.png" alt><br>
      <span id="divspan">请在手机APP中设置</span><br>
      <span @click="sure()" id="divspan1" >确认</span>
    </div>
   
      <div class="animated heartBeat 2s" v-if="yes" id="div2">
       
      <img id="divimg" src="../../../static/img/警告.png" alt><br>
      <span id="divspan">是否退出登录</span><br>
      <span @click="sure4()" id="divspan3">再等等</span>
      <span @click="over()" id="divspan2">退出登录</span>
    </div>
    <div id="big" v-if="yes"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { MessageBox } from "mint-ui";
export default {
  name: "zhanghu",
  data() {
    return {
      a: "",
      datas: {},
      imageUrl: "", //存储请求过来的头像
      username: "",
      show:false,
      imgs:"",
      yes:false,
      no:true,
      down:true
    };
  },
  created() {
    this.imgs = this.$store.state.imgavatar;
    this.username = this.$route;
    console.log(this.$route);
  },
  methods: {
    sure2() {
      this.show = true;
    },
    sure() {
      this.show = false;
    },
     sure3() {
      this.yes = true;
    },
    sure4() {
      this.yes = false;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(this.imageUrl);
      this.$store.commit("getavatar", this.imageUrl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    //退出登陆设置
    // 第一种方式：
    // returns() {
    //   this.$confirm("", {
    //     message: "您确定退出登陆吗？",
    //     type: "warning",
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消"
    //   })
    //     .then(action => {
    //       if (action == "confirm") {
    //         //确认的回调
    //         this.$router.push({ path: "/mine" });
    //         this.$store.state.userMsg.username = "";
    //         this.imgs = "";

    //       }
    //     })
    //     .catch(err => {
    //       if (err == "cancel") {
    //         //取消的回调
    //         console.log(2);
    //         this.$router.push({ path: "/zhanghu" });
    //       }
    //     });
    // }
    //第二种方式：
    over(){
     this.$router.push({ path: "/mine" });
     this.$store.state.userMsg.username = "";
     this.$store.state.imgavatar = ''
     this.$store.state.userMsg.gift_amount="0"
      this.$store.state.userMsg.point="0"
      // this.$store.state.gethongbao = ''
    }
  }
};
</script>
<style scoped>
#top {
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
#top img {
  width: 8%;
  padding: 3% 0;
  float: left;
  margin-left: 2%;
}

#img1,#img2 {
  /* border: 1px solid red; */
  width: 100%;
  height: 0.3rem;
  position: absolute;
  left: 75%;
  top: 20%;
  border-radius: 50%;
}
#touxiang {
  background-color: white;
  width: 100%;
  overflow: hidden;
  margin-top: 12%;
}
#big{
  width: 100%;
  height: 92vh;
  background-color: rgb(211, 207, 207);
  position: absolute;
  left: 0;
  top: 8%;
  opacity: 0.5;
}
#div1,#div2 {
  width: 80%;
  margin-left: 10%;
  border: 1px solid gainsboro;
  position: absolute;
  top:20%;
  background-color: #fff;
  border-radius: 5%;
  overflow: hidden;
}
#div2{
  width: 95%;
  margin-left: 2.5%;
  background-color: #fff;
  z-index: 10;
}
#ul1 li {
  /* padding: 4% 0 0 0; */
  background-color: #fff;
  width: 100%;
  float: left;
  text-align: left;
  border: 1px solid gainsboro;
  padding: 4% 0;
}
#divimg{
  width: 30%;
  margin-top: 6%;
}
#divspan{
 line-height: 0.5rem;
 color: grey;
  margin-left: 5%;
  font-size: 0.25rem;
  font-weight: bold;
  margin-top: 10%;
}
#divspan1{
  display: inline-block;
 margin-top: 5%;
  width: 100%;
  background-color: rgb(165, 236, 117);
  padding: 5% 0;
}
#divspan2,#divspan3{
  /* float: left; */
  display: inline-block;
 margin-top: 15%;
  width: 20%;
  background-color: rgb(165, 236, 117);
  padding: 3% 0;
  border-radius: 10% 10% 10% 10%/20% 20% 20% 20%;
 
}
#divspan2{
  background-color: rgb(252, 88, 88);
  border: 1px solid gainsboro;
 margin-bottom: 10%;
}
#divspan3{
  background-color: rgb(202, 198, 198);
}
#ul1 li p {
  margin-left: 3%;
}
#ul1 li img {
  float: right;
  margin-top: -3%;
  width: 5%;
  /* border: 1px solid red; */
}
#pht {
  /* border: 1px solid red; */
  text-align: left;
  padding: 4% 0;
  background-color: #fff;
  position: relative;
}
#pht img {
  width: 5%;
  position: absolute;
  right: 0;
  top: 30%;
}
#phone {
  width: 5%;
  color: white;
  background-color: lightseagreen;
  float: left;
  margin-left: 3%;
  padding: 0.5%;
}
#change {
  position: absolute;
  right: 8%;
  top: 30%;
}
#return {
  margin-top: 8%;
  width: 95%;
  margin-left: 2.5%;
  background-color: rgb(221, 38, 13);
  padding: 3% 0;
  border-radius: 3% 3% 3% 3% / 15% 15% 15% 15%;
  color: white;
}

#mineName,
#mineName2 {
  position: absolute;
  right: 10%;
  top: 23%;
  font-size: 0.2rem;
}
</style>
