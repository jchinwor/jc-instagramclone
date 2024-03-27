<template>
  
  <div v-for="post in posts" :key="post.id">
     <Post :username=post.username :id=post.id 
     :img=post.img
     :userImg=post.userImg
     :caption=post.caption
     :likes=post.likes
      /> 
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Post from "/components/Post.vue"
export default {
    components:{Post},
    setup(){
       const posts = ref([
      {
      id: "123",
      username:"Netvision",
      userImg: require("../src/assets/img/1.jpeg"),
      img:require("../src/assets/img/1.jpeg"),
      caption:"Crazy Thang",
      likes: "3 likes"
    },
      {
      id: "1234",
      username:"Smith",
      userImg: require("../src/assets/img/2.jpeg"),
      img:require("../src/assets/img/2.jpeg"),
      caption:"Working",
      likes:"1 likes"
    },
      {
      id: "1235",
      username:"Gifty",
      userImg: require("../src/assets/img/3.jpeg"),
      img:require("../src/assets/img/3.jpeg"),
      caption:"Skynet Thang",
      likes:"8 likes"
    },
    ])

    return {
      posts
    }
    }
}
</script>

<style>

</style>