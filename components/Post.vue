<template>
  <div class="bg-white my-7 border rounded-sm ">
      <div class="flex items-center p-5 ">
          <img :src="userImg" alt="" class="w-8 h-8 rounded-full object-contain border p-1 mr-2">
          <p class="flex-1 font-bold">{{username}}</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </div>
      <!-- image -->
      <img :src="img" class="object-cover " alt="">

      <!-- button -->
    <div class="flex justify-between px-4 pt-4">
        <div class="flex space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 btn" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 btn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 btn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 btn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
    </div>

    
    <div class="p-5 truncate">
        <p>{{likes}}</p>
      <span class="font-bold mr-1">{{username}} </span> {{caption}}
    </div>
   

    <form class="flex items-center p-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 btn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <input type="text" placeholder="add a comment..." class="border-none focus:ring-0 outline-none flex-1">
      <button class="font-semibold text-blue-400">Post</button>
    </form>
  </div>
</template>
  
<script>
export default {
props:['username','caption','username','caption','userImg','img','likes'],
  setup(){

   
  }
}
</script>

<style>

</style>