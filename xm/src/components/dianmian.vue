﻿<template>
  <div class="hello">
    <!-- 头部 -->
    <router-link :to="'/shopDetail?id='+datas.id">
      <div id="top">
        <img
          style="width:0.6rem;vertical-align:top;float:left"
          :src="'https://elm.cangdu.org/img/'+shangpinDetail.image_path"
          alt
        />
        <img
          style="width:0.3rem;position:fixed;left:0.01rem;top:0.01rem;"
          @click="houtui()"
          id="top_img1"
          src="../../static/img/back.png"
          alt
        />
        <span style="color:white;margin-left:2%">{{shangpinDetail.name}}</span>
        <br />
        <div
          style="color:white;font-size:0.1rem;float:left;width:70%;margin-left:2%;line-height:0.2rem;;margin-top:2%;"
        >
          <span>商家配送 / 分钟送达 / {{shangpinDetail.piecewise_agent_fee.tips}}</span>
          <br />公告：
          <span>{{shangpinDetail.promotion_info}}</span>
        </div>
        <img style="width:5%" src="../../static/img/you.png" alt />
      </div>
    </router-link>
    <!-- 商品 评价   分类 -->
    <div id="top2" style=";width:100%;height:0.3rem;font-size:0.2rem;">
      <span
        id="shangpinA"
        @click="shangpinB()"
        style="color:blue;width:48%;text-align:center;display:inline-block;"
      >商品</span>
      <span
        id="pingjiaA"
        @click="pingjiaB()"
        style="width:48%;text-align:center;display:inline-block;"
      >评价</span>
      <!-- <br><span style="border-bottom:2px solid blue;" v-if="leftB"></span>
      <span style="border-bottom:2px solid blue;" v-if="rightB"></span>-->
    </div>
    <!-- 商品 -->
    <div id="content" v-if="shangpin">
      <div id="left">
        <div>
          <!-- 左侧的食品栏目 -->
          <div
            :class="{left_item_T:yangshi==i}"
            @click="changeYS(i)"
            :ref="'ys'+i"
            class="left_item"
            :key="i"
            v-for="(v,i) in shipin"
          >
            <a style="color:black;" :href="'#B'+i">
              <p class="p1">{{v.name}}</p>
            </a>
          </div>
        </div>
      </div>
      <!-- 右侧食品列表 -->
      <div id="right">
        <div>
          <div :id="'B'+i" :key="i" v-for="(v,i) in shipin">
            <div style="height:0.5rem;line-height:0.5rem;font-size:0.1rem;">
              <span style="font-size:0.2rem;font-weight:bold;">{{v.name}}</span>
              {{v.description}}
            </div>
            <div class="right_content" :key="index" v-for="(value,index) in v.foods">
              <!-- <router-link to="/dianmian2"></router-link> -->
              <img
                style="width:0.5rem;vertical-align:top;"
                :src="'https://elm.cangdu.org/img/'+value.image_path"
                alt
              />
              <div style="display:inline-block;width:70%;">
                <span style="font-size:0.17rem;font-weight:bold;">{{value.name}}</span>
                <span
                  style="display:inline-block;float:right;color:red;font-size:0.1rem;border:1px solid red;border-radius:25% 25% 25% 25% / 50% 50% 50% 50%;padding:1px;"
                  v-if="value.attributes[1]"
                >{{value.attributes[1].icon_name}}</span>
                <br />
                <span
                  style="margin-top:4px;display:inline-block;font-size:0.1rem;color:rgb(125,125,125);"
                >{{value.description}}</span>
                <br />
                <span
                  style="margin-top:4px;display:inline-block;"
                >月售{{value.month_sales}}份 好评率{{value.satisfy_rate}}%</span>
                <span
                  style="margin-top:4px;display:inline-block;color:red;font-weight:bold;"
                >￥{{value.specfoods[0].price}}</span>
                <!-- 添加删减购物车内容  传菜品价钱 -->
                <div
                  style="float:right;display:inline-block;border-radius:50%;height:0.2rem;text-align:center;color:white;font-size:0.2rem;"
                >
                  <div
                    v-if="value.specfoods[0].original_price"
                    @click="reduceFood(value.specfoods[0].price,i,index)"
                    style="display:inline-block;border-radius:50%;width:0.2rem;height:0.2rem;text-align:center;color:white;background-color:blue;font-size:0.2rem;"
                  >-</div>
                  <span style="color:black;" v-if="value.__v">{{value.__v}}</span>
                  <div
                    @click="addFood(value.specfoods[0].price,i,index)"
                    style="display:inline-block;border-radius:50%;width:0.2rem;height:0.2rem;text-align:center;color:white;background-color:blue;font-size:0.2rem;"
                  >+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <!-- 购物车 -->
      <div v-if="shopshow" id="shop">
        <div class="shop_top">
          <span>购物车</span>
          <span>清空</span>
        </div>
        <!-- 所选食品列表 -->
        <div class="list">
          <span>{{foodCounts.name}}</span>
          <span>{{foodCounts.count}}</span>
        </div>
        <!-- <van-action-sheet v-model="show" title="标题">
          <p>内容</p>
        </van-action-sheet>-->
      </div>
      <div id="bottom" @click="shop()">
        <div id="bottom_img">
          <img src="../../static/img/gouwuche.png" alt />
          <span>{{foodCount}}</span>
        </div>
        <!-- 价钱 -->
        <div id="price">
          <p id="price_A">￥{{price}}.00</p>
          <span id="price_B">{{shangpinDetail.piecewise_agent_fee.tips}}</span>
        </div>
        <!-- 起送 结算  传值 价钱，商品数量...  -->
        <!-- <router-link> -->
        <!-- 还差￥{{shangpu[datas.detail].float_minimum_order_amount}}起送 -->
        <div ref="js" id="js">去结算</div>
        <!-- </router-link> -->
      </div>
    </div>
    <!-- 评价 -->
    <div id="pingjia" v-if="pingjia">
      <div id="pingjia_top">
        <div id="pingjia_top_left">
          <p id="pingjia_top_left_p1">4.7</p>
          <span style="font-size:0.15rem;">综合评价</span>
          <br />
          <span style="font-size:0.1rem;">高于周边商家76.9%</span>
        </div>
        <div id="pingjia_top_right" style="margin-left:1rem;">
          <span
            style="font-size:0.13rem;line-height:0.2rem;display:inline-block;margin-top:0.1rem;"
          >服务态度</span>
          <van-rate
            style="display:inline-block;line-height:0.22rem;"
            v-model="value1"
            size="10px"
            allow-half="true"
          />
          <span style="color:orange;">{{value1}}</span>
          <br />
          <span style="font-size:0.13rem;line-height:0.2rem;">菜品评价</span>
          <van-rate
            style="display:inline-block;line-height:0.22rem;"
            v-model="value2"
            size="10px"
            allow-half="true"
          />
          <span style="color:orange;">{{value1}}</span>
          <br />
          <span style="display:inline-block;line-height:0.22rem;">送达时间</span>
          <span style="font-size:0.05rem;">分钟</span>
        </div>
      </div>
      <!-- 全部，满意，不满意，有图，味道好。。。 -->
      <div id="pjContent">
        <div id="pjC">
          <span :style="{backgroundColor:changeColorBool[0]}" @click="changeColor(0)">全部(473)</span>
          <span :style="{backgroundColor:changeColorBool[1]}" @click="changeColor(1)">满意(453)</span>
          <span >不满意(20)</span>
          <span :style="{backgroundColor:changeColorBool[2]}" @click="changeColor(2)">有图(2)</span>
          <span :style="{backgroundColor:changeColorBool[3]}" @click="changeColor(3)">味道好(47)</span>
          <span :style="{backgroundColor:changeColorBool[4]}" @click="changeColor(4)">(送货快)</span>
          <span :style="{backgroundColor:changeColorBool[5]}" @click="changeColor(5)">分量足(18)</span>
          <span :style="{backgroundColor:changeColorBool[6]}" @click="changeColor(6)">包装精美(15)</span>
          <span  :style="{backgroundColor:changeColorBool[7]}" @click="changeColor(7)">干净卫生(15)</span>
          <span  :style="{backgroundColor:changeColorBool[8]}" @click="changeColor(8)">食材新鲜(1)</span>
          <span  :style="{backgroundColor:changeColorBool[9]}" @click="changeColor(9)">服务不错(11)</span>
        </div>
        <!-- 评价列表 -->
        <div id="pjList">
          <div class="pjJiekouA" :key="i" v-for="(v,i) in pjJiekou">
            <div style="overflow:hidden;width:0.6rem;border-radius:50%;display:inline-block;">
              <img style="width:0.6rem;vertical-align:top" src="../../static/img/pj.jpg" alt />
            </div>
            <div class="pjList_right">
              <span>{{v.username}}</span>
              <span style="float:right;font-size:0.1rem;">{{v.rated_at}}</span><br />
              <van-rate
                style="display:inline-block;line-height:0.22rem;"
                v-model="pingfen"
                size="10px"
                allow-half="true"
              />
              <br />
              <br />
              <!-- 已购餐品名称 -->
              <span :key="index" v-for="(value,index) in v.item_ratings" style="width:0.5rem;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                {{value.food_name}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
// 在需要使用锚点跳转的页面引入
// import { goAnchor, GetQueryString } from './zyb/js/anchor';

import { Loading } from "element-ui";
let loadingInstance;
<script>
export default {
  name: "dianmian",
  data() {
    return {
      datas: {}, //上个页面点击的店面下标，坐标
      pjJiekou: "",
      shangpu: [],
      shipin: "",
      shangpinDetail: "", //获取到的详细商品
      shangpin: true,
      pingjia: false,
      value1: 4.7,
      value2: 4.8,
      pingfen: 5,
      foodCount: 0, //食品数量
      foodCounts: {}, //每种食品的数量
      price: 0, //食品总价
      prices: [], //
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      shopshow: false, //购物车显示与否
      yangshi: -1, //改变商品栏目的样式
      show: false,
      changeColorBool:['rgb(235, 245, 255)','rgb(235, 245, 255)','rgb(235, 245, 255)','rgb(235, 245, 255)','rgb(235, 245, 255)','rgb(235, 245, 255)','rgb(235, 245, 255)','rgb(235, 245, 255)','rgb(235, 245, 255)','rgb(235, 245, 255)'],
    };
  },
  methods: {
    //改变评价类型背景色
    changeColor(a){
      for(let i=0;i<10;i++){
        this.$set(this.changeColorBool,i,'rgb(235, 245, 255)');
      }
      this.$set(this.changeColorBool,a,'rgb(49, 144, 232)');
    },
    // goAnchor, //方法
    // GetQueryString, //方法
    // 点击商品栏目改变样式
    changeYS(i) {
      this.yangshi = i;
    },
    houtui() {
      this.$router.back();
    },
    shop() {
      if (this.foodCount != 0) {
        this.shopshow = !this.shopshow;
      }
      console.log(this.shopshow);
    },
    // 获取店面信息
    jiazaiOKtop0() {
      const api0 =
        "https://elm.cangdu.org/shopping/restaurant/" + this.datas.id;
      this.$http({
        url: api0,
        method: "get",
        withCredentials: true //用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
      }).then(res => {
        console.log(api0);
        console.log(res.data);
        this.shangpinDetail = res.data;
      });
    },
    // 获取食品列表
    jiazaiOKtop1() {
      const api1 =
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
        this.datas.id;
      this.$http({
        url: api1,
        method: "get",
        withCredentials: true //用于表示用户代理是否应该在跨域请求的情况下，从其他域发送cookies---不使用缓存数据（不加这行代码，验证码可能会使用上次的）
      }).then(res => {
        console.log(this.datas.id);
        console.log(api1);
        console.log(res.data);
        this.shipin = res.data;
      });
    },
    // 获取评价
    getPingjia() {
      const api3 =
        "https://elm.cangdu.org/ugc/v2/restaurants/" +
        this.datas.id +
        "/ratings?offset=0&limit=10";
      this.$http({
        url: api3,
        method: "get",
        withCredentials: true
      }).then(resp => {
        var spans = document.querySelectorAll("#pjC span");
        // console.log(api3);
        // console.log(resp.data);
        this.pjJiekou = resp.data;
      });
    },
    shangpinB() {
      this.shangpin = true;
      this.pingjia = false;
      shangpinA.style.color = "blue";
      pingjiaA.style.color = "black";
      // pingjiaA.style.borderBottom = "black";
    },
    pingjiaB() {
      this.shangpin = false;
      this.pingjia = true;
      shangpinA.style.color = "black";
      pingjiaA.style.color = "blue";
    },
    // 添加食品到购物车
    addFood(a, i, index) {
      this.shipin[i].foods[index].specfoods[0].original_price += a; //单个菜品总价
      this.shipin[i].foods[index].__v += 1; //单个菜品个数
      this.foodCount += 1; //总个数
      // 把所选食品名称以及数量存到foodCounts中
      this.$set(this.foodCounts, "name", this.shipin[i].foods[index].name);
      this.$set(this.foodCounts, "count", this.shipin[i].foods[index].__v);
      this.price += a; //总价
    },
    //减少食品
    reduceFood(a, i, index) {
      this.shipin[i].foods[index].specfoods[0].original_price -= a; //单个菜品总价
      this.shipin[i].foods[index].__v -= 1; //单个菜品个数
      this.foodCount -= 1; //总个数
      this.price -= a; //总价
    }
  },
  created() {
    // this.datas = this.$route.query.datas;//waimai传过来的坐标和店面名称
    // 上一个页面传来的数据（坐标）
    console.log(this.$route.query);
    this.datas = this.$route.query;
    this.jiazaiOKtop0();
    this.jiazaiOKtop1();
    this.getPingjia();
    var shangpinA = document.getElementById("shangpinA");
    var pingjiaA = document.getElementById("pingjiaA");
  }
};
</script>

<style scoped>
.hello {
  text-align: left;
  color: black;
}
#top {
  width: 100%;
  /* border: 1px solid black; */
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(168, 173, 182);

  padding: 0.1rem;
  color: black;
  box-sizing: border-box;
  z-index: 10;
}
#top_img1 {
  width: 0.1rem;
  position: fixed;
  top: 0.1rem;
  left: 0.1rem;
}
/* 评价 */
#top2 {
  z-index: 10;
  /* border: 1px solid black; */
  position: fixed;
  top: 0.8rem;
  left: 0;
  /* margin-top:0.8rem; */
  line-height: 0.3rem;
  clear: both;
  color: black;
  background-color: white;
}
/* 商品 */
#content {
  position: fixed;
  top: 1.17rem;
  left: 0;
  width: 100%;
  /* height: 6rem; */
  /* border: 1px solid black; */
  color: black;
  /* box-sizing: border-box; */
}
#left {
  /* position: absolute; */
  height: 6rem;
  left: 0;
  /* top:  */
  /* border: 1xp solid black; */
  width: 28%;
  vertical-align: top;
  display: inline-block;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
.left_item {
  /* border: 1px solid black; */
  height: 0.5rem;
  border-bottom: 1px solid rgb(225, 225, 245);
}
/* 点击显示的样式 */
.left_item_T {
  background-color: white;
  font-weight: bold;
  border-left: 3px solid blue;
}
#right {
  width: 70%;
  height: 6rem;
  /* position: absolute; */
  top: 1.17;
  left: 35%;
  display: inline-block;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
#left .p1 {
  font-size: 0.2rem;
  line-height: 0.5rem;
}
.right_content {
  height: 1rem;
  padding: 0.13rem;
  background-color: white;
  border-bottom: 1px solid rgb(225, 225, 245);
  box-sizing: border-box;
}
#bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 0.4rem;
  width: 100%;
  background-color: rgb(61, 51, 51);
  z-index: 10;
}
#bottom_img {
  position: fixed;
  left: 5%;
  bottom: 0.05rem;
  width: 15%;
  border-radius: 50%;
  background-color: rgb(61, 51, 51);
  text-align: center;
}
#bottom_img img {
  width: 80%;
}
#bottom_img span {
  width: 0.15rem;
  background-color: red;
  color: white;
  position: fixed;
  left: 15%;
  border-radius: 50%;
}
#js {
  width: 30%;
  position: fixed;
  right: 0;
  height: 0.4rem;
  line-height: 0.4rem;
  color: white;
  background-color: blue;
  text-align: center;
}
#price_A {
  position: fixed;
  left: 25%;
  font-size: 0.23rem;
  color: white;
}
#price_B {
  position: fixed;
  left: 25%;
  bottom: 0.01rem;
  font-size: 0.1rem;
  color: white;
}
#pingjia {
  width: 100%;
  position: relative;
  top: 0.6rem;
  background-color: white;
}
#pingjia_top {
  /* border: 1px solid black; */
  height: 1rem;
  padding: 0.1rem;
  box-sizing: border-box;
  overflow: hidden;
}
#pingjia_top_left {
  width: 40%;
  float: left;
  text-align: center;
}
#pingjia_top_left_p1 {
  margin-top: 0.1rem;
  font-size: 0.3rem;
  color: red;
}
#pjContent {
  /* border: 1px solid black; */
}
#pjC {
  border-top: 1px solid rgb(155, 141, 141);
  background-color: white;
  margin-top: 3px;
  overflow: hidden;
}
#pjC span {
  background-color: rgb(235, 245, 255);
  padding: 0.1rem;
  border-radius: 10% 10% 10% 10% / 10% 10% 10% 10%;
  margin: 0.05rem 0.1rem;
  float: left;
  box-sizing: border-box;
}
.span1{
  background-color: blue;
}
#pjC span:nth-child(3) {
  background-color: rgb(245, 245, 245);
}
#pjList {
  /* margin-top: em; */
  overflow: hidden;
}
.pjJiekouA {
  /* border: 1px solid black; */
  height: 1rem;
  padding: 0.1rem;
  box-sizing: border-box;
}
.pjList_right {
  float: right;
  width: 80%;
  display: inline-block;
  /* border: 1px solid black; */
  /* height: 0.8rem; */
  overflow: hidden;
}
#shop {
  position: fixed;
  left: 0;
  bottom: 0.9rem;
  width: 100%;
  background-color: white;
}
.list {
  height: 0.02rem;
}
.shop_top {
  width: 100%;
  font-size: 0.2rem;
  background-color: rgb(218, 216, 216);
  color: black;
}
</style>
