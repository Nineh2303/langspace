<template>
  <div @mouseenter="isHover= true" @mouseleave="isHover= false" class="relative" @click="isHover =!isHover">
    <router-link to="/" class="flex items-center">{{ props.menuName }}
        <ChevronDownIcon v-if="isDropdown" class="size-8 pl-2"/>
    </router-link>
    <div v-if="!isDropdown" class="bg-blue-600 h-1 transition-all  duration-500 max-lg:hidden" :class="[isHover ? 'w-full' : 'w-0']"/>
    <ul v-if="isDropdown"
          :class="isHover ?'max-h-[400px]':'max-h-0'"
        class="fixed bg-white h-[200px] mt-2 transition-all duration-500 w-[200px] z-10 overflow-hidden shadow-sm shadow-gray-500 rounded-lg
        max-lg:w-[300px]
">


      <li v-for="(course,index) in dropDownData" class="h-[50px] w-full flex px-5 py-2 max-lg:">
        <router-link to="/"
                     class=" w-full"
                     :class="index+1==dropDownData?.length ? '' :'border-b-2'"
        >
          {{course}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {ChevronDownIcon} from "@heroicons/vue/20/solid"

interface HeaderMenuProps {
  menuName: string,
  isDropdown: boolean
  dropDownData? :string  []
}

const props = defineProps<HeaderMenuProps>()
const isHover = ref<boolean>(false)
</script>

<style lang="scss" scoped>

</style>