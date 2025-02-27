<template>
    <div class="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
        <Story :profile="suggest"/>       
    
    </div> 
</template>
<script>
import Story from "/components/Story.vue";
import { faker } from "@faker-js/faker";
import { watchEffect, ref } from "vue";

export default {
  components: { Story },
  setup() {
    const suggest = ref([]);

    watchEffect(() => {
      const suggestions = [...Array(20)].map((_, i) => ({
        id: i,
        name: faker.person.fullName(),       // Correct for v8+
        username: faker.internet.userName(),   // Use the internet module for username
        email: faker.internet.email(),
        company: faker.company.name(),
        avatar: faker.image.avatar(),
        address: {
          street: faker.location.street(),
          city: faker.location.city(),
          state: faker.location.state(),
          country: faker.location.country(),
          zipCode: faker.location.zipCode(),
        },
      }));

      console.log(suggestions); // Debug: Check the generated suggestions
      suggest.value = suggestions;
    });

    return {
      suggest,
    };
  },
};
</script>



<style>

</style>