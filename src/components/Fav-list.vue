<script setup lang="ts">
import Card from './card.vue'
import { ref } from "vue";
import axios from 'axios';

const isFav = ref(false)


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
</script>
<template>
<div v-if="items">
	<div class="grid grid-cols-4 gap-5">
      <card
        v-for="item  in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :image-url="item.imageUrl"
        :price="item.price"
        :is-added="item.isAdded"
        :is-favorite="item.isFavorite"
        :on-click-add="onClickAdd"
        :on-favorite-add=" () => onFavoriteAdd(item.id)"
        
      />
    </div>
</div>

</template>
