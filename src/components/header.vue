<style>
*{
  font-family: sans-serif;
}
</style>
<script setup lang="ts">
import { ref,onMounted, watch, onBeforeMount } from 'vue'
import {useSneaker} from '@/stores/sneaker'
import {useAllStore} from '@/stores/all'
import burger from '@/components/burger.vue'
import { useCartStore } from '@/stores/addToCart';
import { useAuthStore } from '@/stores/authData';
const cartStore = useCartStore();
const sneakerStore = useSneaker()
const allStore = useAllStore()
const authStore = useAuthStore();
onBeforeMount(()=>{
  cartStore.cartDataGet()
  cartStore.localCounter = cartStore.items.length
  console.log(cartStore.items.length, cartStore.items, cartStore.cartCounter)
})

watch(() => cartStore.cartCounter, (newValue:any) => {
  cartStore.localCounter = newValue;
});
let toggleShow = () => {
  sneakerStore.show = !sneakerStore.show
  console.log(sneakerStore.show)
}
// const cartIds = ref([]as any)
// onMounted(()=>{
//   cartIds.value = JSON.parse(localStorage.cart)
// })
</script>
<template>
    <header class="hidden justify-between border-b border-slate-200 p-5 sm:flex md:hidden">
     
     <burger/>


    </header>



  <header class="hidden justify-between border-b border-slate-200 px-8 py-8 md:flex">
    <div class="">
      <div class="flex items-center md:gap-10 lg:gap-4">
        <router-link to="/">
        <img src="/logo_3.jpeg" alt="Logo" class="w-16" />
      </router-link>
        <h2 class=" font-medium uppercase lg:text-xl md:text-base hidden sm:text-base">Benz Shöp</h2>
        <router-link to="sneakers_page">
        <p class="text-slate-700  hover:scale-[1.05] transition-all 1.3s lg:text-lg md:text-lg sm:text-sm">Все кроссовки</p>
      </router-link>
      </div>
    </div>
    <ul class="flex items-center gap-10 md:gap-5">
      <li
        class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer hover:scale-[1.05] transition-all 1.3s " @click="toggleShow()" 
      >
        <img src="/cart.svg" alt="Cart" />
        <p class="text-[13px] font-[500] mt-[-22px] ml-[-13px] rounded-[50%] bg-gray-300 block  w-[20px] h-[20px] text-center" >{{ cartStore.localCounter }}</p>
      </li>
      <li
        class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer hover:scale-[1.05] transition-all 1.3s"
        @click="$router.push({ name: 'Purchases' })"
      >
        <img src="/heart.svg" alt="Cart" />
        <span class="text-[19px] font-light md:text-[14px] ">Закладки</span>
      </li>
      <li
        class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer hover:scale-[1.05] transition-all 1.3s" @click="$router.push({ name: 'Profile' })"
      >
        <img src="/profile.svg" alt="Cart" />
        <span class="text-[19px] font-light md:text-[14px]">Профиль</span>
      </li>
    </ul>
  </header>
</template>