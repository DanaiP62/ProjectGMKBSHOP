<template>

<div>

<b-container class="bv-example-row">
    <b-row class="text-left">
         <b-col></b-col>

         <b-col cols="10" class="bg">

    <center><h1> Edit Users NO:{{ user.id }}</h1><hr></center>
    
    <form class="box" v-on:submit.prevent = "editUser">
      <p>Name : <input type="text" class="form-control" v-model="user.name"></p>
        <p>Lastname : <input type="text" class="form-control" v-model="user.lastname"></p>
        <p>Email : <input type="text" class="form-control" v-model="user.email"></p>
        <p>Password : <input type="password" class="form-control" v-model="user.password"></p>
        
        <P><b-button type="submit" pill variant="warning">Submit</b-button>
        <b-button pill variant="secondary" v-on:click="navigateTo('/users')">Back</b-button>
        </P>
    </form>

    <hr>

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
        async editUser() {
            try {
                await UsersService.put(this.user)
                this.$router.push({
                    name: 'users'
                })
            } catch (error) {
                console.log(error)
            }
        },
        navigateTo(route) {
      console.log(route);
      this.$router.push(route);
    },
    },
      async created () { 
          try {
              let userId = this.$route.params.userId
              this.user = (await UsersService.show(userId)).data
            } catch (error) {
                console.log(error)
            }

}
    }

</script>
<style scoped>


</style>
