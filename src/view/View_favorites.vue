<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import axios from "axios";
import { onMounted, watch } from "vue";
import buttonBack from '@/components/buttonBack.vue';
import FavList from "@/components/cardsComponents/Fav-list.vue";
import{ useAuthStore } from '@/stores/authData';
import { useFavoritesStore } from '@/stores/favorites';
const favoriteStore = useFavoritesStore();
const authStore = useAuthStore();
const items = ref<any>([]);
const isFav = ref<Boolean>(true);

// const favorites = async () => {
//   try {
//     const { data } = await axios.post(
//       "http://localhost:3001/api/favorites-user",
//       {
//         id: localStorage.getItem("id"),
//       }
//     );

//     isFav.value = true;
//     cartStore.favArray = data[0].Favorite
//     items.value = data[0].Favorite;
//     items.value.forEach((el:any) => {
//       el.isFavorite = true
//     })
//     if(items.value.length == 0){
//       isFav.value = false
//     }
//     cartStore.items.forEach((el:any) => {
//       items.value.forEach((item:any) => {
//         if(el.id == item.id){
//           item.isAdded = true
//         }
//       })
//     })
//   } catch (error) {
//     console.log(error);
//   }
// };

// favorites();
onBeforeMount(() => {
  favoriteStore.favorites()
})
</script>
<template>
  <div>
    <div class="min-h-[600px]">
      <div class="flex md:ml-[50px] sm:ml-[20px] mt-5 gap-[15px]">
        <div class="flex gap-5 items-center">
          <buttonBack/>
          <h2 class="text-2xl font-extralight">Избранное</h2>
        </div>
      </div>

      <div v-if="authStore.isAuthenticated == true && isFav == true" class="mt-[30px]">
        <FavList :items="favoriteStore.items" />
      </div>

      <div
        v-else-if="authStore.isAuthenticated == true && isFav == false"
        class="flex flex-col justify-center items-center h-[500px]"
      >
        <div class="md:w-[500px] sm:w-auto text-center">
          <h1 class="text-2xl">
            К сожалению у вас нет добавленных
            <span class="text-2xl text-[#7747ff]">избранных</span> товаров
          </h1>
        </div>
        <div class="max-w-[70px] mt-5"><img src="/emoji-1.png" alt="" /></div>
      </div>

      <div
        v-else="authStore.isAuthenticated == false"
        class="flex flex-col justify-center items-center h-[500px]"
      >
        <div class="md:w-[500px] sm:w-auto text-center">
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
