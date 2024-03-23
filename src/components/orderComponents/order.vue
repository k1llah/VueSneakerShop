<script setup lang="ts">
	import addresses from './addresses.vue';
	import formVue from './form.vue';
	import placeAnOrder from './placeAnOrder.vue';
	// https://3dsec.sberbank.ru/payment/rest/register.do
</script>
<template >
	<addresses/>
	
	<div class="w-full flex justify-center gap-10 lg:flex-row md:flex-col-reverse md:items-center sm:flex-col-reverse sm:items-center ">
		<placeAnOrder/>
		<formVue/>
	</div>
	
</template>