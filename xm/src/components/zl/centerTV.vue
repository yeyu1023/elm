<template>
    <div>
         <div id="top">
            <img @click="ret()" src="../../../static/img/back.png" alt="">
            <p style=" font-weight: bold;">超级会员权益说明</p>
            
        </div>
        <div id="content">
            <ul>
                <!-- <li>
                    <img src="../../../static/img/6 (2).jpeg" alt="">
            <p v-html="this.$route.query.serivers"></p>
                </li> -->
                <li>
                    <img src="../../../static/img/6 (2).jpeg" alt="">
            <p> ## 2. 光线 尽量选择明亮、柔和的光线，避免强光直射；拍摄时避免身体或器物的阴影遮住食物本身，有条件时，可以用小型手电进行补光，以提高食物质感。</p>
                </li>
                <li>
                    <img src="../../../static/img/3.jpeg" alt="">
            <p>  ## 3. 构图 构图可以选择通用的三分构图法或中心构图法，如果是拍摄整体食物时，需要考虑食物的完整性；如果拍摄特写时，需要将细节体现清楚。</p>
                </li>
                <li>
                    <img src="../../../static/img/4.jpeg" alt="">
            <p>  ## 4.角度 可以选择45度拍摄、90度俯拍或者水平拍摄，一切都看你的心情哦~</p>
                </li>
                <li>
                    <img src="../../../static/img/5.jpeg" alt="">
            <p> ## 5. 背景 可以选择合适的背景拍摄，例如黑色能体现食物蒸腾的热气，白色让食物更有质感，米色更加温馨等；但背景尽量不要太乱，以免影响整体效果。</p>
                </li>
                <li>
                    <img src="../../../static/img/6 (2).jpeg" alt="">
            <p> ## 6. 细节 餐具的搭配使用、人物的烘托、道具的陪衬等都能使食物更具诱惑力，照片更有氛围。</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'centerTV',
   data(){
        return{
            cont:""
        }
    },
    methods: {
        ret(){
            this.$router.back();
        },
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
    width: 100%;
}
#content ul li{
    margin-bottom: 3%;
}
#content ul li img{
    width: 90%;
}
#content ul li p{
    text-align: left;
    margin: 0 5%;
    font-size: 0.16rem;
    line-height: 0.18rem;
    
}
</style>
