<script setup script lang="ts">
import CardList from "@/components/cardsComponents/CardList.vue";
import { onMounted, reactive, ref, watch } from "vue";
import axios from "axios";
import {debounce}  from "lodash"
import { useCartStore } from '@/stores/addToCart';
import { useFavoritesStore } from '@/stores/favorites';
const cartStore = useCartStore();
const favoritesStore = useFavoritesStore();
let items = ref<any>([]);
const filters = reactive({
  sortBy: "title",
  searchQuery: "",
});

// Функция для обработки изменений в инпуте поиска
const onChangeSelect = (event: any) => {
  filters.sortBy = event.target.value;
};

const axiosGetParams = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    };
    if (filters.searchQuery) {
      //@ts-ignore
      params.title = filters.searchQuery;
    }
    const { data } = await axios.get(`http://localhost:3001/api`, {
      params,
    });
  
    items.value = data;
    cartStore.items.forEach((el:any) => {
      items.value.forEach((item:any) => {
        if(el.id == item.id){
          item.isAdded = true
        }
      })
    })
    favoritesStore.items.forEach((el:any) => {
      items.value.forEach((item:any) => {
        if(el.id == item.id){
          item.isFavorite = true
        }
      })
    })
  } catch (err) {
    console.log(err);
  }
};

onMounted(axiosGetParams);
watch(filters, debounce(axiosGetParams, 350));
</script>

<template>
  <div class="p-10">
    <div class="flex flex-wrap justify-between items-center">
      <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

      <div class="flex gap-4 md:flex-row sm:flex-col-reverse">
        <select
          class="py-2 px-3  border rounded-md outline-none"
          @change="onChangeSelect"
        >
          <option value="name">По названию</option>
          <option value="sortByPrice">Сначала дешевые</option>
          <option value="sortBy-Price">Сначала дорогие</option>
        </select>

        <div class="relative">
          <img src="/search.svg" class="absolute left-3 top-3" alt="" />
          <input
            type="text"
            placeholder="Search..."
            class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
            v-model="filters.searchQuery"
            
          />
        </div>
      </div>
    </div>
  </div>
  <CardList :items="items"/>
</template>
