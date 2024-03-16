<script setup lang="ts">
import CartItem from "./CartItem.vue";
import { onBeforeMount, ref, watch } from "vue";
import { useCartStore } from "@/stores/addToCart";
import { useAuthStore } from "@/stores/authData";
import {useSneaker}  from '@/stores/sneaker';
import axios from "axios";
const sneakerStore = useSneaker()
const authStore = useAuthStore();
const cartStore = useCartStore();
interface CartItem {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  count: number;
  isAdded: boolean;
  onDelete: Function;
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
    items.value = dataCart.data.items;
    isAdded.value = items.value.length > 0;
    console.log(isAdded.value);
  } catch (error) {
    console.log(error);
  }
};

cartDataGet();

const onDelete = (id: number) => {
  // ваш код для удаления элемента с id
};
</script>

<template>
  <div v-if="isAdded" class="overflow-scroll max-h-[70%]">
    <div
      class="flex flex-col gap-4 flex-1"
      v-for="item in items"
      :key="item.id"
      v-auto-animate
    >
      <CartItem
        v-if="isAdded"
        :id="item.id"
        :title="item.title"
        :img="item.imageUrl"
        :price="item.price"
        :count="item.count"
        :isAdded="item.isAdded"
        :onDelete="() => cartStore.onDeleteItem(item.id, item)"
      />
    </div>
  </div>
  <div
    v-else-if="authStore.isAuthenticated == false"
    class="flex flex-col gap-4 items-center min-h-[70%] justify-center"
  >
    <img src="/package-icon.png" alt="" class="max-w-[100px]" />
    <h3 class="text-2xl">Корзина пустая</h3>
    <p class="text-slate-500">
     <RouterLink to="/profile" @click="sneakerStore.show = !sneakerStore.show" class="text-[#7747ff]"> Войдите </RouterLink> или <RouterLink to="/sign_up" @click="sneakerStore.show = !sneakerStore.show" class="text-[#7747ff]">зарегистрируйтесь</RouterLink> чтобы добавлять товары в корзину
    </p>
  </div>
  <div
    v-else-if="isAdded == false"
    class="flex flex-col gap-4 items-center min-h-[70%] justify-center"
  >
    <img src="/package-icon.png" alt="" class="max-w-[100px]" />
    <h3 class="text-2xl">Корзина пустая</h3>
    <p class="text-slate-500">
      Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
    </p>
  </div>
</template>
