<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="flex justify-between border-b border-slate-200 px-8 py-8">
    <div>
      <div class="flex items-center gap-4">
        <router-link to="/">
        <img src="/logo_3.jpeg" alt="Logo" class="w-16" />
      </router-link>
        <h2 class="text-lg font-bold uppercase">Benz Shöp</h2>
        <router-link to="/sneakers_page">
        <p class="text-slate-500">Все кроссовки</p>
      </router-link>
      </div>
    </div>
    <ul class="flex items-center gap-10">
      <li
        class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer"
      >
        <img src="/cart.svg" alt="Cart" />
        <b>205 Руб</b>
      </li>
      <li
        class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer"
        @click="$router.push({ name: 'Purchases' })"
      >
        <img src="/heart.svg" alt="Cart" />
        <span>Закладки</span>
      </li>
      <li
        class="flex items-center gap-3 text-grey-500 hover:text-black cursor-pointer" @click="$router.push({ name: 'Profile' })"
      >
        <img src="/profile.svg" alt="Cart" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
