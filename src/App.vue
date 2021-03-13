<template>
  <v-app>
    <v-main class="app">
      <Calendar />
    </v-main>
  </v-app>
</template>

<script>
import Calendar from "./components/Calendar.vue";

export default {
  name: "App",

  components: {
    Calendar,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
* {
  margin: 0;
}

.app {
  background-image: url("./assets/background.jpg");
  background-size: cover;
  width: 100%;
  height: auto;
}
</style>
