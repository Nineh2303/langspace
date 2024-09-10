<template>
  <div @mouseenter="isHover= true" @mouseleave="isHover= false">
    <router-link to="/" class="flex items-center">{{ props.menuName }}
        <ChevronDownIcon v-if="isDropdown" class="size-8 pl-2"/>
    </router-link>
    <div class="bg-blue-600 h-1 transition-all  duration-300 max-lg:hidden" :class="isHover ? 'w-full' : 'w-0'"/>
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