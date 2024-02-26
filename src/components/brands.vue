<script setup lang="ts">
import { ref } from "vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

const modules = ref([Pagination, Navigation, Autoplay]);
const items = ref([
  {
    id: 1,
    imageUrl:
      "https://static.street-beat.ru/upload/iblock/d0c/d0cce4e2fba49304d25a39de2a9ef5d6.svg",
			brandName: 'Vans',
  },
  {
    id: 2,
    imageUrl:
      "https://static.street-beat.ru/upload/iblock/4f7/4f773befa3ff5485a4e6c2d98c9ef00d.svg",
			brandName: 'TheNorthFace',
  },
  {
    id: 3,
    imageUrl:
      "https://static.street-beat.ru/upload/iblock/be7/be79be54f63add76b08e75dc6eedbfa7.svg",
			brandName: 'Nike',
  },
  {
    id: 4,
    imageUrl:
      "https://static.street-beat.ru/upload/iblock/3b4/3b4fe7d256fd066693ce400192ab81cc.svg",
			brandName: 'Puma',
  },
  {
    id: 5,
    imageUrl:
      "https://static.street-beat.ru/upload/iblock/ea2/ea28052b0d88d010a96b1bc1bc27f3e0.svg",
			brandName: 'Converse',
  },
  {
    id: 6,
    imageUrl:
      "https://static.street-beat.ru/upload/iblock/8b0/8b0db0a7d3c2bffa7e7df0c8843aa7f0.svg",
			brandName: 'Reebok',
  },
  {
    id: 7,
    imageUrl:
      "https://static.street-beat.ru/upload/iblock/d24/d24e44f9f5ce894b5cfb1289271318c9.svg",
			brandName: 'Adidas',
  },
  {
    id: 8,
    imageUrl:
      "https://static.street-beat.ru/upload/iblock/0d9/0d9a80d8726234ca418ef6cde0c523d1.svg",
			brandName: 'eastPack',
  },
  {
    id: 9,
    imageUrl:
      "https://static.street-beat.ru/upload/iblock/809/809d5927ce5cca568d98a0b053bf4f79.svg",
			brandName: 'Helly Hansen',
  },
  {
    id: 10,
    imageUrl:
      "https://static.street-beat.ru/upload/iblock/3f7/3f7fe697e8a65cdae39c543150e251d8.svg",
			brandName: 'Timberland',
  },
  {
    id: 11,
    imageUrl:
      "https://static.street-beat.ru/upload/iblock/189/189b04d3c24a105f24003e9f13ee53db.svg",
			brandName: 'Columbia',
  },

]);
</script>

<template>
  <div class="mt-40"></div>
  <swiper
    class="swiper"
    :modules="modules"
    :space-between="10"
    :slides-per-view="4"
    :centered-slides="true"
    :loop="true"
    :navigation="true"
		:autoplay="{
			delay: 2500,
			disableOnInteraction: false,
		}"
  >
    <swiper-slide class="slide  flex flex-col items-center text-center " v-for="item in items" key="item.id">
			<img :src="item.imageUrl" alt="" class="m-auto brightness-0">
			<p class="brandName pt-5">{{ item.brandName }}</p>
		</swiper-slide>
   
  </swiper>
</template>

<style scoped>
.swiper {
  display: flex;
}

.slide {
  width: 100%; /* Adjust width as needed */
}
.swiper-wrapper {
  translate: translate3d(0px, 0px, 0px) !important;
}
</style>
