<template>
  <div class=" relative w-full justify-start items-center overflow-hidden">
    <Swiper
        :slidesPerView="1"
        :loop="true"
        :autoplay="
          {
            delay: 400
          }
         "
    >
      <SwiperSlide class="px-5">
        <div>
          <img src="@/assets/img_home_2.jpg" alt="">
        </div>
      </SwiperSlide>
      <SwiperSlide class="px-5">
        <div>
          <img src="@/assets/banner1-scaled.jpg" alt="">
        </div>
      </SwiperSlide>
    </Swiper>
  </div>

  <div
      class="bg-[url('assets/1-1.png')] w-full flex justify-between max-lg:flex-col rounded-lg h-[600px] max-lg:h-auto">
    <div class="pt-[15px]">
      <h1 class=" mt-[120px] text-[20px] text-[#1030bf] font-bold max-lg:text-[18px] max-lg:mt-2">TIẾNG ANH NHƯ " GIÓ "
        CÙNG LANGSPACE</h1>
      <h1 class="text-[35px] text-[#1030bf] font-bold pt-[10px] max-lg:text-[30px]">
        MÔ HÌNH KHOÁ HỌC UNITE <br> THỰC CHIẾN CÙNG "TÂY"
      </h1>
      <p class="text-xl italic font-bold max-lg:text-[15px]">Kết hợp độc đáo giữa học trên lớp và cùng người nước ngoài
        đi tham quan, cà phê, đi chợ, trò chơi dân gian,...</p>

    </div>
    <img src="@/assets/Lo-trinh-tach-nen-1.png" alt="" class="pt-[50px] w-[750px] max-lg:pt-[25px]">
  </div>
  <div class="bg-[url('assets/Background_web.jpg')] mt-5 w-full flex justify-between
  max-lg:flex-col bg-cover rounded-lg h-[600px] max-lg:h-auto max-lg:py-5">
    <div class="pt-[25px] pl-[100px] max-lg:px-[10px]">
      <h1 class="text-[60px] text-white font-bold max-lg:text-[25px]">Chọn Langspace vì điều gì ?</h1>
      <div class="flex items-center py-2">
        <div class="h-5 w-5 rounded-[50%] bg-[#ffbb01] max-lg:h-[10px] max-lg:w-[10px]"/>
        <p class="text-white text-lg font-bold ml-2 max-lg:text-[15px]">Thực chiến Tiếng Anh tối đa trên lớp và ngoại
          khoá</p>
      </div>
      <div class="flex items-center py-2">
        <div class="h-5 w-5 rounded-full bg-[#ffbb01] max-lg:h-[10px] max-lg:w-[10px]"/>
        <p class="text-white text-lg font-bold ml-2 max-lg:text-[15px]">Không dạy "công nghiệp" - không nhồi nhét học
          viên
        </p>
      </div>
      <div class="flex items-center py-2">
        <div class="h-5 w-5 rounded-full bg-[#ffbb01] max-lg:h-[10px] max-lg:w-[10px]"/>
        <p class="text-white text-lg font-bold ml-2 max-lg:text-[15px]">Không chèo kéo, "vẽ vời" đóng thêm tiền</p>
      </div>
      <div class="flex items-center py-2">
        <div class="h-5 w-5 rounded-full bg-[#ffbb01] max-lg:h-[10px] max-lg:w-[10px]"/>
        <p class="text-white text-lg font-bold ml-2 max-lg:text-[15px]">Lớp ít học viên đảm bảo ai cũng được tương
          tác</p>
      </div>
      <div class="flex items-center py-2">
        <div class="h-5 w-5 rounded-full bg-[#ffbb01] max-lg:h-[10px] max-lg:w-[10px]"/>
        <p class="text-white text-lg font-bold ml-2 max-lg:text-[15px]">Giáo viên tận tâm, năng động, hài hước</p>
      </div>
      <button
          class="bg-[#ffbb01] w-[200px] h-[50px] text-xl text-[#1030bf] font-bold flex  items-center justify-center rounded-lg mt-10
            hover:bg-[#fff] hover:text-[#ffbb01] max-lg:justify-around
">
        Đăng ký ngay
        <ArrowLongRightIcon class="size-6 ml-5 cursor-pointer"/>
      </button>
    </div>
  </div>
  <div class="mt-5 w-full flex justify-around
  max-lg:flex-col bg-cover rounded-lg h-[600px] max-lg:h-auto max-lg:py-5 max-lg:items-center max-lg:mt-1">
    <div class="flex flex-col max-lg:items-center">
      <h1 class="text-[50px] font-bold pt-[100px] text-[#1030bf] max-lg:text-[20px] max-lg:pt-[10px]">"MẤU CHỐT" HỌC TỐT
        <br class="max-lg:hidden"/> TIẾNG ANH</h1>
      <button
          class="bg-[#1030bf] w-[200px] h-[50px] text-xl text-white font-bold flex  items-center justify-center rounded-lg mt-5
             max-lg:justify-around">
        Đăng ký học thử
      </button>
    </div>
    <iframe
        src="https://www.youtube.com/embed/LsHz0-PXi5I"
        width="280px"
        height="500px"
        class="my-5 rounded-sm"
        referrerpolicy="strict-origin-when-cross-origin"
        loading="lazy"
    ></iframe>
  </div>
  <div class="w-full bg-[url('assets/3.jpg')] bg-cover flex flex-col items-center rounded-lg py-10">
    <div class="p-5 flex flex-col items-center w-full">
      <h1 class="text-[45px] text-white font-bold max-lg:text-[20px]">LỚP CHẤT LƯỢNG CAO - HỌC PHÍ RẺ</h1>
      <div class="w-[350px] border-2 max-lg:w-[50%]" ></div>
      <div class="w-[350px] border-2 mt-1 max-lg:w-[50%]"></div>
    </div>
    <div class="flex flex-row w-full h-[600px] space-x-[50px] pt-10 px-10 justify-center
                max-lg:flex-col max-lg:h-auto max-lg:space-x-0">
      <CourseData v-for="course in coursesData"  :course-img="course.courseImg"
                  :course-name="course.courseName"
                  :course-description="course.courseDescription"/>
    </div>
  </div>
  <!--      <Loading class="fixed top-0" :class=" !isLoading && `loading`" />-->
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue"

import "swiper/css"
import {ref} from "vue";
import {ArrowLongRightIcon} from "@heroicons/vue/20/solid";
import CourseData from "@/components/CourseData.vue";
import {coursesData} from "@/helper/datas.ts";
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