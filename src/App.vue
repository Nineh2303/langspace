<template>
  <Header/>
  <div class="mt-[120px]">
    <RouterView/>
  </div>
</template>
<script setup lang="ts">
import Header from "./components/Header.vue"
import {ref} from "vue";
</script>
<style scoped>

</style>
