<style>
*{
  font-family: Fredoka,Alegreya Sans SC;
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
import {useSneaker} from '@/stores/sneaker'
const sneakerStore = useSneaker()

let toggleShow = () => {
  sneakerStore.show = !sneakerStore.show
  console.log(sneakerStore.show)
}
</script>
<template>
  <header class="flex justify-between border-b border-slate-200 px-8 py-8">
    <div>
      <div class="flex items-center gap-4">
        <router-link to="/">
        <img src="/logo_3.jpeg" alt="Logo" class="w-16" />
      </router-link>
        <h2 class="text-xl font-medium uppercase">Benz Shöp</h2>
        <router-link to="/sneakers_page">
        <p class="text-slate-700 text-lg hover:scale-[1.05] transition-all 1.3s">Все кроссовки</p>
      </router-link>
      </div>
    </div>
    <ul class="flex items-center gap-10">
      <li
        class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer hover:scale-[1.05] transition-all 1.3s" @click="toggleShow()" 
      >
        <img src="/cart.svg" alt="Cart" />
        <p class="text-[18px] font-[500]">205 Руб</p>
      </li>
      <li
        class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer hover:scale-[1.05] transition-all 1.3s"
        @click="$router.push({ name: 'Purchases' })"
      >
        <img src="/heart.svg" alt="Cart" />
        <span class="text-[19px] font-light">Закладки</span>
      </li>
      <li
        class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer hover:scale-[1.05] transition-all 1.3s" @click="$router.push({ name: 'Profile' })"
      >
        <img src="/profile.svg" alt="Cart" />
        <span class="text-[19px] font-light">Профиль</span>
      </li>
    </ul>
  </header>
</template>