<script setup lang="ts">
import { onBeforeMount, ref, reactive } from "vue";
import axios from "axios";
import templateItem from "./templateItem.vue";
import badassLoader from '../badassLoader.vue';
import { useOrderStore } from "@/stores/order";
import { useCartStore } from "@/stores/addToCart";
const cartStore = useCartStore();
const orderStore = useOrderStore();
let idItems = ref([] as any);
let data = ref();
const getDataShoe = async function (params: any) {
  try {
    const dataShoe = await axios.post(
      `http://localhost:3001/api/sneakers-to-order`,
      {
        id: params,
      }
    );
    data.value = dataShoe.data;
    orderStore.idParam = idItems.value
    orderStore.amount = dataShoe.data.reduce(
      (acc: any, item: any) => acc + item.price,
      0
    );
  } catch (error) {
    console.log(error);
  }
};
onBeforeMount(async () => {
  await cartStore.cartDataGet();
  cartStore.items.forEach((el: any) => {
    idItems.value.push(el.id);
    localStorage.setItem("sneakerId", JSON.stringify(idItems.value));
    orderStore.idParam = idItems.value
  });
  if (idItems.value.length > 0) {
    getDataShoe(idItems.value);
  } else {
    console.log(data.value, "error");
  }
});
</script>
<template>
  <div v-if="data">
    <div
      v-if="data !== undefined"
      class="md:ml-10 sm:ml-5 sm:mt-5 flex flex-col overflow-scroll max-h-[410px] gap-5 p-3"
    >
      <!-- Я тупое дерьмо в item in data не нужно было блять писать item in data.items потому что айтемов через точку ПРОСТО НЕТ НАХУЙ!!! поэтому я получал undefined сука ну надо же было так... -->
      <templateItem
        v-for="item in data"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :image="item.imageUrl"
        :price="item.price"
      />
    </div>
  </div>
  <div v-if="!data" class="flex justify-center w-full"><badassLoader/></div>
</template>
