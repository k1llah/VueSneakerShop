<script setup lang="ts">
import { ref } from "vue";
import { isAuthenticated } from "@/auth";
import axios from "axios";
import { onMounted, watch } from "vue";
import FavList from "@/components/Fav-list.vue";

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

  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  favorites();
});
</script>
<template>
  <div class="container">
    <div class="min-h-[600px]">
      <div class="flex ml-[50px] mt-5 gap-[15px]">
        <div class="flex gap-5">
          <button
            class="h-[35px] w-[35px] border rounded-[10px] border-[#F2F2F2] flex justify-center items-center text-white hover:bg-slate-600 transition hover:scale-[1.2] disabled:bg-slate-400 cursor-pointer"
            @click="$router.go(-1)"
          >
            <img src="/arrow-right.svg" class="rotate-180" alt="close button" />
          </button>
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
