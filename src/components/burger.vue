<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import {useSneaker} from '@/stores/sneaker'
const sneakerStore = useSneaker()
let toggleShow = () => {
  sneakerStore.show = !sneakerStore.show
  console.log(sneakerStore.show)
}
import gsap from "gsap";
const dropdowns = ref<boolean[]>([false]);
const toggleDropdown = (index: number) => {
  dropdowns.value[index] = !dropdowns.value[index];
  const dropdownContent = document.querySelector(
    ".burger"
  ) as HTMLDivElement;

  if (dropdownContent) {
    if (dropdowns.value[index]) {
      gsap.to(dropdownContent, {
        maxHeight: "370px",

        duration: 0.7,
        ease: "power2.out",
      });
    } else {
      gsap.to(dropdownContent, {
        maxHeight: "0px",

        duration: 0.7,
        ease: "power2.out",
      });
    }
  }
};
</script>
<template>
  <div class="w-full overflow-hidden">
    <div class="flex justify-between w-full items-center">
      <router-link to="/">
        <img src="/logo_3.jpeg" alt="Logo" class="w-16" />
      </router-link>
      <img
        src="/list.png"
        class="max-w-[40px]"
        alt=""
        @click="toggleDropdown(0)"
        :class="{
          'rotate-[-90deg] transition-all duration-500': dropdowns[0],
          'rotate-0 transition-all duration-500': !dropdowns[0],
        }"
      />
    </div>

    <div
      class="burger flex justify-center bg-white"
      :class="{ closed: !dropdowns[0] }"
      style="max-height: 370px; max-height:0px;"
    >
      <ul class="flex items-center gap-10 flex-col w-full md:gap-5 mt-12">
        <li class="border-b-2 border-slate-300 w-full flex justify-center pb-2">
          <router-link to="/sneakers_page">
            <p 
              class="text-slate-900 hover:scale-[1.05] transition-all 1.3s lg:text-lg md:text-lg sm:text-base"
            >
              Все кроссовки
            </p>
          </router-link>
        </li>
        <li
          class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer hover:scale-[1.05] transition-all 1.3s border-b-2 border-slate-300 w-full justify-center pb-2"
          @click="toggleShow()"
        >
          <img src="/cart.svg" alt="Cart" />
          <p class="text-[18px] font-[500] md:hidden lg:block">205 Руб</p>
        </li>
        <li
          class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer hover:scale-[1.05] transition-all 1.3s border-b-2 border-slate-300 w-full justify-center pb-2"
          @click="$router.push({ name: 'Purchases' })"
        >
          <img src="/heart.svg" alt="Cart" />
          <span class="text-[19px] font-light md:text-[14px]">Закладки</span>
        </li>
        <li
          class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer hover:scale-[1.05] transition-all 1.3s pb-5 border-b-2 border-slate-300 w-full justify-center "
          @click="$router.push({ name: 'Profile' })"
        >
          <img src="/profile.svg" alt="Cart" />
          <span class="text-[19px] font-light md:text-[14px]">Профиль</span>
        </li>
      </ul>
    </div>
  </div>
</template>
