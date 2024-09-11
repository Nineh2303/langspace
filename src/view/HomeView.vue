<template>
  <div class=" relative w-full justify-start items-center overflow-hidden">
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
          <img src="@/assets/banner1-scaled.jpg" alt="" class="w-full">
          </div>
        </SwiperSlide>
      </Swiper>
    <div class="bg-[url('assets/1-1.png')] w-full flex justify-between max-lg:flex-col">
      <div class="pt-[150px]">
        <h1 class="text-[20px] text-[#1030bf] font-bold max-lg:text-[18px]">TIẾNG ANH NHƯ " GIÓ " CÙNG LANGSPACE</h1>
        <h1 class="text-[35px] text-[#1030bf] font-bold pt-[10px] max-lg:text-[30px]">
          MÔ HÌNH KHOÁ HỌC UNITE <br> THỰC CHIẾN CÙNG "TÂY"
        </h1>
        <p class="text-xl italic font-bold">Kết hợp độc đáo giữa học trên lớp và cùng người nước ngoài đi tham quan, cà phê, đi chợ, trò chơi dân gian,...</p>

      </div>
      <img src="@/assets/Lo-trinh-tach-nen-1.png" alt="" class="pt-[50px] w-[750px] max-lg:pt-[25px]">
    </div>
  </div>
  <div class="bg-[url('assets/Background_web.jpg')] mt-5 h-[450px] w-full flex justify-between max-lg:flex-col bg-cover">
      <div class="pt-[25px] pl-[100px]">
        <h1 class="text-[60px] text-white font-bold">Chọn Langspace vì điều gì ?</h1>
        <div class="flex items-center py-2">
          <div class="h-5 w-5 rounded-full bg-[#ffbb01]"/>
          <p class="text-white text-lg font-bold ml-2">Thực chiến Tiếng Anh tối đa trên lớp và ngoại khoá</p>
        </div>
        <div class="flex items-center py-2">
          <div class="h-5 w-5 rounded-full bg-[#ffbb01]"/>
          <p class="text-white text-lg font-bold ml-2">Không dạy "công nghiệp" - không nhồi nhét học <viên></viên></p>
        </div>
        <div class="flex items-center py-2">
          <div class="h-5 w-5 rounded-full bg-[#ffbb01]"/>
          <p class="text-white text-lg font-bold ml-2">Không chèo kéo, "vẽ vời" đóng thêm tiền</p>
        </div>
        <div class="flex items-center py-2">
          <div class="h-5 w-5 rounded-full bg-[#ffbb01]"/>
          <p class="text-white text-lg font-bold ml-2">Lớp ít học viên đảm bảo ai cũng được tương tác</p>
        </div>
        <div class="flex items-center py-2">
          <div class="h-5 w-5 rounded-full bg-[#ffbb01]"/>
          <p class="text-white text-lg font-bold ml-2">Giáo viên tận tâm, năng động, hài hước</p>
        </div>
        <button
            class="bg-[#ffbb01] w-[200px] h-[50px] text-xl text-[#1030bf] font-bold flex items-center justify-center rounded-lg mt-5
            hover:bg-[#1030bf] hover:text-[#ffbb01]
">
          Đăng ký ngay
          <ArrowLongRightIcon class="size-6 ml-5 cursor-pointer"/>
        </button>
      </div>
  </div>
<!--      <Loading class="fixed top-0" :class=" !isLoading && `loading`" />-->
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide } from "swiper/vue"
import {Autoplay} from "swiper/modules"
import "swiper/css"
import {ref} from "vue";
import {ArrowLongRightIcon} from "@heroicons/vue/20/solid";
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