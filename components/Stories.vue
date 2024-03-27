<template>
    <div class="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
    <div v-for="profile in suggest" :key="profile.id">
        <Story :profile="profile"/>       
    </div>  
    </div> 
</template>

<script>
import Story from '/components/Story.vue'
import faker from "faker"
import { watchEffect } from '@vue/runtime-core'
import { ref } from '@vue/reactivity'
export default {
    components:{Story},
    setup(){
      const suggest = ref([])
      const effect = watchEffect(()=>{
          
          const suggestions = [...Array(20)].map((_, i) => [{
              ...faker.helpers.contextualCard(),
              id:i,
             
          }]); 
          
             suggest.value = suggestions
            //  console.log(suggest.value)

        })

        return{
            effect,
            suggest
        }
    }

}
</script>

<style>

</style>