<template>

  <main class="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
  <section class="col-span-2 overflow-hidden">
    <Stories />
    <Posts />
  </section>
  <section class="hidden xl:inline-grid md:col-span-1">
      <div class="fixed top-20">
      <MiniProfile />
      <Suggestions />
      </div>
  </section>
  </main>

</template>

<script>
import Posts from "/components/Posts"
import Stories from "/components/Stories.vue"
import MiniProfile from "/components/MiniProfile.vue"
import Suggestions from "/components/Suggestions.vue"
export default {
  components: {Stories,Posts, MiniProfile, Suggestions}

}
</script>

<style>

</style>