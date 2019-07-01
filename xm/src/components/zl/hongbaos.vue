<template>
    <div id="containter" style="backgroundColor:red;">
        <div id="money">
            <ul>
                <li>有{{$store.state.discounts}}个红包即将过期</li>
                
                    <li><router-link to="/hongbao">?红包说明</router-link></li>
                
            </ul>
        </div>
        <div class="one">
           <div id="top"> 
               <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
               <img src="../../../static/img/下载 (2).png" alt="">
           </div>
           <div class="left">
               <p style="color:red;font-size:0.25rem;">￥{{cont.amount}}</p>
               <p style="color:grey;font-size:0.1rem;">{{cont.description_map.sum_condition}}</p>

           </div>
           <div class="center" style="color:lightgray">
             <p>{{cont.name}}</p>
             <p>{{cont.begin_date}}</p>
             <p>{{cont.description_map.phone}}</p>
           </div>
           <div class="right">
               <p style="color:red;">{{cont.description_map.validity_delta}}</p>
           </div>
        </div>
        <div class="two">
           <div id="top"> 
               <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
               <img src="../../../static/img/下载 (2).png" alt="">
           </div>
           <div class="left">
               <p style="color:red;font-size:0.25rem;">￥{{cont1.amount}}</p>
               <p style="color:grey;font-size:0.1rem;">{{cont1.description_map.sum_condition}}</p>

           </div>
           <div class="center" style="color:lightgray">
             <p>{{cont1.name}}</p>
             <p>{{cont1.begin_date}}</p>
             <p>{{cont.description_map.phone}}</p>
           </div>
           <div class="right">
               <p style="color:red;">{{cont.description_map.validity_delta}}</p>
           </div>
        </div>
        <div class="three">
           <div id="top"> 
               <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
              <img src="../../../static/img/下载 (2).png" alt="">
               <img src="../../../static/img/下载 (2).png" alt="">
           </div>
           <div class="left">
               <p style="color:red;font-size:0.25rem;">￥{{cont2.amount}}</p>
               <p style="color:grey;font-size:0.1rem;">{{cont2.description_map.sum_condition}}</p>

           </div>
           <div class="center" style="color:lightgray">
             <p>{{cont2.name}}</p>
             <p>{{cont2.begin_date}}</p>
             <p>{{cont2.description_map.phone}}</p>
           </div>
           <div class="right">
               <p style="color:red;">{{cont.description_map.validity_delta}}</p>
           </div>
        </div>
        <p id="bottom">{{cont2.limit_map.restaurant_flavor_ids}}}</p>
        <p id="story"><router-link to="/history">查看历史>></router-link></p>
    </div>
</template>
<script>
export default {
    name:'hongbaos',
    data(){
        return{
            cont:'',
            cont2:'',
            cont3:''
        }
    },
    created() {
        this.sub();
    },
    methods: {
          ret(){
            this.$router.back();
        },
         sub() {
      const URL =
        "https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0";
      this.$http.get(URL).then(response => {
        //response返回请求的数据
        //请求成功后的回调函数
        console.log("成功");
        console.log(response.data[0]); //返回请求到的数据
        this.cont = response.data[0]
         this.cont1 = response.data[1]
          this.cont2 = response.data[2]
         
      });
    }
    }
}
</script>
<style scoped>
.one img,.two img,.three img{
    width: 5%;
    float: left;

}
    .one,.two,.three{
        position: absolute;
        top: 1rem;
        text-align: left;
        /* margin-left: 3%; */
        width: 100%;
        /* border: 1px solid black; */
        width: 95%;
        margin-left: 3%;
        background-color: #fff;
        border-radius: 5%;
        /* margin-bottom: 5%; */
        overflow: hidden;
    }
    .two{
        position: absolute;
        top: 2.1rem;
    }
    .three{
        position: absolute;
        top: 3.2rem;
    }
    #containter{
       position: relative;
       background-color: red;
    }
    #top{
        width: 100%;
        overflow: hidden;
        /* border: 1px solid red; */
        border-radius: 5%;
    }
.left,.center,.right{
    float: left;
    width: 15%;
    padding: 5%;

}
.center{
    width: 41%;
    font-size: 0.05rem;
    /* border: 1px solid red; */
    text-align: left;
}
.left{
    padding: 7% 3%;
    line-height: 0.2rem;
    border-right: 1px solid gainsboro;
    width: 18%;
}
.right{
    text-align: right;
    font-size: 0.15rem;
    width: 12%;
    /* border: 1px solid red; */
    float: right;
}
.center p:nth-child(1){
    line-height: 0.3rem;
    color: gray;
    font-size: 0.15rem;
}
#bottom{
    position: absolute;
    top: 4.5rem;
    margin-left: 10%;
    font-size: 0.1rem;
    color: lightgray;
}
#story{
    position: absolute;
    top: 5rem;
    color: lightgray;
    font-size: 0.1rem;
    left: 45%;
}
#money{
    width: 95%;
    margin-left: 2.5%;
    position: absolute;
    top: 0.5rem;
}
#money ul li{
/* border:1px solid red; */
font-size: 0.1rem;
color: black;
float: left;

}
#money ul li:nth-child(1),#bot p:nth-child(1){
text-align: left;
}
#money ul li:nth-child(2),#bot p:nth-child(2){
text-align: right;
}
#money ul li:nth-child(2){
    float: right;
}
</style>