<template>

<div>

    <b-container class="bv-example-row">
    <b-row class="text-left">
         <b-col></b-col>

         <b-col cols="10" class="bg">

    <h1> Create Users </h1>
<hr>
    
    <form class="box" v-on:submit.prevent = "createUser">
       <p>Name : <input type="text" class="form-control" v-model="user.name"></p>
        <p>Lastname : <input type="text" class="form-control" v-model="user.lastname"></p>
        <p>Email : <input type="text" class="form-control" v-model="user.email"></p>
        <p>Password : <input type="password" class="form-control" v-model="user.password"></p>
<hr>
        <p><b-button pill variant="success" type="submit">Register</b-button>
         <b-button pill variant="danger" type="reset">Clear</b-button>
         <b-button pill variant="secondary" v-on:click="navigateTo('/login')">Back</b-button>
   </p> 
   </form>
   
    <div class="box-1">
        <p>Name : {{ user.name }} </p>
        <p>Lastname : {{ user.lastname }}</p>
        <p>Email : {{ user.email }}</p>
        <p>Password : {{ user.password}}</p> 
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
            return{
            user:{
                name : '',
                lastname: '',
                email: '',
                password: '',
                status: 'active'
            }
        }
    },
    methods:{
        async createUser () {
            try {
                await UsersService.post(this.user)
                this.$router.push({
                    name: 'users'
                })
            } catch (error) {
                console.log(error)
            }
        }
        ,navigateTo(route) {
      console.log(route);
      this.$router.push(route);
    },
    }
}

</script>
<style scoped>



</style>
