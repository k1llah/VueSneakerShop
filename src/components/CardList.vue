<script setup script lang="ts">
import Card from './card.vue'
import axios from 'axios';

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

const onClickAdd = async () => {

 
}
const onFavoriteAdd = async (sneakerId: number) => {
  try{
  const postData = await axios.post('http://localhost:3001/api/add-to-favorites', {
    userId: localStorage.getItem('id'),
    sneakerId: sneakerId
}) 
console.log(postData.data)
  alert('Добавлено в избранное!!')
} catch(error){
  console.log(error)
}
}
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
  <div v-else>
    <p>Загрузка данных</p>
  </div>
</template>
