<script setup script lang="ts">
import CardList from "@/components/CardList.vue";
import { onMounted, reactive, ref, watch } from "vue";
import axios from "axios";
import {debounce}  from "lodash"

const gender = ref('')
const genderRu = ref('')
const pathArr0 = window.location.pathname.split('#')
const pathArr1 = pathArr0[0].split('?')
const pathArr = pathArr1[0].split('/')
if (pathArr[pathArr.length-1] == 'man') {
  gender.value = 'man'
  genderRu.value = 'Мужская'
} else if (pathArr[pathArr.length-1] == 'woman') {
  gender.value = 'woman'
  genderRu.value = 'Женская'
} else if (pathArr[pathArr.length-1] == 'sneakers_page') {
  
} else {
  window.location.assign('/sneakers_page')
}

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
  } catch (err) {
    console.log(err);
  }
};

onMounted(axiosGetParams);
watch(filters, debounce(axiosGetParams, 500));
</script>

<template>
  <div class="p-10">
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold mb-8">Все {{ genderRu }} кроссовки</h2>

      <div class="flex gap-4">
        <select
          class="py-2 px-3 border rounded-md outline-none"
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
