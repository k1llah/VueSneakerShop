<script setup lang="ts">
import { ref, watch } from 'vue';
import { defineProps } from 'vue';
import { useAllStore } from '@/stores/all';
	const props = defineProps({
		id: Number || String,
		firstName: String,
  	lastName: String,
  	surname: String,
  	phoneNumber: String,
  	city:String,
  	postalCode: String,
  	street: String,
  	buildingNumber:String,
  	houseNumber:String,
  	apartament:String,
		editAddress: Function,
		deleteAddress: Function,
	})



	const allStore = useAllStore();


</script>
<template>
  <div class="bg-[#f4f4f5] md:max-w-[400px] rounded-xl p-5 mt-5">
		<div class="flex flex-col md:text-[18px] sm:text-[14px]">
			<div class="flex flex-col gap-2 justify-around">
				<p>Фамилия: {{ lastName }}</p>
				<p>Имя: {{ firstName }}</p>
				<p>Отчество: {{ surname }}</p>
				<p>Номер телефона: {{ phoneNumber }}</p>

				<p>Город: {{ city }}</p>
				<p>Почтовый индекс: {{ postalCode }}</p>
				<p>Улица: {{ street }}</p>
				<p>Номер дома: {{ houseNumber }}</p>
		

				<p>Номер квартиры: {{ apartament }}</p>
				<p>Корпус: {{ buildingNumber }}</p>

			</div>
			<div class="flex justify-end gap-3">
				<button class="w-[54px] h-[54px] hover:transition-all duration-200 hover:bg-blue-400 text-3xl rounded-xl " @click="allStore.targetPage = 'editAddress'">⚙️</button>
				<button class="w-[54px] h-[54px] hover:transition-all duration-200 hover:bg-red-600 text-2xl rounded-xl ">🗑️</button>
			</div>
		</div>
	</div>
</template>
