<template>
  <div>
    <div id="top">
      <router-link to="/locationChange">
        <img src="../../../static/img/back.png" alt>
      </router-link>
      <p>新增地址</p>
    </div>
    <div id="int">
      <input type="text" v-model="user" placeholder="请填写你的姓名">
      <br>
      <router-link to="/addLoa">
        <input v-model="address" type="text" placeholder="小区/写字楼/学校等">
        <br>
      </router-link>
      <input type="text" v-model="ids" placeholder="请填写详细的送餐地址">
      <br>
      <input type="number" v-model="iphone" placeholder="请填写能够联系到你的手机号码">
      <br>
      <input type="number" v-model="dianhua" placeholder="备用联系电话（选填）">
      <br>
      <div id="add" @click="loca()">新增地址</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "addLocation",
  data() {
    return {
      location: "",
      user: "",
      address: "",
      ids: "",
      iphone: "",
      dianhua: "",
      newgeohash: "",
      tag: "zhuyilong",
      sex: 1,
      poi_type: 0,
      tag_type: 3,
      loginMsg: ""
    };
  },
  created() {
    this.address = this.$route.query.name;//从搜素页面传递过来的地址信息
    this.newgeohash = this.$route.query.geohash;
    // this.user = this.$store.state.userMsg.user_id
    this.pID = this.$route.pID;
  },
  methods: {
    //增加收获地址
    loca() {
      const URL =
        "https://elm.cangdu.org/v1/users/" +
        this.$store.state.userMsg.user_id +
        "/addresses";
      this.$http({
        url: URL,
        method: "post",
        data: {
          user_id: this.user,
          address: this.address,
          address_detail: this.ids,
          geohash: this.newgeohash,
          name: this.user,
          phone: this.iphone,
          phone_bk: this.dianhua,
          tag: this.tag,
          sex: this.sex,
          poi_type: this.poi_type,
          tag_type: this.tag_type
        }
      }).then(res => {
        console.log("成功");
        console.log(res.data); //返回请求到的数据
        this.locas = res.data;
        if (res.data.message) {
            //打印的是错误的信息
          this.loginMsg = res.data.message;
          console.log(this.loginMsg);
        } else {
          console.log(res.data);
          this.$router.push({ name: "locationChange" });
        }
      });
    },
    sendcode() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      //var url="/nptOfficialWebsite/apply/sendSms?mobile="+this.ruleForm.phone;
      if (this.iphone == "") {
        alert(this.loginMsg);
      } else if (!reg.test(this.iphone)) {
        alert("手机格式不正确");
      }
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
input {
  width: 95%;
  margin-left: 1.5%;
  font-size: 0.15rem;
  padding: 3% 0;
  margin: 1.5% 0;
  border: 1px solid lightgray;
  background-color: ghostwhite;
}
#int {
  background-color: #fff;
}

#add {
  width: 95%;
  background-color: lightgreen;
  padding: 3% 0;
  margin-left: 2%;
  color: gainsboro;
}
</style>
