<script setup lang="ts">
const props = defineProps({
  id: Number,
  orderNumber: String,
	title: String,
	imgUrl: String,
	price: Number,
	totalAmount: Number,
	status: String,
	createdAt: String,
});
</script>
<template>
  <div class="">
  
		<div class="flex flex-col gap-3 max-w-fit bg-white p-5 rounded-xl shadow-md">
			<h4>{{ props.title }}</h4>
			<img :src="props.imgUrl" alt="Sneaker Image" class="max-w-40">
			<p class="font-light"> Стоимость: {{ props.price }}</p>
		</div>
		<div>
			
			<p v-if="props.status == 'PREPAIRING'">Статус заказа: В обработке </p>
			<p v-else-if="props.status == 'SENDED'">Статус заказа: Отправлен </p>
			<p v-else-if="props.status == 'COMPLETED'">Статус заказа: Готов к получению</p>
			<p v-else-if="props.status == 'RECEIVED'">Статус заказа: Получен адресатом</p>
			<p v-else-if="props.status == 'CANCELLED'">Статус заказа: Отменен</p>
			
		</div>
  </div>
</template>
