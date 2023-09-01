<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Greet from "./components/Greet.vue";
import Welcome from "./components/Welcome.vue";
import Foot from "./buttom/Foot.vue";
import Below from "./buttom/Below.vue";
import Test from "./buttom/Test.vue";
</script>
<template>
  <Welcome />
  <Greet />
  <div>
    <Test />
  </div>
  <div class="index">
    <Below />
  </div>
  <div class='footer'>
    <Foot />
  </div>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>