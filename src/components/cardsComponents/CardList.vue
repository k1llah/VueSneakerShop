<script setup script lang="ts">
import Card from "./card.vue";
import axios from "axios";
import { ref, } from "vue";
import { useRouter } from 'vue-router'; 
import { useAllStore } from '@/stores/all';
import Overlay from '@/components/cardsComponents/overlay.vue';
import { useCartStore } from '@/stores/addToCart';
import { useAuthStore } from '@/stores/authData';
const authStore = useAuthStore();
const cartStore = useCartStore();
let addToCart = ref()
if(authStore.isAuthenticated == true){
  addToCart.value = cartStore.onCartAdd
}
else if(authStore.isAuthenticated == false){
  console.log('you must need to log in or register')
}
const router = useRouter(); 
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
const allStore = useAllStore()
let paramsId = allStore.idShoe

const onClickOnCard = async (sneakerId: number) => {
  router.push(`/description`);
  paramsId = sneakerId
  localStorage.setItem('sneakerId', paramsId.toString())
  const getItem = localStorage.getItem('sneakerId');
  console.log(paramsId)
  console.log(getItem)
  console.log('id',sneakerId)

};
let showOverlay = ref(false)
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
    showOverlay.value = true
    setTimeout(() => {
      showOverlay.value = false
    }, 150)
    
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <overlay :show-overlay-green="showOverlay"/>
  <div v-if="items">
    <div class="grid md:grid-cols-4 sm:grid-cols-2 md:gap-5 md:0" v-auto-animate>
      <card
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :image-url="item.imageUrl"
        :price="item.price"
        :is-added="item.isAdded"
        :is-favorite="item.isFavorite"
        :on-click-add="() => addToCart.value(item.id, item)"
        :on-favorite-add="() => onFavoriteAdd(item.id, item)"
        :on-click-on-card="() => onClickOnCard(item.id)"
      />
    </div>
  </div>
  <div v-else>
    <p>Загрузка данных</p>
  </div>
</template>
