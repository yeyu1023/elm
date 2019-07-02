<template>
  <div class="hello">
    <!-- 底部 -->
    <div id="nav">
      <ul>
        <li>
          <router-link to="/waimai">
            <img src="../../static/img/homeF.png" alt="">
            <P style="font-size:0.1rem;color:grey;">外卖</P>
          </router-link>
        </li>
        <li>
          <router-link to="/search">
            <img src="../../static/img/指南针 (4).png" alt="">
            <P style="font-size:0.1rem;color:grey;">搜索</P>
          </router-link>
        </li>
        <li>
          <router-link to="/dingdan">
            <img src="../../static/img/dingdan1.png" alt="">
            <P style="font-size:0.1rem;color:grey;">订单</P>
          </router-link>
        </li>
        <li>
          <router-link to="/mine">
            <img src="../../static/img/meF.png" alt="">
            <P style="font-size:0.1rem;color:grey;">我的</P>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="top">
      <p @click="add()" class="p1">く</p>
      <p class="p2">搜索</p>
    </div>
    <div class="conter">
      <input
        @input="watchshop()"
        v-model="shop"
        class="conter1"
        placeholder="请输出商家或者商品名称"
        type="text"
        ref="type"
      />
      <p @click="scadd()" v-if="ifx" class="sp1">x</p>
      <!-- <router-link :to="'/searcher?geohash='+data.geohash+'&keyword='+shop"> -->
      <div @click="geohash()" class="conter2">提交</div>
      <!-- </router-link> -->
    </div>
    <div class="p3">
      <p v-show="show">很抱歉！无搜索结果</p>
    </div>
    <div class="p4">
      <p v-if="sj">商家</p>
    </div>
    <div class="bottom">
      <ul v-if="sp">
        <li class="li1" :key="i" v-for="(v,i) in content">
          <router-link tag="p" :to="'/shop?id='+v.id">
            <img class="img1" :src="'https://elm.cangdu.org/img/'+v.image_path" alt />
            <div class="bottom1">
              <p class="lip1">{{v.name}}</p>
              <p class="lip2">
                <span v-if="v.recent_order_num">月售</span>
                {{v.recent_order_num}}
                <span v-if="v.recent_order_num">单</span>
              </p>
              <p class="lip3">
                {{v.float_minimum_order_amount}}
                <span v-if="v.float_minimum_order_amount">元 起送 / 距离</span>
                {{v.distance}}
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- <router-view v-show="searcher"></router-view> -->
    <!-- <div class="jl">  -->
    <ul v-if="ul" class="ul2">
      <div class="ssls">
        <p>搜索历史</p>
      </div>
      <li class="li2" :key="i" v-for="(v,i) in shops">
        <span class="span2" @click="getgeoadd(v)">{{v}}</span>
         <span @click="dsadd(i)" class="span1">x</span>
      </li>
      <li class="li3" @click="addc()">
        <p class="p6">清空历史搜索</p>
      </li>
    </ul>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      geohashData: {},
      content: {},
      shop: "",
      datas: "",
      shops: [],
      show: false,
      sj: false,
      sp: true,
      ul: true,
      ifx: true
    };
  },

  created() {
  this.dsadd();
    console.log(this.$store.state.cityToWaimai_geohash);
    // console.log(this.$store.state.cityToWaimai_geohash.split(",")[0]);
    // console.log(this.$store.state.cityToWaimai_geohash.split(",")[1]);
    this.ul = false;
    this.ifx = false;
    // this.datas = this.$route.query;
    // console.log(this.$route.query);
    // this.$store.commit('getxiabiao',this.$route.query.xiabiao);
    //  if (this.$route.query.xiabiao < 0) {
    //    this.$store.commit('getxiabiao',this.$route.query.xiabiao);
    //  }

    if (localStorage.shop) {
      this.shops = localStorage.shop.split(",");
      console.log(this.shops);
      this.ul = true;
    } else {
      this.ul = false;
    }
    console.log(this.$store.state.xiabiaoId);
    console.log(this.$store.state.geohasha);
  },
  methods: {
    watchshop() {
      if (this.$refs.type.value.length == 0) {
        this.sp = false;
        this.sj = false;
        this.show = false;
        this.ul = true;
        this.ifx = false;
      } else {
        this.ifx = true;
      }

      console.log(this.ifx);
      console.log(this.$refs.type.value.length);
    },
    geohash() {
      this.data = this.$route.query;
      const api =
        "https://elm.cangdu.org/v4/restaurants?geohash=" +
        this.$store.state.geohasha[this.$store.state.xiabiaoId].geohash +
        "&keyword=" +
        this.shop;
      this.$http({
        url: api,
        method: "get",
        data: {
          //post的请求方式
        }
      }).then(res => {
        //请求返回的数据res
        console.log(res);
        this.sp = true;
        // this.sj= false;
        this.sj = !this.sj;
        this.ul = false;
        this.content = res.data;

        //本地存储  历史记录
        if (localStorage.shop) {
          if (localStorage.shop.indexOf(this.shop) == -1) {
            localStorage.shop += "," + this.shop;
          }
        } else {
          localStorage.shop = this.shop;
        }
        if (localStorage.shop) {
          this.shops = localStorage.shop.split(",");
        }
        console.log(this.shops.length);
        if (
          this.content.message == "搜索餐馆数据失败" ||
          this.content.length == 0
        ) {
          this.show = true;
          this.sj = false;
          this.ul = false;
        }
      });
    },
    //清除输入框
    scadd() {
      this.show = false;
      this.sp = false;
      this.sj = false;
      this.ul = true;
      this.ifx = false;
      this.shop = "";
      console.log(1);
    },
    //返回
    add() {
      this.$router.back();
    },
    //清空所有历史记录
    addc() {
      localStorage.removeItem("shop");
      this.shops = "";
      if (this.shops.length == 0) {
        this.ul = false;
      }
    },
    //单项删除历史记录
     dsadd(i) {
    console.log(this.shops);
    if (this.shops.length == 0) {
      return;
    }else{
       localStorage.removeItem("shop");
       for (let j = 0; j < this.shops.length; j++) {
         if (i!=j) {
           if ( localStorage.shop &&
              localStorage.shop.indexOf(this.shops[j]) == -1) {
              localStorage.shop += "," + this.shops[j];
           }else{ 
             localStorage.shop = this.shops[j];
             }
         }
       }
    }
      if (this.shops.length == 1) {
          this.shops = localStorage.shop;
          this.ul = false;
        } else {
          this.shops = localStorage.shop.split(",");
        }
      
        console.log(this.shop.length);
    },
    getgeoadd(v){
       this.shop = v;
      const api =
        "https://elm.cangdu.org/v4/restaurants?geohash=" +
        this.$store.state.geohasha[this.$store.state.xiabiaoId].geohash +
        "&keyword=" +
        this.shop;
      this.$http({
        url: api,
        method: "get",
        data: {
          //post的请求方式
        }
      }).then(res => {
        //请求返回的数据res
        console.log(res);
        this.sp = true;
        // this.sj= false;
        this.sj = !this.sj;
        this.ul = false;
        this.content = res.data;

        //本地存储  历史记录
        if (localStorage.shop) {
          if (localStorage.shop.indexOf(this.shop) == -1) {
            localStorage.shop += "," + this.shop;
          }
        } else {
          localStorage.shop = this.shop;
        }
       
          this.shops = localStorage.shop.split(",");
        
        console.log(this.shops.length);
        if (
          this.content.message == "搜索餐馆数据失败" ||
          this.content.length == 0
        ) {
          this.show = true;
          this.sj = false;
          this.ul = false;
        }
         
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  position: fixed;
  width: 100%;
  height: 0.46rem;
  /* line-height: 0.52rem; */
  font-size: 0.15rem;
  color: white;
  top: 0;
  background-color: rgb(0, 119, 255);
  z-index: 3;
}
.p1 {
  line-height: 0.52rem;
  position: absolute;
  font-size: 0.2rem;
}
.p2 {
  line-height: 0.52rem;
  font-size: 0.2rem;
  font-weight: bold;
}
.conter {
  /* height: 0.5rem; */
  /* border: 1px solid red; */
  margin-top: 0.55rem;
  padding: 0.1rem;
  position: relative;
  z-index: 2;
  /* background-color:white; */
}

.conter1 {
  width: 65%;
  line-height: 0.35rem;
  font-size: 0.12rem;
  font-weight: bold;
  border-radius: 3%;
  position: absolute;
  left: 0.2rem;
  z-index: 0;
}
.sp1 {
  color: blue;
  position: absolute;
  font-size: 0.22rem;
  top: 0.15rem;
  left: 2.3rem;
  z-index: 3;
}
.conter2 {
  width: 20%;
  line-height: 0.35rem;
  font-size: 0.15rem;
  font-weight: bold;
  background-color: rgb(0, 119, 255);
  border-radius: 3%;
  position: absolute;
  right: 0.2rem;
  color: white;
}
.p3 {
  width: 100%;
  line-height: 0.35rem;
  margin-top: 0.4rem;
  position: absolute;
  background-color: white;
}
.p4 {
  /* width: 100%; */
  line-height: 0.2rem;
  margin-top: 0.35rem;
  margin-left: 0.18rem;
  position: absolute;
  /* background-color:rgb(243,243,243); */
}
.bottom {
  width: 100%;
  /* border: 1px solid red; */
  position: absolute;
  margin-top: 0.65rem;
  background-color: white;
}
.li1 {
  margin-top: 0.25rem;
  text-align: left;
  /* line-height: 0.1rem */
}
.img1 {
  width: 0.4rem;
  /* margin-top: 0rem; */
  margin-left: 0.2rem;
}
.bottom1 {
  margin-top: -0.4rem;
  margin-left: 0.2rem;
}
.lip1,
.lip2,
.lip3 {
  margin-left: 0.45rem;
  font-size: 0.13rem;
}
.lip2 {
  margin-top: 0.05rem;
}
.lip3 {
  margin-top: 0.05rem;
}
.lip4 {
  margin-left: 1rem;
}
.lsjl {
  margin-top: 0.8rem;
}
.ul2 {
  margin-top: 0.3rem;
  background-color: white;
}
.li2 {
  text-align: left;
  margin-left: 0.15rem;
  line-height: 0.5rem;
  /* border-bottom: 0.01rem solid black; */
}
.span2{
  width: 80%;
}
.span1 {
   width: 10%;
  float: right;
  overflow: hidden;
  /* position: fixed; */
  font-size: 0.2rem;
  /* margin-left: 3.2rem; */
  font-weight: bold;
}
.p5 {
  margin-left: 0.15rem;
}
.li3 {
  line-height: 0.5rem;
  border-bottom: 0.01rem solid gainsboro;
}
.ssls {
  /* margin-top: 0.2rem; */
  line-height: 0.5rem;
  text-align: left;
  margin-left: 0.15rem;
  font-size: 0.13rem;
  /* background-color:rgb(243,243,243); */
}
#nav {
  /* border: 1px solid red; */
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid gainsboro;
  background-color: #fff;
}
#nav ul li {
  float: left;
  width: 25%;
  padding: 1% 0;
  /* border: 1px solid red; */
}
#nav ul li img {
  width: 25%;
}
</style>
