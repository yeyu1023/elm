<template>
  <div>
    <div id="top">
      <router-link to="/addLocation">
        <img src="../../../static/img/back.png" alt>
      </router-link>
      <p>搜索地址</p>
    </div>
    <div id="inp">
      <input v-model="keyword" type="text" placeholder="请输入小区/写字楼/学校等">
      <input @click="getLoc()" type="button" value="确认1">
    </div>
    <div id="advice">为了满足商家的送餐要求，建议你从列表中选择地址</div>
    <div id="location">
      <ul>
        <li id="btn" v-for="(v,i) in arr" :key="i">
          <router-link :to="'/addLocation?name='+v.name+'&&geohash='+v.geohash">
            {{v.name}}
            <br>
            {{v.address}}
          </router-link>
        </li>
      </ul>
    </div>
    <div id="content">
      <p>找不到地址？</p>
      <p>请尝试输入写字楼，学校，或者小区</p>
      <p>详细地址（如：门牌号）可以稍后再写哦！</p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "addLoa",
  data() {
    return {
      geohash: "",
      address: "",
      keyword: "",
      type: "",
      citys: "", //存储搜索的地址
      arr: [],
      groupCities: {},
      names: ""
    };
  },
  created() {
    console.log(this.$store.state.usercitys);
    console.log(this.$store.state.usercitys.id);
    this.getLoc();
  },
  methods: {
      //搜索地址
    getLoc() {
    //  city_id是定位城市的id 关键词是和输入框进行双向绑定
      const URL =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.$store.state.usercitys.city_id +
        "&keyword=" +
        this.keyword +
        "&type=search";
      this.$http({
        url: URL,
        method: "get"
      }).then(res => {
        //res返回请求的数据
        //请求成功后的回调函数
        console.log("成功");
        console.log(res.data); //返回请求到的数据 得到的是符合关键词的所有的数据
        this.arr = res.data;
        console.log(this.$store.state.usercitys);
      });
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
#inp {
  width: 70%;
  margin-left: 2.5%;
  font-size: 0.15rem;
  /* border: 1px solid red; */
  text-align: left;
  background-color: #fff;
  border-radius: 10%;
}
#inp input:nth-child(1) {
  padding: 4%;
}
#inp input:nth-child(2) {
  width: 20%;
  background-color: blue;
  position: absolute;
  right: 5%;
  padding: 3%;
  border-radius: 8%;
}
#advice {
  /* border: 1px solid red; */
  width: 100%;
  margin-top: 3%;
  background-color: linen;
  color: red;
  padding: 1% 0;
}
#content {
  margin-top: 50%;
}
#content p {
  margin-bottom: 4%;
  color: lightgray;
}

#location ul li {
  padding: 3% 0;
  text-align: left;
  margin-left: 3%;
  border-bottom: 1px solid gainsboro;
  color: rgb(161, 159, 159);
  font-size: 0.15rem;
}
</style>