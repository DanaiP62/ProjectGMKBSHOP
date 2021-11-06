<template>
  <div>

   <b-container class="bv-example-row">
      <b-row class="text-left">
        <b-col></b-col>

        <b-col cols="10" class="bg1">

    <center><h1>CHECK ORDER :{{ blog.id }} </h1><hr></center>

<div class="box1">
    <p>Order: {{ blog.id }}</p>
      <p>Name: {{ blog.firstname }}</p>
      <p>Lastname: {{ blog.lastname }}</p>
      <p>Product Name: {{ blog.nroom }}</p>
      <p>Num: {{ blog.pnum }}</p>
      <p>Tel: {{ blog.tel }}</p>
      <p>Address: {{ blog.other }}</p>
<hr>
    <p>
      <b-button pill variant="warning" v-on:click="navigateTo('/blog/edit/' + blog.id)">
        EDIT ORDER
      </b-button>
      <b-button pill variant="secondary" v-on:click="navigateTo('/blogs')">BACK</b-button>
    </p>
</div>
    </b-col>
      <b-col> </b-col>
     </b-row>
</b-container>

  </div>
</template>

<script>
import BlogService from "@/services/BlogsService";
export default {
  data() {
    return {
      blog: null,
    };
  },
  async created() {
    try {
      let blogId = this.$route.params.blogId;
      this.blog = (await BlogService.show(blogId)).data;
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