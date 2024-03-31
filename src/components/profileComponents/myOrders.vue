<script setup lang="ts">
import buttonProfile from '@/components/buttonProfile.vue';
import activeOrders from '@/components/profileComponents/ordersInProfile/activeOrders.vue';
</script>
<template>



<div class="flex gap-5 items-center">
 <buttonProfile/>
	<h2 class="text-3xl">Мои заказы</h2>
</div>
<div>

	<div class="flex justify-center">

	</div>
	<div>
		<h3>
			Активные заказы
		</h3>

		<div>
			<activeOrders />
		</div>

	</div>

	<div>
		<h3>
			История заказов
		</h3>
	</div>
</div>
</template>