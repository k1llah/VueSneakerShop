<script setup lang="ts">
import { ref, watch } from "vue";
import buttonProfile from "@/components/buttonProfile.vue";
import addressComp from "@/components/profileComponents/addressComp.vue";
import addressAdd from './addressAdd.vue';
import editAddress from './editAddresses.vue'
defineProps({
  // Указываем, что items является массивом объектов типа Item
  items: Array,
});
let isAddress = ref(false);
import { useAllStore } from "@/stores/all";

const allStore = useAllStore();
let toggle = ref(true);
let target = ref("");

const handleOpenPage = (page: string) => {
	toggle.value = false
	
	localStorage.setItem("page2", page)
	target.value = page
	console.log(target)
	};
	watch(() => localStorage.getItem("page2"), (newPage) => {
  if (newPage) {
    
    target.value = newPage;
  }
});
</script>
<template>
  <div class="flex gap-5 items-center">
    <buttonProfile />
    <h2 class="text-3xl">Адреса для доставки</h2>
  </div>

	<div v-if="target == 'edit'" >
		<editAddress/>
	</div>
	<div v-else-if="target == 'add'" >
		<addressAdd/>
	</div>
  <div class="flex justify-between flex-col items-center mt-12" v-else>
		<div class="flex flex-col w-full" >
			<h2 class="md:text-2xl sm:text-lg">Мои адреса</h2>

      <div
        class="border-2 border-slate-500 w-full mt-5 min-h-80 overflow-scroll max-h-[500px] p-5"
				
      >
        <addressComp />
      </div>

      <div
        class="w-full flex justify-center items-center md:min-h-[500px]"
        v-if="isAddress == true"
      >
        <p class="md:text-[20px] sm:text-[18px]">
          У вас нет добавленных адресов
        </p>
      </div>
    </div>
    <div>
      <button
        class="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
        @click="handleOpenPage('add')"
      >
        Добавить адрес
      </button>
    </div>
  </div>
</template>
