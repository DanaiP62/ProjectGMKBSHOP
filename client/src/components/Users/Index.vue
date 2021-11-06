<template>
 <div>   

<b-container class="bv-example-row">
    <b-row class="text-left">
         <b-col></b-col>

         <b-col cols="10" class="bg">
    <center><h1> USERS </h1></center> 
    <center><h5> Users Login: {{ users.length }} </h5></center>
    <hr>

   

    <div class="box" v-for="user in users" v-bind:key="user.id">
       
       <!-- <p>id : {{ user.id }}</p> -->
        <p>Name : {{ user.name }}</p>
        <p>Lastname : {{ user.lastname }}</p>
        <p>Email : {{ user.email }}</p>
      <!--   <p>password : {{ user.password}}</p> -->
        <hr>
        <p><b-button pill variant="primary" v-on:click="navigateTo('/user/'+ user.id)">User Info</b-button>
       
         <b-button pill variant="warning" v-on:click="navigateTo('/user/edit/'+ user.id)">Edit User</b-button> 
        <b-button pill variant="danger" v-on:click="deleteUser(user)">Delete User</b-button> 
        
    
        </p>
        
    </div>
  <!--  <p><button v-on:click="logout">Logout</button></p> -->


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
                users : []
            }
        },
       async created (){
           this.users = (await UsersService.index()).data
           console.log(results)
        },
        methods: {
            navigateTo (route){
                this.$router.push(route)
             
        },
        async deleteUser(user) {
            let result = confirm("Are you sure delete Users?")
               if(result) { 
                   try {
                    await UsersService.delete(user)
                    this.refreshData()
            } catch (error){
            console.log(error)
          }
        }
         },
         async refreshData() {
             this.users = (await UsersService.index()).data
         },
     /*     logout (){
             this.$store.dispatch('setToken', null)
             this.$store.dispatch('setUser', null)
             
             this.$router.push({  
                 name : 'login'
             })
         }, */
    }
}


</script>
<style scoped>


</style>
