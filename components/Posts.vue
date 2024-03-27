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
      userImg: require("../src/assets/img/actmore.png"),
      img:require("../src/assets/img/actmore.png"),
      caption:"Crazy Thang",
      likes: "3 likes"
    },
      {
      id: "1234",
      username:"Smith",
      userImg: require("../src/assets/img/ChrisV.png"),
      img:require("../src/assets/img/ChrisV.png"),
      caption:"Working",
      likes:"1 likes"
    },
      {
      id: "1235",
      username:"Gifty",
      userImg: require("../src/assets/img/chiomaBDAYV002.png"),
      img:require("../src/assets/img/chiomaBDAYV002.png"),
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