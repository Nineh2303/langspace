<template>
  <router-link @mouseleave="isHover=false" @mouseenter="isHover=true" to="/"
               class="w-[25%] bg-blue-100 p-4 rounded-lg pb-[20px] transition-all duration-500 relative flex flex-col justify-center items-center
      max-lg:w-full max-lg:mt-5
">
    <div class="w-full">
      <img :src="props.courseImg" class="w-full" alt="">
      <h1 class="text-[#1030bf] text-[22px] font-bold mt-5 ">{{ props.courseName }}</h1>
      <p class="text-gray-700 text-[16px]"> {{ props.courseDescription }} </p>
    </div>
    <div class="absolute top-0 w-full h-full transition-all duration-500 bg-black rounded-lg"
          :class="isHover ?'opacity-40' : 'opacity-0' "
    >
    </div>
    <router-link to="/" class="absolute w-[75%] h-[40px] bg-[#1030bf] text-white font-bold
                        rounded-lg transition-all duration-500 flex justify-center items-center hover:bg-[#ffbb01] hover:text-black"
            :class="isHover?'opacity-100' : 'opacity-0'"
    >
      Tìm hiểu thêm
      <ArrowLongRightIcon class="size-6 ml-[5px]"/>
    </router-link>

  </router-link>
</template>

<script setup lang="ts">
import {ArrowLongRightIcon} from "@heroicons/vue/20/solid"
import {ref} from "vue"

const isHover = ref<boolean>()

interface courseProps {
  courseImg?: String,
  courseName?: String,
  courseDescription?: String
}

const props = defineProps<courseProps>()
</script>

<style lang="scss" scoped>

</style>