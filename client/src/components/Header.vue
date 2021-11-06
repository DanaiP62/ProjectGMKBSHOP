<template>
    <div>
        <div class="sidebar"> 
          <div class="title"><center>  
            <div class="img">
            </div>
            <h1>GKB SHOP</h1>
        </center></div>
            
            <a><router-link :to="{name: 'homes'}"><i class="fa fa-home" aria-hidden="true"></i> HOME</router-link></a> 
            <a><router-link :to="{name: 'comments'}"><i class="fa fa-shopping-bag" aria-hidden="true"></i> PRODUCT</router-link></a>
            <a><router-link :to="{name: 'blogs'}"><i class="fa fa-shopping-basket" aria-hidden="true"></i> ORDER</router-link></a>
            <a><router-link :to="{name: 'users'}"><i class="fa fa-address-card-o" aria-hidden="true"></i> USERS</router-link></a>
            <a><router-link :to="{name: 'login'}"><i class="fa fa-user-circle" aria-hidden="true"></i> LOGIN</router-link></a>




        <!--<a><a v-on:cick.prevent="logout" href="login"><i class="fa fa-sign-in" aria-hidden="true"></i> Logout</a></a>-->
            <a><a v-on:click.prevent="logout" ><i class="fa fa-sign-in" aria-hidden="true"></i> LOGOUT </a></a>
        
        </div>
    </div>

</template>

<script>
export default {
  methods: {
  logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);

      this.$router.push({
        name: "login",
      });
    },
  }
}
</script>

<style scoped>
    /* The side navigation menu */
    div.img img {
        width: 250px;
        height: 250px;
    }
     .title {
        font-family: 'itim', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: rgb(255, 255, 255);
        font-size: 40px;
        margin-top: 60px;
    }
.sidebar {
  margin: 0;
  padding: 0;
  width: 240px;
  background-color: #5d8d73;
  position: fixed;
  height: 100%;
  overflow: auto;
  font-size: 18px;
  border-radius: 10px 10px 10px 10px;

}

/* Sidebar links */
.sidebar a {
  display: block;
  color: white;
  padding: 9px; /* ห่างจากตัวออกไป */
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #04AA6D;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #61c4a9;
  border-radius: 10px 10px 10px 10px;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

.sidebar a.router-link-active{
    color: white;
    background-color: #a1d0be;
     border-radius: 10px 10px 10px 10px;

}

</style>