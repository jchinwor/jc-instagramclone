<template>
  <div class="mt-4 ml-10">
        <div class="flex justify-between text-sm mb-5">
            <h3 class="text-sm font-bold text-gray-400">Suggestions for you</h3>
            <button class="text-gray-600 font-semibold">See All</button>
            </div>
             
                <Profile  :pro="suggest"/>
             
        
  </div>
</template>

<script>
import Profile from "/components/Profile.vue";
import { faker } from "@faker-js/faker";
import { watchEffect, ref } from "vue";

export default {
  components: { Profile },
  setup() {
    const suggest = ref([]);

    watchEffect(() => {
      const suggestions = [...Array(5)].map((_, i) => ({
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