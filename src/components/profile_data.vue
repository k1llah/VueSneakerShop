<script setup lang="ts">
import axios from 'axios';
import type { post } from 'node_modules/axios/index.cjs';
import { ref } from "vue";
const email = ref('');
const first_name = ref('')
const lastName = ref('')

const getData = async function () {
  try{
    const data = await axios.post('/profile-data',{

    })
  }
  catch(error){
    console.log(error)
  }
}
</script>

<template>
  <div class="flex m-auto mt-20 justify-around">
    <div class="">
      <img src="/prof.jpeg" alt="profile image" class="w-[150px] rounded-[50%]" />
      <button class="border text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-12 w-[150px] rounded-md bg-neutral-800 p-0 font-extrabold hover:bg-sky-700 text-[13px] mt-[50px]" >Загрузить свое фото</button>

    </div>
    <div class="flex gap-10">
      <div class="flex flex-col gap-10">
        <div class="border-b-2 border-[#166534] pb-[10px] w-[200px]">
          <span class="text-slate-400 text-[16px]">Фамилия:</span>
          <h4 class="text-black text-[20px]">Не указано</h4>
        </div>
        <div class="border-b-2 border-[#166534] pb-[10px] w-[200px]">
          <span class="text-slate-400 text-[16px]">Имя:</span>
          <h4 class="text-black text-[20px]">Иван</h4>
        </div>
        <div class="border-b-2 border-[#166534] pb-[10px] w-[200px]">
          <span class="text-slate-400 text-[16px]">Email:</span>
          <h4 class="text-black text-[20px]">jYrZu@example.com</h4>
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-10 justify-center h-[100%]">
          <div class="pb-[10px] w-[200px]">
            <button
              class="border text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-14 w-[150px] rounded-md bg-neutral-800 p-2 font-extrabold hover:bg-sky-700"
            >
              <div
                class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-yellow-500"
              ></div>
              <div
                class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"
              ></div>
              <div
                class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-pink-500"
              ></div>
              <div
                class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"
              ></div>
              <p class="z-10 absolute bottom-2 left-2">Мои покупки</p>
            </button>
          </div>
          <div class="pb-[10px] w-[200px]">
            <button
              class="relative group cursor-pointer text-sky-50 overflow-hidden h-12 w-[150px] rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold text-[13px]"
            >
              <div
                class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"
              ></div>
              <div
                class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"
              ></div>
              <div
                class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"
              ></div>
              <div
                class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"
              ></div>
              <p class="z-10">Редактировать профиль</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
