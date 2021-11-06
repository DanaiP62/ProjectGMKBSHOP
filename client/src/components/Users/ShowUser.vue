<template>
<div>

    <b-container class="bv-example-row">
    <b-row class="text-left">
         <b-col></b-col>

         <b-col cols="10" class="bg">
    <center><h1> Show Users NO:{{ user.id }} </h1></center>
    <hr>
    <div class="box">
       <p>Id : {{ user.id }}</p> 
        <p>Name : {{ user.name }}</p>
        <p>Lastname :{{ user.lastname }}</p>
        <p>Email : {{ user.email }}</p>
       <!-- <p>password : {{ user.password}}</p> -->
<hr>
    <p>
     <!--  <b-button pill variant="warning" v-on:click="navigateTo('/user/edit/'+ user.id)">แก้ไขข้อมูล</b-button> -->
      <b-button pill variant="secondary" v-on:click="navigateTo('/users')">BACK</b-button>
    </p>
</div>
    </b-col>
    
      <b-col> </b-col>
     </b-row>
</b-container>
  
</div>
</template>

<script>

import UsersService from '@/services/UsersService'

    export default {
        data () {
            return {
                user: null
            }
        },
    async created (){
        try{
           let userId = this.$route.params.userId
           this.user = (await UsersService.show(userId)).data
        } catch (error){
        console.log (error)
        }
    },
    methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
}

</script>
<style scoped>


</style>
