<template>
    <div>
        <div id="top">
            <img @click="ret()" src="../../../static/img/back.png" alt="">
            <p style=" font-weight: bold;">{{this.$route.query.daser}}</p>
            
        </div>
        <h3 style="backgroundColor:white;">{{this.$route.query.serivers}}</h3> 
    </div>
</template>
<script>
export default {
    name:'shangwu',
    methods: {
        ret(){
            this.$router.back();
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
h3{
    text-align: left;
    margin-top: -3%;
    widows: 100%;
    padding: 2% 3%;
    line-height: 0.3rem;
    color: black;
}
</style>
