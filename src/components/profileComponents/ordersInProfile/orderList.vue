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
  <div v-if="myOrders.orders.length !== 0" class="flex overflow-scroll gap-5 flex-col max-h-[600px] bg-white md:p-5 sm:p-2">
		<h3 class="text-2xl mt-2">Активные заказы</h3>
		
    <div v-for="order in myOrders.orders" :key="order.id" >
			<div v-if="order.status !== 'RECEIVED' && order.status !== 'CANCELED'" class="flex flex-col gap-5 border-2 border-slate-300 p-4 rounded-xl">
      <h2 class="md:text-xl md:font-semibold sm:text-lg sm:font-medium">Заказ №: {{ order.orderNumber }}</h2>
      <div class="flex overflow-scroll gap-5">
				<div v-for="item in order.items" :key="item.id">
            <templateOrder class="p-3"
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
  


		<h3 class="text-2xl mt-2">История заказов</h3>
		
    <div v-for="order in myOrders.orders" :key="order.id">
			<div v-if="order.status == 'RECEIVED' || order.status == 'CANCELED'" class="flex flex-col gap-5 border-2 border-slate-300 p-4 rounded-xl">
      <h2 class="md:text-xl md:font-semibold sm:text-lg sm:font-medium">Заказ №: {{ order.orderNumber }}</h2>
      <div class="flex overflow-scroll gap-5">
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
	<div v-if="myOrders.history" class="flex flex-col gap-5 items-center p-5">
	<h3 class="text-xl font-extralight">
		К сожалению тут ничего нет
	</h3>
	<img src="/emoji-1.png" alt="" class="max-w-[60px]">
	</div>
	<div v-if="!myOrders.active" class="flex flex-col gap-5 items-center p-5">
	<h3 class="text-xl font-extralight">
		К сожалению тут ничего нет
	</h3>
	<img src="/emoji-1.png" alt="" class="max-w-[60px]">
	</div>
</div>
<div v-else-if="myOrders.orders.length == 0 || !myOrders.active && !myOrders.history">
<h3>
	К сожалению у вас пока нет заказов, вы можете перейти в <router-link to="sneakers_page" class="text-[#914dff]">каталог</router-link> и сделать первый заказ 
</h3>
</div>
</template>