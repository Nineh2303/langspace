<template>
  <div class="fixed top-0 w-full flex flex-col items-center border-b-2">
    <div class="relative w-[80%] h-auto flex flex-row lg:space-x-[7%] items-center max-[1400px]:justify-between max-lg:w-full max-lg:px-[20px]">
     <router-link to="/course" @click="handleMenu">
       <img src="@/assets/logo.jpg" class="h-[100px] max-lg:h-[60px]" alt="">
     </router-link>
      <ul class="flex flex-row items-center space-x-[50px] h-full bg-white transition-all duration-500 overflow-hidden
      max-2xl:space-x-[30px]
      max-lg:absolute max-lg:ml-0 max-lg:flex-col max-lg:content-center
      max-lg:items-start max-lg:w-[100%] max-lg:top-[100px] max-lg:space-x-0 max-lg:h-[1000px]"
          :class="!dropMenu ?' max-lg:left-[-1000px]' : 'max-lg:left-0'">
        <!--        class=" w-full text-lg font-bold p-[5px] hover:bg-[#1030bf] hover:text-white rounded-[5px]"-->
        <li class="flex items-center font-bold text-lg max-lg:border-b-2 max-lg:w-full px-5 py-2">
          <HeaderMenuComponent menu-name="Trang chủ" :handle="()=>handleMenu()" :is-dropdown="false" />
        </li>
        <li class="flex items-center font-bold text-lg max-lg:border-b-2 max-lg:w-full px-5 ">
          <HeaderMenuComponent menu-name="Langspace là ai" :handle="()=>handleMenu()" :is-dropdown="false"/>
        </li>
        <li class="flex items-center font-bold text-lg max-lg:border-b-2 max-lg:w-full px-5">
          <HeaderMenuComponent menu-name="Các khóa học"  :handle="()=>handleMenu()":is-dropdown="true" :drop-down-data="listCourse"/>
        </li>
        <li class="flex items-center font-bold text-lg max-lg:border-b-2 max-lg:w-full px-5">
          <HeaderMenuComponent menu-name="Lịch khai giảng" :handle="()=>handleMenu()" :is-dropdown="false"/>
        </li>
        <li class="flex items-center font-bold text-lg max-lg:border-b-2 max-lg:w-full px-5">
          <HeaderMenuComponent menu-name="Blog"  :handle="()=>handleMenu()" :is-dropdown="false"/>
        </li>
        <li class="flex items-center justify-center font-bold text-lg max-lg:w-full  lg:hidden">
          <button
              class="bg-[#1030bf] w-[175px] h-[35px] text-md text-white font-bold flex items-center justify-center rounded-lg hover:bg-[#ffbb01] hover:text-black
              max-lg:w-[75%] max-lg:mt-[25px] max-[1400px]:w-[75px]
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
const listCourse:string[] = [
    "Khóa mất gốc",
    "Khóa cơ bản",
    "Khóa nâng cao",

]
const handleMenu = ()=>{
  dropMenu.value =!dropMenu.value
}
</script>

<style lang="scss" scoped>

</style>