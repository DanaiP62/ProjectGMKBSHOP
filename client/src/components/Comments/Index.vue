<template>
  <div>

    <b-container class="bv-example-row">
    <b-row class="text-left">
         <b-col></b-col>

         <b-col cols="10" class="bg3">


    <center><h1>All Product</h1></center>
  <!--   <p><button v-on:click="logout">Logout</button></p> -->
    <center><h5>Product Number: {{ comments.length }} </h5></center>
<hr>

    <center><p><b-button pill variant="success" v-on:click="navigateTo('/comment/create')">Add Product</b-button></p></center>
    <div  class="box3" v-for="comment in comments" v-bind:key="comment.id">
      <center><p>Product NO: {{ comment.id }}</p>
      <p>Product Name: {{ comment.title }}</p>
      <p>Picture: {{ comment.thumbnail }}</p></center>
      
      <transition name="fade"> 
        <div class="thumbnail-pic" v-if="comment.thumbnail != 'null'">
          <center><img :src="BASE_URL+comment.thumbnail" alt="thumbnail"></center>
        </div>
      </transition>
   
      <p>Details: {{ comment.content }}</p>
      
      <p><center>
        <b-button pill variant="primary" v-on:click="navigateTo('comment/'+comment.id)">All Details</b-button>
        <b-button pill variant="warning" v-on:click="navigateTo('/comment/edit/' +comment.id)">Edit Product</b-button>
        <b-button pill variant="danger" v-on:click="deleteComment(comment)"> Delete</b-button></center>
      </p>
      
    </div>

    </b-col>
      <b-col> </b-col>
     </b-row>
</b-container>

  </div>
</template>
<script>
import CommentService from "@/services/CommentsService";
export default {
  data() {
    return {
         BASE_URL: "http://localhost:8081/assets/uploads/",
      comments: [],
    };
  },
  async created() {
    this.comments = (await CommentService.index()).data;
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
    async deleteComment(comment) {
      let result = confirm("Are you sure you want to delete a Product?");
      if (result) {
        try {
          await CommentService.delete(comment);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.comments = (await CommentService.index()).data;
    },
  },
};
</script>
<style scoped>
</style>