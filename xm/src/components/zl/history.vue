<template>
    <div>
        <div id="top">
            <router-link to="/youhui">
            <img src="../../../static/img/back.png" alt="">
            </router-link>
            <p style=" font-weight: bold;">历史红包</p>
            </div>
            <div class="one">
           <div id="content"> 
               <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
               <img src="../../../static/img/下载 (7).png" alt="">
           </div>
           <div class="left">
               <p style="color:grey;font-size:0.25rem;">￥{{cont.amount}}</p>
               <p style="color:grey;font-size:0.1rem;">{{cont.description_map.sum_condition}}</p>

           </div>
           <div class="center" style="color:lightgray">
             <p>{{cont.name}}</p>
             <p>{{cont.begin_date}}</p>
             <p>{{cont.description_map.phone}}</p>
           </div>
           <div class="right">
               <p style="color:grey;">已过期</p>
           </div>
           
        </div>
        <div class="two">
           <div id="content"> 
               <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
               <img src="../../../static/img/下载 (7).png" alt="">
           </div>
           <div class="left">
               <p style="color:grey;font-size:0.25rem;">￥{{cont1.amount}}</p>
               <p style="color:grey;font-size:0.1rem;">{{cont1.description_map.sum_condition}}</p>

           </div>
           <div class="center" style="color:lightgray">
             <p>{{cont1.name}}</p>
             <p>{{cont1.description_map.validity_periods}}</p>
             <p>{{cont1.description_map.phone}}</p>
           </div>
           <div class="right">
               <p style="color:grey;">已过期</p>
           </div>
           <div class="bottom">
               <p style="color:grey;">{{cont1.limit_map.restaurant_flavor_ids}}</p>
           </div>
        </div>
        <div class="three">
           <div id="content"> 
               <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
               <img src="../../../static/img/下载 (7).png" alt="">
           </div>
           <div class="left">
               <p style="color:grey;font-size:0.25rem;">￥{{cont2.amount}}</p>
               <p style="color:grey;font-size:0.1rem;">{{cont2.description_map.sum_condition}}</p>

           </div>
           <div class="center" style="color:lightgray">
             <p>{{cont2.name}}</p>
             <p>{{cont1.description_map.validity_periods}}</p>
             <p>{{cont2.description_map.phone}}</p>
           </div>
           <div class="right">
               <p style="color:grey;">已过期</p>
           </div>
           <div class="bottom" style="color: rgb(184, 182, 182);">
               <p style="color:grey;">{{cont2.limit_map.restaurant_flavor_ids}}</p>
           </div>
        </div>
         <div class="four">
           <div id="content"> 
               <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
              <img src="../../../static/img/下载 (7).png" alt="">
               <img src="../../../static/img/下载 (7).png" alt="">
           </div>
           <div class="left">
               <p style="color:grey;font-size:0.25rem;">￥{{cont3.amount}}</p>
               <p style="color:grey;font-size:0.1rem;">{{cont3.description_map.sum_condition}}</p>

           </div>
           <div class="center" style="color:lightgray">
             <p>{{cont3.name}}</p>
             <p>{{cont1.description_map.validity_periods}}</p>
             <p>{{cont3.description_map.phone}}</p>
           </div>
           <div class="right">
               <p style="color:grey;">已过期</p>
           </div>
           <div class="bottom"><p>{{cont3.limit_map.restaurant_flavor_ids}}</p></div>
        </div>
         
        </div>
    
</template>
<script>
export default {
    name:'history',
     data(){
        return{
            cont:'',
            cont1:'',
            cont2:'',
            cont3:''
        }
    },
    created() {
        this.sub();
    },
    methods: {
         sub() {
      const URL =
        "https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0";
      this.$http.get(URL).then(response => {
        //response返回请求的数据
        //请求成功后的回调函数
        console.log("成功");
        console.log(response.data[0]); //返回请求到的数据
        this.cont = response.data[0]
         this.cont1 = response.data[1]
          this.cont2 = response.data[2]
          this.cont3 = response.data[3]
         
      });
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

#content img{
    float: left;
}
.one img,.two img,.three img,.four img{
    width: 5%;
    float: left;

}
    .one,.two,.three,.four{
        position: absolute;
        top: 0.7rem;
        text-align: left;
        /* margin-left: 3%; */
        width: 100%;
        /* border: 1px solid black; */
        width: 98%;
        margin-left: 1%;
        background-color: #fff;
        border-radius: 5%;
        /* margin-bottom: 5%; */
        overflow: hidden;
    }
    .two{
        position: absolute;
        top: 1.9rem;
    }
    .three{
        position: absolute;
        top: 3.4rem;
    }
    .four{
         position: absolute;
        top: 4.9rem;
    }
    #containter{
       position: relative;
       background-color: red;
    }
    #content{
        width: 100%;
        overflow: hidden;
        /* border: 1px solid red; */
        border-radius: 5%;
    }
.left,.center,.right{
    float: left;
    width: 13%;
    padding: 5% 3%;

}
.bottom{
    width: 100%;
    float: left;
    text-align: left;
    /* border: 1px solid red; */
    padding: 3%;
    background-color: gainsboro;
    color: rgb(184, 182, 182);
}
.center{
    width: 45%;
    font-size: 0.05rem;
    /* border: 1px solid red; */
    text-align: left;
    color: rgb(188, 189, 190)
}
.left{
    padding: 7% 2%;
    line-height: 0.2rem;
    border-right: 1px solid gainsboro;
    width: 20%;
}
.right{
    text-align: right;
    font-size: 0.1rem;
    width: 12%;
    /* border: 1px solid red; */
    float: right;
}
.center p:nth-child(1){
    line-height: 0.3rem;
    color: gray;
    font-size: 0.15rem;
}

#story{
    position: absolute;
    top: 5rem;
    color: lightgray;
    font-size: 0.1rem;
    left: 45%;
}

</style>
