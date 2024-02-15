<template lang="">
  <div
    class="max-w-[330px] m-auto mt-5 relative flex flex-col p-4 rounded-md text-black bg-white"
  flex items-center>
    <form class="flex flex-col gap-3">
      <div class="block relative">
        <label
          for="Name"
          class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >Имя</label
        >
        <input
          type="name"
          id="Name"
          class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
        />
      </div>


      <div class="block relative">
        <label
          for="Email"
          class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >Email</label
        >
        <input
          type="email"
          id="Email"
          class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
        />
      </div>


      <div class="block relative">
        <label
          for="password"
          class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >Пароль</label
        >
        <input
          type="text"
          id="password"
          class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
        />
      </div>
      <div class="block relative">
        <label
          for="password"
          class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >Подтвердите пароль</label
        >
        <input
          type="text"
          id="password"
          class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
        />
      </div>
      <div>
        <a class="text-sm text-[#7747ff]" href="#">Forgot your password? </a>
      </div>
      <button
        type="submit"
        class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
      >
        Submit
      </button>
    </form>
    <div class="text-sm text-center mt-[1.6rem]">
    Уже есть аккаунт
      <a class="text-sm text-[#7747ff]" href="#">Войдите!</a>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
