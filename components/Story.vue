<template>
  <div v-for="name in profile" :key="name">
      
    <img :src="name.avatar" alt="user avatar"
     class="w-14 h-14 p-1.5 rounded-full border-red-500 border-2 object-contatin cursor-pointer transform hover:scale-110 transition duration-200 ease-out">
    <p class="text-xs w-14 truncate text-center ">{{name.username}}</p>
  </div>
</template>

<script>
export default {
props:['profile']
}
</script>

<style>

</style>