<template>
    <div style="backgroundColor:white;">
        <div id="top">
            <router-link to="/mineMoney">
            <img  src="../../../static/img/back.png" alt=""></router-link>
            <p>余额情况</p>
            
        </div>
        <div id="content">
            <!-- <p>{{cont.balanceContent}}</p> -->
            <ul id="ul1">
                <li>
                    <p>Q1:使用余额的情况</p>
                    <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
                </li>
                <li>
                    <p>Q2: 余额可以怎么用？</p>
                    <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
                </li>
                <li>
                    <p>Q3:我要如何提现？</p>
                    <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50,点击体现按钮时，系统会提示你已经超额，青年自动修改体现金额</p>
                </li>
                <li>
                    <p>Q3:为什么会提现失败？</p>
                    <p>可能原因，你的开户行，姓名，银行卡号不匹配，你今日的提现金额和体现的次数已经超过限制，你的账户存在风险，已经被拦截</p>
                    </li>    
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"bank",
    created () {
        this.sub();
    },
    methods: {
        sub() {
      const URL =
        "https://elm.cangdu.org/v3/profile/explain";
      this.$http.get(URL).then(response => {
        //response返回请求的数据
        //请求成功后的回调函数
        console.log("成功");
        console.log(response.data); //返回请求到的数据
        this.cont = response.data
      });
    }
    },
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
#content{
    width: 95%;
    /* border: 1px solid red; */
    line-height:0.25rem;
    text-align: left; 
    margin-left: 2.5%;
}

#ul1 li p:nth-child(1){
    text-align: left;
    font-size: 0.15rem;
}
#ul1 li p{
    margin-top: 3%;
    margin-left: 3%;
}
</style>
