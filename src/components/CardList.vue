<script setup script lang="ts">
import { idText } from 'typescript';
import Card from './card.vue'
// import type { Key } from 'readline';
interface Item {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  isAdded: boolean;
  isFavorite: boolean;
}

defineProps({
  // Указываем, что items является массивом объектов типа Item
  items: Array<Item>
});

const onClickAdd = () => {
  alert('Добавить!')
}
const onFavoriteAdd = (e: MouseEvent) => {
  e
  alert('Добавлено в избранное!!')
}
</script>
<template>
  <div v-if="items">
    <div class="grid grid-cols-4 gap-5">
      <card
        v-for="item  in items"
        :key="item.id"
        :title="item.title"
        :image-url="item.imageUrl"
        :price="item.price"
        :is-added="item.isAdded"
        :is-favorite="item.isFavorite"
        :on-click-add="onClickAdd"
        :on-favorite-add="onFavoriteAdd"
      />
    </div>
  </div>
  <div v-else>
    <p>Загрузка данных</p>
  </div>
</template>
