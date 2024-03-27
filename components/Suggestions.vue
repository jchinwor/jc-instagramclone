<template>
  <div class="mt-4 ml-10">
        <div class="flex justify-between text-sm mb-5">
            <h3 class="text-sm font-bold text-gray-400">Suggestions for you</h3>
            <button class="text-gray-600 font-semibold">See All</button>
            </div>
              <div v-for="profile in suggest" :key="profile.id">
                <Profile  :pro="profile"/>
              </div>
        
  </div>
</template>

<script>
import Profile from "/components/Profile.vue"
import faker from "faker"
import { watchEffect } from '@vue/runtime-core'
import { ref } from '@vue/reactivity'
export default {
    components:{Profile},
    setup(){
      const suggest = ref([])
      const effect = watchEffect(()=>{
          
          const suggestions = [...Array(5)].map((_, i) => [{
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