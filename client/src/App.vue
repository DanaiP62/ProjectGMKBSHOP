<template>
  <div id="app" class style="font-family: 'Itim', cursive;"> 
    
      
    <!-- อยากให้หน้าตาเป็นแบบไหนใส่ที่นี่-->
    <back-header />
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /* text-align: center;*/
  color: #2c3e50;
  margin-top: 10px;
}






/* Fade transition*/
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active{
  transition: opacity 2.5s;
}

.fade-enter-to {
  opacity: 1;
}

.thumbnail-pic img{
      width: 40%;
    }


  .style{
    font-family: 'Itim', cursive;
  }
/* user */
  .bg{
    background: linear-gradient(90deg,  #5d8d73,#ffead9);
    border-radius: 10px 10px 10px 10px;
    width: 100%;
    height: 100%;
}

/* Blogs */
 .bg1{
    background:linear-gradient(120deg,  #5d8d73,#ffead9);
    border-radius: 10px 10px 10px 10px;
    width: 100%;
    height: 100%;
    
}

/* Room */
.bg2{
    background: linear-gradient(120deg,  #5d8d73,#ffead9);
    border-radius: 10px 10px 10px 10px;
    width: 100%;
    height: 100%;
}

/* Comment */
.bg3{
    background: linear-gradient(120deg,  #5d8d73,#ffead9);
    border-radius: 10px 10px 10px 10px;
    width: 100%;
    height: 100%;
}

.bg4{
    background: linear-gradient(120deg,#5d8d73,#ffead9);
    border-radius: 10px 10px 10px 10px;
    width: 100%;
    height: 100%;
}

/*
form {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px;
  background: white;
  border-radius: 20px 20px 20px 20px;
} */

/* user */
.box{
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  border: 1px;
  border-color: #DCDCDC;
  background: white;
  border-radius: 10px 10px 10px 10px; /* ความมนของกรอบ*/
  margin-bottom: 20px; /* ระยะห่างกรอบ */
}
/* user ข้างล่าง*/
.box-1{
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  border: 1px; /* สีเส้นขอบ */
  background: linear-gradient(120deg,#5d8d73,#ffead9);
  border-radius: 10px 10px 10px 10px; /* ความมนของกรอบ*/
  margin-bottom: 20px; /* ระยะห่างกรอบ */
  color: white; /* สีฟ้อน */
}

/* Blogs */
.box1{
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  border: 1px;
  border-color: #DCDCDC;
  background: white;
  border-radius: 10px 10px 10px 10px; /* ความมนของกรอบ*/
  margin-bottom: 20px; /* ระยะห่างกรอบ */
}


/* Room */
.box2{
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  border: 1px;
  border-color: #DCDCDC;
  background: white;
  border-radius: 10px 10px 10px 10px; /* ความมนของกรอบ*/
  margin-bottom: 20px; /* ระยะห่างกรอบ */
}

/* Comment*/
.box3{
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  border: 1px;
  border-color: #DCDCDC;
  background: white;
  border-radius: 10px 10px 10px 10px; /* ความมนของกรอบ*/
  margin-bottom: 20px; /* ระยะห่างกรอบ */
}

t{
   border-radius: 20px 20px 20px 20px;
    margin: 30px;
}


</style>
