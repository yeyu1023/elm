<template>
    <div style="backgroundColor:white;">
        <div id="top">
            <router-link to="/youhui">
            <img  src="../../../static/img/back.png" alt=""></router-link>
            <p>红包说明</p>
            
        </div>
        <div id="content">
            <ul id="ul1">
                <li>
                    <p>Q1:怎么获得红包</p>
                    <p>通过好友获得</p>
                    <p>在下单返红包的商家获得</p>
                    <p>抢微信朋友分享的红包获得</p>
                </li>
                <li>
                    <p>Q2: 红包可以做什么？</p>
                    <p>可以抵扣在线支付时实际支付金额</p>
                </li>
                <li>
                    <p>Q3:红包的门槛金额，按照什么门槛计算？</p>
                    <p>红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</p>
                </li>
                <li>
                    <p>Q4:一个红包拆开之后能多次使用吗？</p>
                    <p>不能，一个红包只能一次性使用，不能多次使用</p>
                    </li> 
                    <li>
                    <p>Q5:下单的时侯使用了红包，之后取消了，红包还能再次使用吗？</p>
                    <p>会的，订单无效后，金额会自动返回到账户中</p>
                    </li> 
                    <li>
                    <p>Q6:红包兑换码怎么兑换红包，怎样查看红包？</p>
                    <p >在个人中心 &gt; 我的红包 &gt; 兑换红包，输入兑换码进行兑换。</p>
                    
                    </li> 
                     <li>
                    <p>Q7:邀请好友了，为什么没有获得红包？</p>
                    <p >先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</p>
                    
                    </li> 
                     <li>
                    <p>Q8:预定早餐，预定午餐的红包怎么使用，在哪里查询？</p>
                   
                    <p >预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</p>
                    <p>预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。</p>
                    
                    </li> 
                     <li>
                    <p>Q9:互拆红包怎么使用？</p>
                    
                    <p >互斥红包不与其他优惠活动（包含但不限于：新用户专享、满X元减X元、满X元赠XX）同时使用。</p>
                    
                    </li> 
                     <li>
                    <p>Q10：返回红包，红包的使用规则是什么？</p>
                    <p >同一个注册用户，一天只能领取三次</p>
                    <p>注册用户的红包，直接放在用户的账户中</p>
                    <p>非注册用户红包以兑换码短信的形式发送至用户手机，注册后凭兑换码兑换即可。</p>
                    <p>同一个手机号一天限领取三个。</p>
                    <p>红包的使用期限时一周，是在领取红包的第二天计算</p>
                    <p>一个手机号，一天最多使用两个红包</p>
                    <p>未收到红包信息的用户，注意查看信息拦截的信息</p>
                    <p>有任何问题请拨打电话：254654543</p>
                    </li>    
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"hongbao"
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
    width: 5%;
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
    font-weight: bold;
   
}
#ul1 li p{
    margin-top: 3%;
    margin-left: 3%;
    font-size: 0.1rem;
     color: gray;
}
</style>
