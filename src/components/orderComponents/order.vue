<script setup lang="ts">
import { useOrderStore } from '@/stores/order';
	import addresses from './addresses.vue';
	import formVue from './form.vue';
	import placeAnOrder from './placeAnOrder.vue';
	import { watch } from 'vue';
	const orderStore = useOrderStore();
	watch(() => orderStore.targetPage, (newValue) => {
  orderStore.targetPage = newValue
  
})
	// https://3dsec.sberbank.ru/payment/rest/register.do
</script>
<template>
	<div v-if="orderStore.targetPage == 'fast'">
	<addresses/>
	
	<div class="w-full flex justify-center gap-10 lg:flex-row md:flex-col-reverse md:items-center sm:flex-col-reverse sm:items-center ">
		<placeAnOrder/>
		<formVue/>
	</div>
</div>
<div v-else-if="orderStore.targetPage == 'classic'">
	<addresses/>
	<div class="w-full flex justify-center gap-10 lg:flex-row md:flex-col-reverse md:items-center sm:flex-col-reverse sm:items-center ">
		<placeAnOrder/>
		<formVue/>
		YAPIDOOOR
	</div>
</div>
</template>