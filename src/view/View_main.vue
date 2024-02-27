<script setup lang="ts">
import Swiper from "swiper";
import sliderMain from "@/components/sliderMain.vue";
import { ref, onMounted } from "vue";
import scrollText from "@/components/scrollText.vue";
import "swiper/css";
import MainVerticalSlider from "@/components/mainVerticalSlider.vue";
import brands from '@/components/brands.vue';
import genderSeparation from '@/components/genderSeparation.vue';
import sneakerBlog from '@/components/sneakerBlog.vue';
import shippinng from '@/components/shippinng.vue';
let mySwiper;
const swiperContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  if (swiperContainer.value) {
    mySwiper = new Swiper(swiperContainer.value, {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 3000,
      },
    });
  }
});
</script>
<template>
  <div class="container">
    <div class="flex ml-[50px] mt-5 gap-[15px] justify-between items-center">
      <div class="flex gap-5">
        <button
          class="h-[35px] w-[35px] border rounded-[10px] border-[#F2F2F2] flex justify-center items-center text-white hover:bg-slate-600 transition hover:scale-[1.2] disabled:bg-slate-400 cursor-pointer"
          @click="$router.go(-1)"
        >
          <img src="/arrow-right.svg" class="rotate-180" alt="close button" />
        </button>
        <h2 class="text-3xl">Главная</h2>
      </div>
    </div>

    <h1 class="text-3xl text-[#000000] text-center font-sans font-[600] mt-10">
      Приветствуем вас в BENZ SHÖP
    </h1>

    <sliderMain />

    <div class="bg-[#f8f8ff]">
    <scrollText />
    <MainVerticalSlider />
    <brands/>
    <genderSeparation/>
    <sneakerBlog/>
    <shippinng/>
    </div>

  </div>
</template>
