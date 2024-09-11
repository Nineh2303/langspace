<template>
  <div @mouseenter="isHover= true" @mouseleave="isHover= false" class="h-auto" @click="isHover =!isHover">
    <router-link v-if="!isDropdown" to="/" class="flex flex-row items-center max-lg:h-[50px]">{{ props.menuName }}
    </router-link>
    <div  v-else class="flex flex-col overflow-hidden cursor-pointer max-lg:w-full">
      <h1 class="flex flex-row items-center max-lg:h-[50px]">
        {{ props.menuName }}
        <ChevronDownIcon class="size-6"/>
      </h1>
      <div class="absolute px-5 top-[75px] overflow-hidden flex flex-col
                  bg-white transition-all duration-500 rounded-lg shadow-sm shadow-gray-500
                  max-lg:rounded-none max-lg:relative max-lg:ml-[10px] max-lg:top-0 max-lg:shadow-none"
           :class="isHover ? 'max-h-[500px]' :'max-h-0'" >
<!--           -->
        <router-link to="/" v-for="(course, index) in dropDownData"
                     class=" text-base py-3 max-lg:ml-[10px] max-lg:py-1 max-lg:border-none w-[175px] hover:text-white"
             :class="index+1 == dropDownData?.length ? '' : 'border-b-2'">
          {{ course }}
        </router-link>

      </div>
    </div>
    <div v-if="!isDropdown" class="bg-blue-600 h-1 transition-all duration-500 max-lg:hidden max-lg:w-[95%]"
         :class="[isHover ? 'w-full' : 'w-0']"/>

  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";
import {ChevronDownIcon} from "@heroicons/vue/20/solid"

interface HeaderMenuProps {
  menuName: string,
  isDropdown: boolean
  dropDownData?: string  []
}

const props = defineProps<HeaderMenuProps>()
const isHover = ref<boolean>(false)
</script>

<style lang="scss" scoped>

</style>