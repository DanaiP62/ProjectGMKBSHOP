<template>
  <div>
    <b-container class="bv-example-row">
    <b-row class="text-center">
         <b-col></b-col>

         <b-col cols="10" class="bg4">

    <h1>User Login</h1>
  
<form v-on:submit.prevent="onLogin">
  <div class="container">

    <label for="email"><b>Email: </b></label>
    <input type="text" v-model="email" placeholder="Enter Email" required>

    <br>

    <label for="psw"><b>Password: </b></label>
    <input type="password" v-model="password" placeholder="Enter Password" required>

    <br>

    <b-button class="loginbtn" type="submit" pill variant="success" >Login</b-button>

    <p> <b-button class="registerbtn" pill variant="warning" v-on:click="navigateTo('/user/create/')">Register </b-button></p>

    <div class="error" v-if="error">{{error}}</div>
  </div>

</form>


    </b-col>
     </b-row>
</b-container>

  </div>
</template>

<script>

import AuthenService from '@/services/AuthenService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null 
    }
  },

  methods: {
    async onLogin(){
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password
        })
      
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)

        this.$router.push({
          name: 'users'
        })
       

      } catch(error) {
        console.log(error)
        this.error = error.response.data.error //แสดง error ถ้าใส่รหัสผิด หรือรหัสไม่มีอยู่ในฐานข้อมูล
        this.email = ''
        this.password = ''
      }
    },
            navigateTo (route){
                this.$router.push(route)
             
        },
  },
}
</script>
<style scoped>
  * {box-sizing: border-box}

/* Add padding to containers */
.container {
  padding: 100px;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 20px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: white;
  border-radius: 10px 10px 10px 10px;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #FFFFF0;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #000000;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  color: rgb(90, 90, 90);
  padding: 14px 2px;
  margin: 6px 0;
  border: none;
  cursor: pointer;
  width: 30%;
  opacity: 0.9;
}

.loginbtn {
  background-color: #15f8a5;
  color: white;
  padding: 14px 2px;
  margin: 6px 0;
  border: none;
  cursor: pointer;
  width: 30%;
  opacity: 0.9;
}

  .error {
    color:red;
  }
</style>