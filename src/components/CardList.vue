<script setup script lang="ts">
import Card from "./card.vue";
import axios from "axios";
import { ref } from "vue";
import Overlay from '@/components/overlay.vue';
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
  items: Array<Item>,
});

const onClickAdd = async () => {};
let showOverlay = ref(false);
const onFavoriteAdd = async (sneakerId: number, item:Item) => {
  try {
    const postData = await axios.post(
      "http://localhost:3001/api/add-to-favorites",
      {
        userId: localStorage.getItem("id"),
        sneakerId: sneakerId,
      }
    );
      item.isFavorite = true
    showOverlay.value = true;
    setTimeout(() => {
      showOverlay.value = false;
    }, 150);
    
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <overlay :show-overlay-green="showOverlay"/>
  <div v-if="items">
    <div class="grid grid-cols-4 gap-5" v-auto-animate>
      <card
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :image-url="item.imageUrl"
        :price="item.price"
        :is-added="item.isAdded"
        :is-favorite="item.isFavorite"
        :on-click-add="onClickAdd"
        :on-favorite-add="() => onFavoriteAdd(item.id, item)"
      />
    </div>
  </div>
  <div v-else>
    <p>Загрузка данных</p>
  </div>
</template>
