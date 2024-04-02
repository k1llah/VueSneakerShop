<script setup lang="ts">
import { onMounted, ref } from 'vue';
import templateOrder from './templateOrder.vue';
import { useMyOrderStore } from '@/stores/myOrders';
const myOrders = useMyOrderStore();
onMounted(async () => {
	await myOrders.getDataOrder();
	console.log(myOrders.orders);
});

</script>
<template>
 <div v-if="myOrders.orders.length !== 0" class="flex overflow-scroll gap-5 flex-col  max-h-[600px]">
    <div v-for="order in myOrders.orders" :key="order.id" class="flex flex-col gap-5 border-2 border-slate-300 p-4 rounded-xl">
      <h2 class="text-xl font-semibold">Заказ №: {{ order.orderNumber }}</h2>
			<div  class="flex overflow-scroll gap-5">
      <div v-for="item in order.items" :key="item.id">
        <templateOrder
          :title="item.title"
          :imgUrl="item.imageUrl"
          :price="item.price"
        />
			</div>
      </div>
			<p class="text-lg font-medium">Общая стоимость {{ order.amount }} RUB</p>
			<p class="text-medium font-normal">Статус заказа: {{ order.status }}</p>
			<p class="text-sm font-light">Был создан {{ order.createdAt }}</p>
    </div>
  </div>
</template>