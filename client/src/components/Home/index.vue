<template>
  <div>
    <b-container class="bv-example-row">
    <b-row class="text-left">
         <b-col></b-col>

         <b-col cols="10" class="bg2">
    <center><h1>Gaming Keyboard Shop</h1></center>
  <!--   <p><button v-on:click="logout">Logout</button></p> -->
    <center><h5>Recommend For You</h5> </center>

    <div class="banner-bg" id="top">
            <div class="banner-overlay"></div>
            <center><img src="@/assets/k1.png"><br></center>
            <div class="welcome-text">
                <center><h2>Watch Me! by Alex St-Gelais 61-Key Custom Mechanical Keyboard</h2></center><hr></div></div>
     <div class="banner-bg" id="top">
            <div class="banner-overlay"></div>
            <center><img src="@/assets/k2.png"><br></center>
            <div class="welcome-text">
                <center><h2>The Root of All Evil by Alex St-Gelais 61-Key Custom Mechanical Keyboard</h2></center><hr></div></div>
     <div class="banner-bg" id="top">
            <div class="banner-overlay"></div>
            <center><img src="@/assets/k4 (2).png"><br></center>
            <div class="welcome-text">
                <center><h2>M Power by Skeletor 87-Key V3 Custom Mechanical Keyboard</h2></center><hr></div></div>  
    <div class="banner-bg" id="top">
            <div class="banner-overlay"></div>
            <center><img src="@/assets/kd.png"><br></center>
            <div class="welcome-text">
                <center><h2>Cotton Candy by Marius 61-Key Custom Mechanical Keyboard</h2></center><hr></div></div>  
    <div class="banner-bg" id="top">
            <div class="banner-overlay"></div>
            <center><img src="@/assets/kb.png"><br></center>
            <div class="welcome-text">
                <center><h2>French Mac Old-style by Antilog 62-Key ISO Custom Mechanical Keyboard</h2></center><hr></div></div> 
    <div class="banner-bg" id="top">
            <div class="banner-overlay"></div>
            <center><router-link :to="{name: 'comments'}"><b-button pill variant="primary">GO TO PRODUCT</b-button></router-link></center>
            </div>                                                             
    </b-col>
      <b-col> </b-col>
     </b-row>
</b-container>
  </div>
</template>
<script>

import HomeService from "@/services/HomeService";
export default {
  data() {
    return {
      homes: [],
    };
  },
  async created() {
    this.homes = (await HomeService.index()).data;
  }
};
</script>
<style scoped>
</style>