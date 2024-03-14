<script setup lang="ts">
import CartItem from "./CartItem.vue";
import { onBeforeMount, ref, watch } from "vue";
import { useCartStore } from "@/stores/addToCart";
import axios from "axios";

interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  count: number;
}

let items = ref<CartItem[]>([]);
let isAdded = ref(false);

const cartDataGet = async () => {
  try {
    const dataCart = await axios.post(
      "http://localhost:3001/api/get-cart-items",
      {
        userId: localStorage.getItem("id"),
      }
    );
    items.value = dataCart.data;
    isAdded.value = items.value.length > 0;
    console.log(items.value, isAdded.value);
  } catch (error) {
    console.log(error);
  }
};

cartDataGet();
// onBeforeMount(() => {
// });


const onDelete = (id: number) => {
  // ваш код для удаления элемента с id
};
console.log(items.value);
</script>

<template>
  <div class="flex flex-col gap-4 flex-1" v-if="isAdded">
    <CartItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :image="item.image"
      :price="item.price"
      :count="item.count"
      :onDelete="() => onDelete(item.id)"
    />
  </div>

  <div v-else="isAdded.value == false" class="flex flex-col gap-4 items-center min-h-[70%] justify-center">
    <img src="/package-icon.png" alt="" class="max-w-[100px]">
    <h3 class="text-2xl">Корзина пустая</h3>
    <p class="text-slate-500">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
  </div>
</template>

