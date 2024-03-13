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
      <router-link to="main">
        <img src="/logo_3.jpeg" alt="Logo" class="w-16" />
      </router-link>
      <input type="checkbox" id="checkbox" @click="toggleDropdown(0)">
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>


    </div>

    <div
      class="burger flex justify-center bg-white"
      :class="{ closed: !dropdowns[0] }"
      style="max-height: 370px; max-height:0px;"
    >
      <ul class="flex items-center gap-10 flex-col w-full md:gap-5 mt-12">
        <li class="border-b-2 border-slate-300 w-full flex justify-center pb-2">
          <router-link to="sneakers_page">
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
<style scoped>
#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .3s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: #abcfff;
  border-radius: 5px;
  transition-duration: .3s;
}

#checkbox:checked + .toggle .bars {
  margin-left: 13px;
}

#checkbox:checked + .toggle #bar2 {
  transform: rotate(135deg);
  margin-left: 0;
  transform-origin: center;
  transition-duration: .3s;
}

#checkbox:checked + .toggle #bar1 {
  transform: rotate(45deg);
  transition-duration: .3s;
  transform-origin: left center;
}

#checkbox:checked + .toggle #bar3 {
  transform: rotate(-45deg);
  transition-duration: .3s;
  transform-origin: left center;
}

</style>