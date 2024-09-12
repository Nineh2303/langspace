<template>
  <Header/>
  <div class="mt-[100px] flex flex-col w-[75%] max-lg:w-[95%]">
    <RouterView/>
  </div>
</template>
<script setup lang="ts">
import Header from "./components/Header.vue"
</script>
<style scoped>

</style>
