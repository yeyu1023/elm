<template>
  <div>
    <div id="top">
      <img src alt class="p1">
      <div class="a1">
        <p>{{datas.cityName}}</p>
        <router-link style="color:white;" to="/location">切换城市</router-link>
      </div>
    </div>
    <div id="content">
      <input @input="ssadd()" v-model="keyword" id="inp" type="text" placeholder="输入学校，商务楼，地址">
      <p @click="scadd()" v-if="ifx" class="sp1"> x </p>
      <div id="submit" @click="sub()">提交</div>
    </div>
    <p v-show="show" id="search">搜索历史</p>
    <!-- 相关地址 -->
    <div class="div1" >
        <p v-if="if1">很抱歉！无搜索结果</p>
        </div>
    <div id="relative">
      <ul id="ul1">
        <li class="li1" @click="addss(v.name,v.address,v.geohash)" style=" text-align:left" :key="i" v-for="(v,i) in arr">
          <router-link tag="p"  v-model="address" :to="'/waimai?xiabiao=' + i + '&geohash=' + v.geohash + '&name=' + v.name">
            {{v.name}}
            <br>
           <p style=" text-align:left" class="p2">{{v.address}}</p> 
          </router-link>
        </li>
      </ul>
      
    </div>
    <div id="bottom">
    <ul id="ul2">
        <li class="li2" style="text-align:left" :key="i" v-for="(v,i) in names">
            <router-link tag="p" v-model="address" :to="'/waimai?geohash=' +geohashs[i]+'&keyword=' +names[i]+'&xiabiao=' +i">
            {{names[i]}}
             <br>
             <p class="p3">{{dress[i]}}</p>
             <!-- <p>{{v.geohash}}</p> -->
            </router-link>
            </li>
            <li v-if="show1" class="qk" @click="addc()"><p v-if="show2">清空历史</p></li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "city",
  data() {
    return {
      city_id: "",
      keyword: "",
      type: "",
      datas: {},
      address: "", //存储搜索的地址,点击一次赋一个值
      addresses:[],//存储搜索的地址
      arr: [],
      names:[],
      dress:[],
      geohashs:"",
      show:true,
      show1:true,
      show2:false,
      if1:false,
      ifx:true
    };
  },
  created() {
     this.ifx=false;
    this.datas = this.$route.query;
    console.log(this.$route.query);
    // if(this.$route.query.name != null){

    // }
     this.addhi();
  },
 
  methods: {
    scadd(){
      this.keyword =""
      this.ifx=false;
    },
    ssadd(){
      if (this.value == "") {
         this.ifx=false;
        }else{
        this.ifx=true;
        }
    },
    sub() {
      const URL =
        "https://elm.cangdu.org/v1/pois?city_id=" +this.datas.city_id + "&keyword=" +this.keyword +"&type=search";
      this.$http.get(URL).then(response => {
        //response返回请求的数据
        //请求成功后的回调函数
        console.log("成功");
        // console.log(response.data.message); //返回请求到的数据
        this.arr = response.data;
         this.$store.commit('getgeohash',response.data);
         this.show = false;
         this.if1= false;
           console.log(response.data)
        // this.show2 = !this.show2;
       if(this.arr.length ==0){
                    this.show2= false;
                    this.show= true;
                    this.if1= true;
                };  
      });
    
    },
    
    addss(a,b,c){
        if(localStorage.name){
            if(localStorage.name.indexOf(a)==-1){
                localStorage.name += ","+a;
                localStorage.address += ","+b;
                localStorage.geohash += "w" +c;
               
            }

        }else{
            localStorage.name = a;
            localStorage.address = b;
            localStorage.geohash = c;
            
        }
        console.log(c);
    },
    addhi(){
        if(localStorage.name){
        this.names = localStorage.name.split(",");
        console.log( "this.names");
        console.log( this.names);
        this.dress = localStorage.address.split(",");
        console.log("this.dress");
        console.log(this.dress);
         this.geohashs = localStorage.geohash.split("w");
        console.log("this.geohashs");
        console.log(this.geohashs);
        if (this.names.length >0) {
         this.show2=true;
        }
        }

        //  console.log(this.geohashs);
    },
   addc(){
       localStorage.removeItem("name");
       localStorage.removeItem("address");
        localStorage.removeItem("geohash");
       this.names =[],
       this.dress = "";
       this.geohashs = "";
       console.log(this.names.length)
       if (this.names.length==0 || this.names.length== "" ) {
         this.show1=false;
       }
       console.log(this.show1)
   }
  }
};
</script>
<style scoped>
#top {
  /* border: 1px solid black; */
  position: fixed;
  width: 100%;
  height: 0.53rem;
  line-height: 0.52rem;
  background-color: rgb(49, 144, 232);
  font-size: 0.2rem;
  color: white;
  top: 0;
  margin-bottom: 5vh;
}
.p1 {
  position: absolute;
  left: 0.1rem;
  top: 0;
}
.a1 {
  position: absolute;
  right: 0.1rem;
  top: 0;
}
.a1 p {
  position: fixed;
  left: 40%;
  text-align: center;
}
#inp {
  font-size: 0.16rem;
  width: 90%;
  padding: 2%;
  /* margin-left: 2.5%; */
  border: 1px solid gray;
}
#content {
  padding: 2%;
  margin-top: 3%;
  background-color: #fff;
}
#submit {
  width: 90%;
  padding: 2%;
  margin-left: 2.5%;
  margin-top: 3%;
  background-color: lightskyblue;
}
#search {
  position: absolute;
  left: 2%;
  padding: 2%;
}
#relative {
  /* border: 1px solid red;  */
  margin-top: 3%;
  margin-left: 0;
}

#ul1 li{
  margin-top: 1%;
  padding: 2%;
  border: 1px solid gainsboro;
  font-size: 0.15rem;
  color: black;
  background-color: white;
}
.li1>p{
    margin-left: 2%;
}
.p2{
     margin-top: 2%;
     font-size: 0.1rem;  
}
#bottom{
    margin-top: 7%;
    /* border: 1px solid red; */
    width: 100%;
    background-color:white;
}
#ul2{
  
  margin-left: 2%
}
.li2{
margin-top: 1%;
  padding: 2%;
  border: 1px solid gainsboro;
  font-size: 0.15rem;
  color: black;
  background-color: white;
}
.p3{
     margin-top: 2%;
     font-size: 0.1rem;  
}
.qk{
     margin-top: 2%;
     font-size: 0.15rem; 
     line-height: 0.52rem;
}
.div1{
  width: 100%;
  text-align:left;
  line-height: 0.45rem;
  margin-top: 0.05rem;
  position:absolute;
  left: 0;
  background-color: white;
}
.sp1{
  color: blue;
  position: absolute;
  font-size: 0.22rem;
   top: 0.65rem;
   left: 3.3rem; 
   z-index: 3;
}
</style>