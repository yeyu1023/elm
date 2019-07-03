<template>
    <div style="backgroundColor:white;">
        <div id="top">
            <img @click="ret()" src="../../../static/img/back.png" alt="">
            <p id="p1" style="font-weight: bold;">{{this.$route.query.daser}}</p>
            
        </div>
        <p v-html="this.$route.query.serivers"></p>
       
    </div>
</template>
<script>
export default {
    name:'centerB',
    data(){
        return{
            cont:''
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
#p1{
    text-align: center;
    line-height: 0.5rem;
}
h4{
    text-align: left;
    margin-top: -3%;
    padding: 2% 3%;
    line-height: 0.25rem;
    color: grey;
    font-size: 0.18rem;
}
p{
    margin-left: 3%;
    text-align: left;
    font-size: 0.18rem;
    line-height: 0.25rem;
}
</style>
