<script setup lang="ts">
import { ref } from "vue";
import axios from 'axios';
import card from '@/components/cardsComponents/card.vue';
import overlay from '@/components/cardsComponents/overlay.vue';
import { useCartStore } from '@/stores/addToCart';
import { useAuthStore } from '@/stores/authData';
const cartStore = useCartStore();
const authStore = useAuthStore();
let deleteFromCart = ref()
let addToCart = ref()
if(authStore.isAuthenticated == true){
  addToCart.value = cartStore.onCartAdd
  deleteFromCart.value = cartStore.onDeleteItem
}
else if(authStore.isAuthenticated == false){
  console.log('you must need to log in or register')
}
interface Item {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  isAdded: boolean;
  isFavorite: boolean;
}
const props = defineProps({
  items: Array<Item>
});

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
	<div class="grid md:grid-cols-4 sm:grid-cols-2 md:gap-5 md:0" v-auto-animate>
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
      :on-click-add="() => cartStore.onCartAdd(item.id, item, item.price)"
      :on-favorite-add=" () => onFavoriteRemove(item.id, item)"
      :onclck-delete="() => deleteFromCart(item.id, item, item.price)"
      
    />
  </template>
    </div>
</div>

</template>
