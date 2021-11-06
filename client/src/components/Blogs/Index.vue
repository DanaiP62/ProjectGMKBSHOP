<template>
  <div>
<b-container class="bv-example-row">

  <div class="" >
    <b-row class="text-left">
         <b-col></b-col>

         <b-col cols="10" class="bg1">


    <center><h1>Place an Order</h1></center>
  <!--   <p><button v-on:click="logout">Logout</button></p> -->
    <center><h5>Order: {{ blogs.length }} </h5></center>
<hr>
    <center><p><b-button pill variant="success" v-on:click="navigateTo('/blog/create')"> Order </b-button></p></center>

<br>
    <div class="box1" v-for="blog in blogs" v-bind:key="blog.id">
      <p>Order: {{ blog.id }}</p>
      <p>Name: {{ blog.firstname }}</p>
      <p>Lastname: {{ blog.lastname }}</p>
      <p>Product Name: {{ blog.nroom }}</p>
      <p>Num: {{ blog.pnum }}</p>
      <p>Tel: {{ blog.tel }}</p>
     <!-- <p>วันที่เริ่มต้น: {{ blog.dates }}</p>
      <p>เวลาที่เริ่มต้น: {{ blog.times }}</p>
      <p>วันที่สิ้นสุด: {{ blog.datee }}</p>
      <p>เวลาที่สิ้นสุด: {{ blog.timee }}</p>
      <p>อื่นๆ : {{ blog.other }}</p> -->
      <hr><p>
        <b-button pill variant="primary" v-on:click="navigateTo('blog/'+blog.id)"> Check Your Order </b-button>
      <!--  <b-button pill variant="warning" v-on:click="navigateTo('/blog/edit/' + blog.id)"> แก้ไขการจอง </b-button> -->
        <b-button pill variant="danger" v-on:click="deleteBlog(blog)"> Cancel Your Oreder</b-button>
      </p>
      
    </div>
    
</b-col>
      <b-col> </b-col>
     </b-row>

     </div>
</b-container>

  </div>
</template>
<script>
import BlogService from "@/services/BlogsService";
export default {
  data() {
    return {
      blogs: [],
    };
  },
  async created() {
    this.blogs = (await BlogService.index()).data;
  },
  methods: {

  /*   logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login",
      });
    },
    */
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteBlog(blog) {
      let result = confirm("Are you sure cancel order now?");
      if (result) {
        try {
          await BlogService.delete(blog);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.blogs = (await BlogService.index()).data;
    },
  },
};
</script>
<style scoped>

</style>