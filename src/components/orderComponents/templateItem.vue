<script setup lang="ts">
const props = defineProps({
	id: Number,
	title: String,
	price: Number,
	image: String,
})
</script>
<template>

	<div class="flex gap-4 rounded-3xl shadow-xl p-5">
		<img :src="props.image" alt="Sneaker image" class="max-w-[170px]">
		<div class="flex flex-col gap-7">
			<h3 class="text-xl font-light">{{ props.title }}</h3>
			<h4 class="text-lg font-normal">{{ props.price }}</h4>
		</div>
	</div>


</template>
