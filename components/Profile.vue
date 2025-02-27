<template>
  <div >
      <!-- <img :src="image" alt="profile"> -->
      <div v-for="p in pro" :key="p" class="flex items-center justify-between mt-3">
          <img :src="p.avatar" alt="" class="rounded-full w-10 h-10 border-2">
          <div class="flex-1 ml-4">
              <h2 class="font-sembold text-sm">{{p.username}}</h2>
              <h3 class="text-xs text-gray-400">Works at {{p.company}}</h3>
          </div>
          <button class="text-xs font-bold text-blue-400">Follow</button>
      </div>
  </div>

</template>

<script>
export default {
    props:['pro']

}
</script>

<style>

</style>