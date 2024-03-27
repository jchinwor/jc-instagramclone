<template>
<div class="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
    <Header />
    <Feed />
</div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '/components/Header.vue'
import Feed from '/components/Feed.vue'


export default {
  name: 'Home',
  components: { Header,Feed }
}
</script>
