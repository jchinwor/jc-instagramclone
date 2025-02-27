<template>
  <div ref="modal"  :class="{'hidden': !showModal}">
      <Modal @close="modalHandler"/>
  </div>
  <div class="shadow-sm border-b bg-white sticky top-0 z-50"> 
      <div class="flex justify-between mx-5 items-center max-w-6xl lg:mx-auto">
          <div class="relative md:hidden cursor-pointer  flex-shrink-0 w-8"  >
              <img src="../src/assets/img/instalogo.png" alt="instagram logo" >
          </div>
          
          <div class="relative hidden md:inline-grid   cursor-pointer w-24">
              <img src="../src/assets/img/instlogo2.png" alt="instagram logo" >
          </div> 

          <div class="max-w-xs">
             <div class="mt-1 p-3 relative rounded-md">
              <div class="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input type="text" placeholder="search" class="bg-gray-50 block w-full pl-10  sm:text-sm border-gray-300 focus:border-black focus:ring-black rounded-md">
          </div>
          </div>
         
          <div class="flex justify-end items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="navbtn" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <div class="relative navbtn ">
              <svg xmlns="http://www.w3.org/2000/svg" class="navbtnp" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
                <div class="absolute -top-2 -right-1 text-xs w-5 h-5 text-white bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                  3
                </div>
            </div>
        
            <svg @click="modalHandler" xmlns="http://www.w3.org/2000/svg" class="navbtn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="navbtn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="navbtn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <svg @click="toggleNav" ref="burger" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 md:hidden cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
              <div class="px-4 cursor-pointer hidden " ref="close" @click="closeHandler">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                </div>
            <img src="../src/assets/img/icon2.png" alt="profilepix" class="rounded-full w-10 hidden md:block cursor-pointer">
            
          </div>

          
      </div>

      <div id="menu" class="mb-4 md:hidden" :class="{'hidden': !showMenu}">
                  <div class="flex justify-center items-center space-x-4 max-w-6xl mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mobile" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <div class="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mobile" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                    <div class="absolute -top-2 -right-1 text-xs w-5 h-5 text-white bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                      3
                    </div>
                </div>
                <svg @click="modalHandler" xmlns="http://www.w3.org/2000/svg" class="mobile" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" class="mobile" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="mobile" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                         
              </div>
      </div>
 
  </div>

</template>

<script>
import { ref } from '@vue/reactivity'
import Modal from "/components/Modal.vue"
export default {
  components:{Modal},
    setup(){
      const showMenu = ref(false)
      const showModal = ref(false)
      const close = ref(null)
      const burger = ref(null)
      const modal = ref(null)

      const toggleNav = () =>{
        burger.value.classList.add('hidden')
        close.value.classList.remove('hidden')
        showMenu.value = !showMenu.value     
      }
      const modalHandler = () =>{
          
            showModal.value = !showModal.value  
       
       
               
      }
      const closeHandler = () =>{
        showMenu.value = !showMenu.value
        burger.value.classList.remove('hidden')      
        close.value.classList.add('hidden')      
      }

      return {
        showMenu,
        toggleNav,
        closeHandler,
        close,
        burger,
        modal,
        modalHandler,
        showModal
      }
    }
}
</script>

<style>

</style>
