<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import switchModeButton from './switchModeButton.vue';
import { ref, onMounted, watch, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useSneaker } from "@/stores/sneaker";
import { useAllStore } from "@/stores/all";
import burger from "@/components/burger.vue";
import { useCartStore } from "@/stores/addToCart";
import { useAuthStore } from "@/stores/authData";
import axios from "axios";
const cartStore = useCartStore();
const router = useRouter();
const sneakerStore = useSneaker();
const allStore = useAllStore();
const authStore = useAuthStore();
const localRole = ref(localStorage.getItem("role"));
const isDark = useDark();
const toggleDark = useToggle(isDark);

const role = ref();
let timer = ref(false);
onBeforeMount(() => {
  cartStore.cartDataGet();
  cartStore.localCounter = cartStore.items.length;
});
async function checkIsAdmin() {
  try {
    const data = await axios.post("http://localhost:3001/api/get-data", {
      uuid: localStorage.getItem("uuid"),
      id: localStorage.getItem("id"),
    });
    role.value = data.data.user.role;
    localStorage.setItem("role", role.value);
  } catch (error) {
    console.log(error);
  }
  setTimeout(() => {
    if (role.value === "ADMIN") {
      router.push({ name: "admin" });
    } else {
      location.reload();
      alert("Еще че придумал? сегодня не твой день салага");
    }
    timer.value = false;
  }, 3000);
  timer.value = true;
}

watch(
  () => cartStore.cartCounter,
  (newValue: any) => {
    cartStore.localCounter = newValue;
  }
);
watch(() => authStore.role, (newValue) => {
  localRole.value = newValue;
});
let toggleShow = () => {
  sneakerStore.show = !sneakerStore.show;
};
</script>
<template>
  <header
    class="hidden justify-between border-b border-slate-200 p-5 responsive" id="header"
  >
    <burger />
  </header>

  <header
    class="hidden justify-between border-b border-slate-200 px-8 py-8  dark:text-ghostWhiteText head" id="header"
  >
    <div class="" id="header">
      <div class="flex items-center md:gap-5 lg:gap-4">
        <router-link to="/">
          <img v-if="!isDark" src="/logo_3.jpeg" alt="Logo" class="w-16" />
          <img v-else-if="isDark" src="/footer-logo.jpeg" alt="Logo" class="w-16 rounded-[50%]" />
        </router-link>
        <h2
          class="font-medium uppercase lg:text-xl md:text-base hidden sm:text-base"
        >
          Benz Shöp
        </h2>
        <router-link to="sneakers_page">
          <p
            class="text-slate-700 hover:scale-[1.05] transition-all 1.3s lg:text-lg md:text-lg sm:text-sm dark:text-ghostWhiteText"
          >
            Все кроссовки
          </p>
        </router-link>
        <div>
          <switchModeButton :isDark="!isDark" :changeTheme="toggleDark"/>
        </div>
      </div>
    </div>
    <ul class="flex items-center gap-10 md:gap-5">
      <li
        class="flex items-center gap-3 text-grey-500 hover:text-black 
        dark:hover:text-yellow-500 cursor-pointer hover:scale-[1.05] transition-all 1.3s"
        @click="toggleShow()"
        v-if="localRole != 'ADMIN'"
      >
        <img src="/cart.svg" alt="Cart" />
        <p
          class="text-[13px] font-[500] mt-[-22px] ml-[-13px] rounded-[50%] bg-gray-300 block w-[20px] h-[20px] text-center dark:text-black "
        >
          {{ cartStore.localCounter }}
        </p>
      </li>
      <li
        class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer hover:scale-[1.05] transition-all 1.3s dark:hover:text-[#ff0]"
        @click="$router.push({ name: 'Purchases' })"
      >
        <img src="/heart.svg" alt="Cart" />
        <span class="text-[19px] font-light md:text-[14px]">Закладки</span>
      </li>
      <li
        class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer hover:scale-[1.05] transition-all 1.3s dark:hover:text-[#ff0]"
        @click="$router.push('/all_posts')"
      >
        <img src="/newspaper.png" alt="Cart" class="max-w-[25px]"  />
        <span class="text-[19px] font-light md:text-[14px]">Блог</span>
      </li>
      <li
        class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer hover:scale-[1.05] transition-all 1.3s dark:hover:text-[#ff0]"
        @click="$router.push({ name: 'Profile' })"
      >
        <img src="/profile.svg" alt="Cart" />
        <span class="text-[19px] font-light md:text-[14px]">Профиль</span>
      </li>
      <li
        v-if="localRole === 'ADMIN'"
        class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer hover:scale-[1.05] transition-all 1.3s dark:hover:text-[#ff0]"
        @click="checkIsAdmin()"
      >
        <span class="text-[19px] font-light md:text-[14px]">Админка</span>

        <svg viewBox="25 25 50 50" v-if="timer">
          <circle r="20" cy="50" cx="50"></circle>
        </svg>
      </li>
    </ul>
  </header>
</template>
<style scoped>
svg {
 width: 1.7em;
 transform-origin: center;
 animation: rotate4 2s linear infinite;
}

circle {
 fill: none;
 stroke: hsl(214, 97%, 59%);
 stroke-width: 2;
 stroke-dasharray: 1, 200;
 stroke-dashoffset: 0;
 stroke-linecap: round;
 animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
 100% {
  transform: rotate(360deg);
 }
}

@keyframes dash4 {
 0% {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
 }

 50% {
  stroke-dasharray: 90, 200;
  stroke-dashoffset: -35px;
 }

 100% {
  stroke-dashoffset: -125px;
 }
}
@media (min-width: 815px) {
  .head{
    display: flex;
  }
}
@media (max-width: 815px) {
  .responsive{
    display: flex
  }
}
</style>