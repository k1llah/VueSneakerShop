<script setup lang="ts">
import { ref } from "vue";
import axios from 'axios';
import card from '@/components/cardsComponents/card.vue';
import overlay from '@/components/cardsComponents/overlay.vue';
// import { it } from 'node:test';


interface Item {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  isAdded: boolean;
  isFavorite: boolean;
}
const onClickAdd = async () => {

 
}


const props = defineProps({
  items: Array<Item>
});

console.log(props.items)

const showOverlay = ref(false)
const onFavoriteRemove = async (sneakerId: number, item:Item) => {
  try {
    const postData = await axios.post(
      "http://localhost:3001/api/remove-from-favorites",
      {
        userId: localStorage.getItem("id"),
        sneakerId: sneakerId,
      }
    );
		item.isFavorite = false
    showOverlay.value = true;
    setTimeout(() => {
      showOverlay.value = false;
    }, 150);
    
  } catch (error) {
    console.log(error);
  }
}
</script>
<template>
<div v-if="items">
	<overlay :show-overlay-red="showOverlay"/>
	<div class="grid grid-cols-4 gap-5" v-auto-animate>
  <template 
  v-for="item in items"
      :key="item.id"
      v-auto-animate >
  <card 
      v-if="item.isFavorite"
      :id="item.id"
      :title="item.title"
      :image-url="item.imageUrl"
      :price="item.price"
      :is-added="item.isAdded"
      :is-favorite="item.isFavorite"
      :on-click-add="onClickAdd"
      :on-favorite-add=" () => onFavoriteRemove(item.id, item)"
      
    />
  </template>
    </div>
</div>

</template>
