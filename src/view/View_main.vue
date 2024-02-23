<script setup lang="ts">
import Swiper from 'swiper';
import sliderMain from '@/components/sliderMain.vue'
import { ref, onMounted } from 'vue';
import 'swiper/css';


let mySwiper;

const swiperContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  if (swiperContainer.value) {
    mySwiper = new Swiper(swiperContainer.value, {
      // Опции Swiper.js
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 3000,
      },

    });
  }
});


</script>
<template>
  <div class="container min-h-[600px]">
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
<!-- 
  <div ref="swiperContainer"  class="w-full h-full overflow-hidden mt-20">
    <div class="swiper-wrapper w-full h-full">
      <div class="swiper-slide justify-center" v-for="(item, index) in items" :key="index">
        
        <img :src="item.imageUrl" alt="Slide Image" class="w-[100%] h-full object-cover" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div> -->

  <sliderMain/>

</div>

</template>

<style scoped>
.swiper-slide{
  display: flex !important;
}
</style>