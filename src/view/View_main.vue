<script setup lang="ts">
import Swiper from "swiper";
import sliderMain from "@/components/MainComponents/sliderMain.vue";
import { ref, onMounted } from "vue";
import scrollText from "@/components/MainComponents/scrollText.vue";
import "swiper/css";
import MainVerticalSlider from "@/components/MainComponents/mainVerticalSlider.vue";
import buttonBack from '@/components/buttonBack.vue';
import brands from '@/components/MainComponents/brands.vue';
import genderSeparation from '@/components/MainComponents/genderSeparation.vue';
import sneakerBlog from '@/components/MainComponents/sneakerBlog.vue';
import shipping from '@/components/MainComponents/shipping.vue';
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
      <div class="flex gap-5 items-center">
      <buttonBack/>
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
    <shipping/>
    </div>

  </div>
</template>
