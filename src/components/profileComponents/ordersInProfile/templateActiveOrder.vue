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
  <div class="bg-[#dbeafe]" >
    <div>
      <h2>Заказ №: {{ props.orderNumber }}</h2>
    </div>
		<div class="flex flex-col gap-5">
			<h4>{{ props.title }}</h4>
			<img :src="props.imgUrl" alt="Sneaker Image ">
			<p>{{ props.price }}</p>
		</div>
		<div>
			<p>Общая стоимость {{ props.totalAmount }}</p>
			<p v-if="props.status == 'PREPAIRING'">Статус заказа: В обработке </p>
			<p v-else-if="props.status == 'SENDED'">Статус заказа: Отправлен </p>
			<p v-else-if="props.status == 'COMPLETED'">Статус заказа: Готов к получению</p>
			<p v-else-if="props.status == 'RECEIVED'">Статус заказа: Получен адресатом</p>
			<p v-else-if="props.status == 'CANCELLED'">Статус заказа: Отменен</p>
			<p>Был создан {{ props.createdAt }}</p>
		</div>
  </div>
</template>
