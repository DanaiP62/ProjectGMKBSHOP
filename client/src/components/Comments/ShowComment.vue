﻿<template>
  <div> 
    
    <b-container class="bv-example-row">
    <b-row class="text-left">
         <b-col></b-col>

         <b-col cols="10" class="bg3">


    <h1>SHOW DETAILS {{ comment.id }} </h1><hr>

<div class="box3">
    <h5>Product NO: {{ comment.id }}</h5><hr>
    <p>Product Name: {{ comment.title }}</p>

    <p>Picture: {{ comment.thumbnail }}</p>
      
      <transition name="fade"> 
        <div class="thumbnail-pic" v-if="comment.thumbnail != 'null'">
          <img :src="BASE_URL+comment.thumbnail" alt="thumbnail">
        </div>
      </transition>

    <p>Details: {{ comment.content }}</p>
<hr>
    <p>
      
      <b-button pill variant="secondary" v-on:click="navigateTo('/comments')">BACK</b-button>
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
      comment: null,
    };
  },
  async created() {
    try {
      let commentId = this.$route.params.commentId;
      this.comment = (await CommentService.show(commentId)).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style scoped>
</style>