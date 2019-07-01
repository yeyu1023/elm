<template>
    <div>
      <div id="top">
            <img @click="ret()" src="../../../static/img/back.png" alt="">
            <p style=" font-weight: bold;">服务中心</p>
            
        </div> 
        <div id="two">
            <ul>
                <li>
                    <img src="../../../static/img/icon_客服.png" alt="">
                    <p>在线客服</p>
                    </li>
                <li>
                    <img src="../../../static/img/电话.png" alt="">
                    <p>在线客服</p>
                    </li>
            </ul>
            </div>
            <div id="content">
                <ul>
                   <h3 >热门问题</h3>
                    
                        <li  @click="router1()">
                        <p>{{cont.supervipCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                   
                    
                        <li @click="router2()">
                        <p>{{cont.signCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                    
                    
                        <li @click="router3()">
                        <p>{{cont.rankCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                    
           
                        <li @click="router4()">
                        <p>{{cont.pointtextCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                  

                        <li @click="router5()">
                        <p>{{cont.phototutorialCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                   
                  
                        <li @click="router6()">
                        <p>{{cont.paymentCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                    
                   
                        <li @click="router7()">
                        <p>{{cont.otherCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                   
                   
                        <li @click="router8()">
                        <p>{{cont.ontimeCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                 
                        <li @click="router9()">
                        <p>{{cont.memberTimesCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                    
                        <li @click="router10()">
                        <p>{{cont.memberCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                 
                        <li @click="router11()">
                        <p>{{cont.hongbaoCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                    
                        <li @click="router12()">
                        <p>{{cont.freshmanCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                  
                        <li @click="router13()">
                        <p>{{cont.forgotCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                 
                        <li @click="router14()">
                        <p>{{cont.discountCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                    
                        <li @click="router15()">
                        <p>{{cont.disclaimerCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                    
                        <li @click="router16()">
                        <p>{{cont.couponCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                  
                        <li @click="router17()">
                        <p>{{cont.businessCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                 
                        <li @click="router18()">
                        <p>{{cont.balanceCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
              
                        <li @click="router19()">
                        <p>{{cont.awesomeRestaurantCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                   
                        <li @click="router20()">
                        <p>{{cont.anonymousBuyCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>
                  
                        <li @click="router21()">
                        <p>{{cont.activityCaption}}</p>
                        <img src="../../../static/img/iconfontjiantou2.png" alt="">
                    </li>

                
                </ul>
                </div> 
    </div>
</template>
<script>
export default {
    name:'serviceCentre',
    data(){
        return{
            cont:""
        }
    },
    created() {
        this.sub(),
        this.add(),
        console.log(this.$router.data)
    },
    methods: {
        ret(){
            this.$router.back();
        },
          router1(){
            this.$router.push({
                name: "centerA",
                query: {
                daser:this.cont.supervipCaption,
                serivers: this.cont.supervipContent,
                
                }
            });
        },
         router2(){
            this.$router.push({
                name: "centerB",
                query: {
                daser:this.cont.signCaption,
                serivers: this.cont.signContent,
                
                }
            });
        },
        router3(){
            this.$router.push({
                name: "centerC",
                query: {
                daser:this.cont.rankCaption,
                serivers: this.cont.rankContent,
                
                }
            });
        },
        router4(){
            this.$router.push({
                name: "centerD",
                query: {
                daser:this.cont.pointtextCaption,
                serivers: this.cont.pointtextContent,
                
                }
            });
        },
        router5(){
            this.$router.push({
                name: "centerTV",
                query: {
                daser:this.cont.phototutorialCaption,
                serivers: this.cont.phototutorialContent,
                
                }
            });
        },
        router6(){
            this.$router.push({
                name: "centerPay",
                query: {
                daser:this.cont.paymentCaption,
                serivers: this.cont.paymentContent,
                
                }
            });
        },
        router7(){
            this.$router.push({
                name: "centerElse",
                query: {
                daser:this.cont.otherCaption,
                serivers: this.cont.otherContent,
                
                }
            });
        },
        router8(){
            this.$router.push({
                name: "centerOntime",
                query: {
                daser:this.cont.ontimeCaption,
                serivers: this.cont.ontimeContent,
                
                }
            });
        },
        router9(){
            this.$router.push({
                name: "vipInstro",
                query: {
                daser:this.cont.memberTimesCaption,
                serivers: this.cont.memberTimesContent,
                
                }
            });
        },
        router10(){
            this.$router.push({
                name: "memberqu",
                query: {
                daser:this.datas.memberCaption,
                serivers: this.datas.memberFullCutContent,
                
                }
            });
        },
        router11(){
            this.$router.push({
                name: "hongbaovip",
                query: {
                daser:this.cont.hongbaoCaption,
                serivers: this.cont.hongbaoContent,
                
                }
            });
        },
        router12(){
            this.$router.push({
                name: "active",
                query: {
                daser:this.cont.freshmanCaption,
                serivers: this.cont.freshmanContent,
                
                }
            });
        },
        router13(){
            this.$router.push({
                name: "buqian",
                query: {
                daser:this.cont.forgotCaption,
                serivers: this.cont.forgotContent,
                
                }
            });
        },
        router14(){
            this.$router.push({
                name: "youhuiVip",
                query: {
                daser:this.cont.discountCaption,
                serivers: this.cont.discountContent,
                }
            });
        },
        router15(){
            this.$router.push({
                name: "mianze",
                query: {
                daser:this.cont.disclaimerCaption,
                serivers: this.cont.freshmanContent,
                
                }
            });
        },
        router16(){
            this.$router.push({
                name: "daijinquanInstro",
                query: {
                daser:this.cont.couponCaption,
                serivers: cont.datas.couponContent,
                
                }
            });
        },
        router17(){
            this.$router.push({
                name: "shangwu",
                query: {
                daser:this.cont.businessCaption,
                serivers: this.cont.businessContent,
                
                }
            });
        },
        router18(){
            this.$router.push({
                name: "yue",
                query: {
                daser:this.cont.balanceCaption,
                serivers: this.cont.balanceContent,
                
                }
            });
        },
        router19(){
            this.$router.push({
                name: "choazan",
                query: {
                daser:this.cont.awesomeRestaurantCaption,
                serivers: this.cont.awesomeRestaurantContent,
                
                }
            });
        },
        router20(){
            this.$router.push({
                name: "niming",
                query: {
                daser:this.cont.anonymousBuyCaption,
                serivers: this.cont.businessContent,
                
                }
            });
        },
        router21(){
            this.$router.push({
                name: "huodong",
                query: {
                daser:this.cont.activityCaption,
                serivers: this.cont.activityContent,
                
                }
            });
        },
         sub() {
      const URL =
        "https://elm.cangdu.org/v3/profile/explain";
      this.$http.get(URL).then(response => {
        //response返回请求的数据
        //请求成功后的回调函数
        console.log("成功");
        console.log(response.data.supervipContent); //返回请求到的数据
        this.cont = response.data
      });
    }
    },
}
</script>
<style scoped>
#top{
width: 3.75rem;
height: 0.53rem;
line-height: 0.53rem;
background-color: rgb(49, 144, 232);
font-size: 0.2rem;
color: white;
 position: fixed;
 left:0;
 top: 0;
 z-index: 2;
}
#top img{
    width: 8%;
    padding: 3% 0;
    float: left;
    margin-left: 2%;
}
#two ul li{
    /* margin-top: -3%; */
    border: 1px solid ghostwhite;
    width: 39.4%;
    float: left;
    padding: 10% 5%;
    background-color: #fff;
}
#two ul li img{
    width: 20%;
}
#content {
    padding: 1px;
}
#content h3{
    text-align: left;
    padding: 5% ;
    background-color: #fff;
    margin-top: 10%;
}
#content ul li {
    width: 100%;
    border: 1px solid ghostwhite;
    text-align: left;
    padding: 3%;
    background-color: #fff;
    position: relative;
}
#content ul li p:nth-child(1){
    margin-left: 3%;
}
#content ul li img{
    margin-left: 88%;
    width: 5%;
    margin-top: -13%;
}
</style>
