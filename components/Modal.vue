<template>
<!-- component -->
<div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover  "   id="modal-id">
   	<div  class="absolute bg-black bg-opacity-30 inset-0 z-0" @click="closeModal"></div>
    <div class="w-full  max-w-xs p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
      <!--content-->
      <div class="">
        <!--body-->
        <div class="text-center  flex-auto justify-center">    
           <div id="preview" class="mb-6 object-contain overflow-hidden">
            <img v-if="url" :src="url" />
          </div> 
           <div ref="imgref" @click='imageClick'  class="flex items-center justify-center  mx-auto h-12 w-12 rounded-full bg-red-100 cursor-pointer">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  text-red-600 " viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                    </svg>
           </div>
          <h2 class="text-xl font-bold py-2 ">Upload Post</h2>
            <div>
                <input type="file" hidden ref='filepicker' @change="onFileChange">
            </div>
            <div class="mt-2">
                <input type="text" ref="caption" class="border-none focus:ring-0 w-full text-center" placeholder="please enter a caption">
            </div>
          

        </div>
        <!--footer-->
        <div class="p-3   text-center md:block">
            <button class="w-full mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-red-600">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    setup(props, {emit}){
        const filepicker = ref('')
        const imgref = ref(null)
        const caption = ref(null)
        const url = ref(null)
        const file = ref(null)
        
        const closeModal = (event) =>{
             emit('close',event.target.value)                           
         }
        const imageClick = () =>{
        filepicker.value.click()                 
         }
     const  onFileChange  = (e) => {

      const file = e.target.files[0];
      url.value = URL.createObjectURL(file);
      imgref.value.classList.add('hidden')
    }

      return{
          closeModal,
          filepicker,
          imageClick,
          url,
          file, 
          onFileChange,
          imgref,
          caption
        
      }
    }
}
</script>

<style>

</style>