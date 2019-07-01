<template>
    <div id="one">
        <div id="top">
            <img @click="ret()" src="../../../static/img/back.png" alt="">
            <p style=" font-weight: bold;">{{this.$route.query.daser}}</p>
            
        </div>
        <ul>
       <li>
            <h2 style="backgroundColor:white;" v-html="this.$route.query.serivers"> </h2> 
       </li>
            
           
        </ul>
    </div>
</template>
<script>
export default {
    name:'centerA',
    data(){
        return{
           
        }
    },
    created () {
         console.log(this.$route.query.names);
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
h2{
    text-align: left;
    widows: 100%;
    padding: 2% 3%;
    line-height: 0.3rem;
    color: black;
}
</style>
