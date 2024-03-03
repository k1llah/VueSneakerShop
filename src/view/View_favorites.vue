<script setup lang="ts">
import { ref } from "vue";
import { isAuthenticated } from "@/auth";
import axios from "axios";
import { onMounted, watch } from "vue";
import buttonBack from '@/components/buttonBack.vue';
import FavList from "@/components/cardsComponents/Fav-list.vue";

const items = ref<any>([]);
const isFav = ref<Boolean>(true);

const favorites = async () => {
  try {
    const { data } = await axios.post(
      "http://localhost:3001/api/favorites-user",
      {
        id: localStorage.getItem("id"),
      }
    );

    isFav.value = true;
    items.value = data[0].Favorite;
    items.value.forEach((el:any) => {
      el.isFavorite = true
    })
  } catch (error) {
    console.log(error);
  }
};

favorites();

</script>
<template>
  <div class="container">
    <div class="min-h-[600px]">
      <div class="flex ml-[50px] mt-5 gap-[15px]">
        <div class="flex gap-5 items-center">
          <buttonBack/>
          <h2 class="text-3xl">Избранное</h2>
        </div>
      </div>

      <div v-if="isAuthenticated == true && isFav == true" class="mt-[30px]">
        <FavList :items="items" />
      </div>

      <div
        v-else-if="isAuthenticated == true && isFav == false"
        class="flex flex-col justify-center items-center h-[500px]"
      >
        <div class="w-[500px] text-center">
          <h1 class="text-2xl">
            К сожалению у вас нет добавленных
            <span class="text-2xl text-[#7747ff]">избранных</span> товаров
          </h1>
        </div>
        <div class="max-w-[70px] mt-5"><img src="/emoji-1.png" alt="" /></div>
      </div>

      <div
        v-else="isAuthenticated == false"
        class="flex flex-col justify-center items-center h-[500px]"
      >
        <div class="w-[500px] text-center">
          <h1 class="text-2xl">
            Зарегистрируйтесь или войдите в
            <span class="text-2xl text-[#7747ff]">аккаунт</span> для просмотра и
            добавления избранных товаров
          </h1>
        </div>
        <div class="max-w-[70px] mt-5"><img src="/emoji-1.png" alt="" /></div>
      </div>
    </div>
  </div>
</template>
