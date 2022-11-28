<template>
  <div
    class="h-screen overflow-x-hidden"
    :class="
      this.lightMode
        ? 'bg-white text-black'
        : 'bg-black brightness-75 text-white'
    "
  >
    <div class="bg-grass">
      <partials-Navbar />
      <main class="container m-auto">
        <Nuxt />
      </main>
      <partials-Footer />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("zoo", ["lightMode"]),
  },
};
</script>

<style scoped>
.bg-grass {
  background-image: url("../static/images/real-grass.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
}
</style>
