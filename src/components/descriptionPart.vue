<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { useAllStore } from "@/stores/all";
import buttonBack from './buttonBack.vue';
const allStore = useAllStore();
const paramsId = localStorage.getItem("sneakerId");
let itemData = ref();
const brand = ref()
let brandImageUrl = ref()
const brands = allStore.brandImages
console.log(brands)
const getDateShoe = async function (params: number) {
  try {
    const dataShoe = await axios.get(`http://localhost:3001/api/sneaker`, {
      params: {
        id: paramsId,
      },
    });
    itemData.value = dataShoe.data;
		brand.value = dataShoe.data.brand
		brandImageUrl.value = allStore.getBrandImageUrl(brand.value);
  } catch (error) {
		console.log(error);
  }
}
onMounted(() => {
  if (paramsId) {
    getDateShoe(parseInt(paramsId));
  }
});

</script>
<template>
  <div class="flex ml-[50px] mt-5 gap-[15px]">
    <div class="flex gap-5 items-center">
			<buttonBack/>
      <h2 class="text-3xl">Описание</h2>
    </div>
  </div>

  <div class="mt-[100px] flex justify-around">
    <div>
      <img
        :src="itemData?.imageUrl"
        class="shadow max-w-[410px] border-slate-200 border-[1px] rounded-2xl p-5"
        alt="sneaker"
      />
    </div>

    <div class="flex flex-col gap-7 max-w-[370px]">
      <p class="text-3xl text-[#000000] font-sans font-[600]">
        {{ itemData?.title }}
      </p>

      <p class="text-2xl text-[#000000] font-sans font-[400]">
        {{ itemData?.price }} руб.
      </p>
      <div class="flex gap-5 mt-9">
        <button
          class="rounded-lg overflow-hidden relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
        >
          <span
            class="text-gray-200 font-sans font-semibold ml-5 transform group-hover:translate-x-20 transition-all duration-300"
            >В корзину</span
          >
          <span
            class="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
          >
            <svg
              class="svg w-8 text-white"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
        </button>

        <button
          class="overflow-hidden relative w-36 p-2 h-[40px] bg-black text-white border-none rounded-md text-[15px] font-[500] cursor-pointer z-10 group flex justify-center items-center"
        >
          Быстрый заказ
          <span
            class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
          ></span>
          <span
            class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
          ></span>
          <span
            class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
          ></span>
          <span
            class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute   z-10 text-center"
            >Оформи!</span
          >
        </button>
      </div>

			<p class="text-xl text-slate-600 font-sans font-[400]">
				Цвет: {{ itemData?.color }}
			</p>
			<img :src="brandImageUrl" alt="brand name" class="brightness-0 max-w-20 mt-10">
    </div>
		
  </div>

  <div class="flex flex-col gap-10 mt-20 justify-center items-center">
		<div class="max-w-[650px]">
		<div class="border-b-[3px] border-[#a5b4fc] w-[250px] m-auto p-3 text-center">
			<h3 class="text-3xl text-700"> О товаре </h3>
		</div>
		<div class="flex flex-col gap-5 mt-16">
			<h4 class="text-2xl text-500 text-center">Описание товара</h4>
			<p class="text-[20px] text-slate-700 text-400 text-balance "> 
				{{ itemData?.description }}
			</p>
		</div>
		<div class="flex justify-between items-end gap-10 mt-16 border-b-2 border-slate-800 pb-2">
			<p class="max-w-[400px] leading-9 text-lg">
				<span class="text-2xl text-[#7747ff]">Состав:</span>
				 <br>
				{{ itemData?.materials }}
			</p>
			<p>
				
				{{ itemData?.countryMade }}
			</p>
		</div>
		</div>
	</div>
	<div class="flex p-7 pb-16 justify-end mt-10">
	<h4 class="text-base text-slate-400 text-500 text-right max-w-[500px]">
		Качество товара, его безопасность для жизни, здоровья потребителей, окружающей среды, подтверждено в соответствии с требованиями законодательства. Подробная информация размещена на этикетке или упаковке товара, либо в технической документации к нему.
	</h4>
</div>
</template>
<style scoped>
.shadow {
  -webkit-box-shadow: 0px -1px 41px 1px rgba(34, 60, 80, 0.09);
  -moz-box-shadow: 0px -1px 41px 1px rgba(34, 60, 80, 0.09);
  box-shadow: 0px -1px 41px 1px rgba(34, 60, 80, 0.09);
}
</style>
