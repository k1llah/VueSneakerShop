<script setup lang="ts">
import { ref } from "vue";
import axios from 'axios';
import card from '@/components/card.vue';
import overlay from '@/components/overlay.vue';


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


defineProps({
  items: Array<Item>
});

const showOverlay = ref(false)
const onFavoriteRemove = async (sneakerId: number) => {
  try {
    const postData = await axios.post(
      "http://localhost:3001/api/remove-from-favorites",
      {
        userId: localStorage.getItem("id"),
        sneakerId: sneakerId,
      }
    );
		
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
        :on-favorite-add=" () => onFavoriteRemove(item.id)"
        
      />
    </div>
</div>

</template>
