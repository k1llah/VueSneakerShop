<script setup lang="ts">
import { ref } from "vue";
import { useAllStore } from '@/stores/all';
const allStore = useAllStore();
</script>
<template>
  <div class="mt-16">
    <form class="flex flex-col">
      <div class="flex flex-col gap-2 justify-center ">
        <input
        placeholder="Фамилия"
        class="border-2 text-gray-500 rounded-md p-2 mb-4 focus:bg-gray-60 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 md:w-96"
        type="email"
      />
      <input
        placeholder="Имя"
        class="border-2 text-gray-500 rounded-md p-2 mb-4 focus:bg-gray-60 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 md:w-96"
        type="email"
      />
      <input
        placeholder="Отчество"
        class="border-2 text-gray-500 rounded-md p-2 mb-4 focus:bg-gray-60 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 md:w-96"
        type="email"
      />
      </div>

      <div class="flex space-x-4 mb-8 mt-3">
        <input
          placeholder="Номер телефона"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="tel"
        />
        <input
          placeholder="Город"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
        />
      </div>
      <div class="flex space-x-4 mb-8">
        <input
          placeholder="Почтовый индекс"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="num"
        />
        <input
          placeholder="Улица"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
        />
      </div>
      <div class="flex space-x-4 mb-8">
        <input
          placeholder="Дом"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
        />
        <input
          placeholder="Корпус"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
        />
      </div>
      <div class="flex space-x-4 mb-8">
        <input
          placeholder="Квартира"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
        />
        
      </div>
    </form>
    <div class="flex gap-5 flex-wrap justify-center md:mt-8">
     <button class="bg-[#60d389]   px-7 py-3 rounded-lg text-white text-sm font-normal hover:bg-green-700 transition duration-250">
       Создать адрес 
     </button>
     <button class="bg-[#7747ff] px-4 py-2 rounded-lg text-white text-sm font-normal hover:bg-red-600 transition duration-250" 
     @click="allStore.targetPage = ''">
       Вернуться назад 
     </button>
    </div>
  </div>
</template>
