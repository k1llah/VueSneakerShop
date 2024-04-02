<script setup lang="ts">
import buttonProfile from "@/components/buttonProfile.vue";
import orderList from "./ordersInProfile/orderList.vue";
import { ref, onMounted } from "vue";
import { useMyOrderStore } from "@/stores/myOrders";
import axios from "axios";
const dataOrder = ref();
const myOrders = useMyOrderStore();
dataOrder.value = myOrders.orders;

console.log(dataOrder.value);

onMounted(async () => {
  await myOrders.getDataOrder();
  dataOrder.value = myOrders.orders;
  console.log(dataOrder.value);
});
</script>
<template>
  <div class="flex gap-5 items-center">
    <buttonProfile />
    <h2 class="text-3xl">Мои заказы</h2>
  </div>
  <div class="overflow-scroll max-h-[650px] bg-[#dbeafe]">
    <div class="flex flex-col gap-5 p-5 mt-2">
      <h3 class="text-2xl">Активные заказы</h3>

      <div>
        <orderList />
      </div>
    </div>

    <div class="flex flex-col gap-5 p-5 mt-5">
      <h3 class="text-2xl">История заказов</h3>
      <div></div>
    </div>
  </div>
</template>
