<template>
  <div>
    This is home view
  </div>
<!--      <Loading class="fixed top-0" :class=" !isLoading && `loading`" />-->
</template>

<script setup lang="ts">
import {ref} from "vue";
// import Loading from "@/view/Loading.vue";
const isLoading = ref<boolean>(true)

setTimeout(() => {
  isLoading.value = false
}, 2000)
</script>

<style lang="css" scoped>
.loading {
  top: -100%;
  transition: ease-in-out 500ms;

}
</style>