<template>
  <div class="fixed top-0 w-full flex flex-col items-center">
    <div class="relative w-[80%] h-[100px] flex flex-row justify-between items-center max-[1400px]:justify-start">
      <img src="@/assets/logo.jpg" class="h-[100px]" alt="">
      <ul class="flex flex-row items-center space-x-[100px] h-full bg-white transition-all duration-500 overflow-hidden
      max-lg:absolute lg-max:top-0 max-lg:flex-col max-lg:content-center
      max-lg:items-start max-lg:w-full max-lg:top-[100px] max-lg:space-x-0"
          :class="dropMenu ?' max-lg:h-[250px]' : 'max-lg:h-0'">
        <!--        class=" w-full text-lg font-bold p-[5px] hover:bg-[#1030bf] hover:text-white rounded-[5px]"-->
        <li class="flex items-center font-bold text-lg max-lg:border-b-2 max-lg:w-full max-lg:h-[50px]">
          <HeaderMenuComponent menu-name="Trang chủ" :is-dropdown="false"/>
        </li>
        <li class="flex items-center font-bold text-lg max-lg:border-b-2 max-lg:w-full max-lg:h-[50px]">
          <HeaderMenuComponent menu-name="Langspace là ai" :is-dropdown="false"/>
        </li>
        <li class="flex items-center font-bold text-lg max-lg:border-b-2 max-lg:w-full max-lg:h-[50px]">
          <HeaderMenuComponent menu-name="Các khóa học" :is-dropdown="true"/>
        </li>
        <li class="flex items-center font-bold text-lg max-lg:border-b-2 max-lg:w-full max-lg:h-[50px]">
          <HeaderMenuComponent menu-name="Lịch khai giảng" :is-dropdown="false"/>
        </li>
        <li class="flex items-center font-bold text-lg max-lg:w-full max-lg:h-[50px] lg:hidden">
          <button
              class="bg-[#1030bf] w-[200px] h-[35px] text-md text-white font-bold flex items-center justify-center rounded-lg hover:bg-[#ffbb01] hover:text-black
              max-lg:w-full max-lg:mt-[10px] max-[1400px]:w-[100px]
">
            Đăng ký ngay
            <ArrowLongRightIcon class="size-6 ml-5 cursor-pointer"/>
          </button>
        </li>
      </ul>
      <button
          class="bg-[#1030bf] w-[200px] h-[35px] text-md text-white font-bold flex items-center justify-center rounded-lg hover:bg-[#ffbb01] hover:text-black
              max-lg:w-full max-lg:mt-[10px] max-[1400px]:w-[100px] max-lg:hidden
">
        Đăng ký ngay
        <ArrowLongRightIcon class="size-6 ml-5 cursor-pointer"/>
      </button>
     <div class="transition-all duration-500">
       <Bars3Icon v-if ="!dropMenu" class="size-10 lg:hidden cursor-pointer" @click="dropMenu =!dropMenu"/>
       <XMarkIcon v-else class="size-12 lg:hidden cursor-pointer" @click="dropMenu =!dropMenu"/>
     </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {ArrowLongRightIcon, Bars3Icon, XMarkIcon} from "@heroicons/vue/20/solid"
import HeaderMenuComponent from "./HeaderMenuComponent.vue";
const dropMenu = ref(false)


</script>

<style lang="scss" scoped>

</style>