<template>
    <div>
        <div id="top">
            <img @click="ret()" src="../../../static/img/back.png" alt="">
            <p>在线支付</p>
        </div>
        <div id="content">
            <h3>支付剩余时间</h3>
            <h1 style="font-size:0.5rem;margin-top:3%;">00:{{minutes}}:{{seconds}}</h1>
            </div> 
            <p id="p1">选择支付方式</p>
            <div id="choose">
                <ul>
                    <li>
                       <img src="../../../static/img/3.png" alt=""> 
                       <span>支付宝</span>
                      <div id="imgs" @click="sure3()">
                        <img v-show="doto" style=" width: 8%;" src="../../../static/img/icon-test.png" alt="">
                      <img v-show="!doto" style=" width: 8%;" src="../../../static/img/icon-test2.png" alt=""></div>
                    </li>
                    <li>
                        <img src="../../../static/img/下载 (6).png" alt=""> 
                       <span>微信</span>
                        <div @click="sure4()" id="imgs2">
                          <img v-show="!dot" style=" width: 8%;" src="../../../static/img/icon-test.png" alt="">
                      <img v-show="dot" style=" width: 8%;" src="../../../static/img/icon-test2.png" alt=""></div>
                    </li>
                </ul>
            </div>
            <div id="tankuang" class="animated heartBeat 2s" v-if="show">
              <img src="../../../static/img/警告.png" alt="">
              <p>当前环境无法支付，请前往手机APP中支付</p>
              <div class="bottom" @click="sure()">确认</div>
            </div>
            <div id="tankuang2" class="animated heartBeat 2s" v-if="yes">
              <img style="width:30%;" src="../../../static/img/警告.png" alt="">
              <p>支付超时</p>
              <div class="bottom" @click="sure()">确认</div>
            </div>
             <el-button id="btn" type="text" @click="sure2()">确认支付</el-button>
            
    </div>
</template>
<script>
import { MessageBox } from 'element-ui';
export default {
    name:'zhifu',
    data(){
        return{
         header:{
             headerTitle:"订单详情", 
         },
         minutes:15,
         seconds:0,
         paymentHtml:'',
          show:false,
          yes:false,
          doto:true,
          dot:true
        }
    },
    methods: {
        ret(){
            this.$router.back();
        },
        sure(){
          this.show = false
          this.yes = false
        },
        sure2(){
          this.show = true
        },
        sure3(){
           this.doto = true;
           this.dot = true
        },
        sure4(){
            this.doto = false;
           this.dot = false
        },
        //使用element.ui中的弹框
      //   open() {
      //   this.$confirm(
      //       '当前环境无法支付，请在官方APP进行付款', {
      //     confirmButtonText: '确定',
      //     showCancelButton:false,
      //     type: 'warning',
      //      dangerouslyUseHTMLString:true,
      //     center: true,
          
      //   }).then(() => {
      //     this.$message({
             
      //         width:'80%',
      //       type: 'success',
            
      //     });
      //   }).catch(() => {
      //     this.$message({
      //       type: 'info',
      //       message: '已取消支付'
      //     });
      //   });
      // },
      end() {
        this.$confirm(
            '支付超时', {
          confirmButtonText: '确定',
          showCancelButton:false,
          type: 'warning',
           dangerouslyUseHTMLString:true,
          center: true,
          
        })
      },
        //倒计时
          num(n) {
        return n < 10 ? '0' + n : '' + n
      },
       timer () {
        var _this = this;
        var time = window.setInterval(function () {
          if (_this.seconds === 0 && _this.minutes !== 0) {
            _this.seconds = 59
            _this.minutes -= 1
          } else if (_this.minutes === 0 && _this.seconds === 0) {
            _this.seconds = 0
            window.clearInterval(time)
           _this.yes = true;
          } else {
            _this.seconds -= 1
          }
        }, 1000)
      }

    },
     mounted() {
      this.timer();
    //   this.end();
    },
    watch: {
      second: {
        handler (newVal) {
          this.num(newVal)
          
        }
      },
      minute: {
        handler (newVal) {
          this.num(newVal)
        }
      }
}
}
</script>
<style scoped>
el-button{
    width: 50%;
}
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
#content{
    width: 100%;
    padding: 20% 0;
    background-color: #fff;
}
#p1{
    text-align: left;
    padding: 3%;
}
#choose ul li{
    background-color: #fff;
    text-align: left;
    padding: 3% 0;
}
#choose ul li img{
width: 15%;
}
#choose ul li:nth-child(1) span{
    /* border: 1px solid red; */
    position: absolute;
    top: 55%;
    margin-left: 3%;
}
#choose ul li:nth-child(2) span{
    /* border: 1px solid red; */
    position: absolute;
    top: 65%;
    margin-left: 3%;
}
#imgs img{
  display: inline-block;
 width: 30%;
    display: inline-block;
     position: absolute;
    top: 50%;
    right: 3%;
    border-radius: 50%;
}
#imgs2 img{
     position: absolute;
    top: 65%;
    right: 3%;
   
}
#btn{
    width: 100%;
    padding: 5% 0;
    background-color: blue;
    margin-top: 3%;
}
#tankuang,#tankuang2{
  border: 1px solid gainsboro;
  width: 80%;
  position: absolute;
  top: 35%;
  margin-left: 10%;
  border-radius: 5%;
background-color: white;
z-index: 2;
overflow: hidden;
}
#tankuang img{
  width: 30%;
  margin-top: 3%;
}
.bottom{
  width: 100%;
  padding: 4% 0;
  background-color: rgb(103, 231, 114);
  color: white;
  margin-top: 15%;
}
</style>
