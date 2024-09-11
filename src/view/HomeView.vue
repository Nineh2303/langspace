<template>
  <div class=" relative w-full flex justify-start items-center overflow-hidden">
      <Swiper
          align="center"
          :slidesPerView="1"
          :loop="true"
          :autoplay="
          {
            delay: 400
          }
         "
      >
        <SwiperSlide >
          <div>
            <img src="@/assets/img_home_2.jpg" alt="" class="w-full">
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div>
          <img src="@/assets/img_home_1.jpg" alt="" class="w-full">
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div>
            <img src="@/assets/img_home_1.jpg" alt="" class="w-full">
          </div>
        </SwiperSlide>
      </Swiper>

  </div>
<!--      <Loading class="fixed top-0" :class=" !isLoading && `loading`" />-->
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide } from "swiper/vue"
import {Autoplay} from "swiper/modules"
import "swiper/css"
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