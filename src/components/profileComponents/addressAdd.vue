<script setup lang="ts">
import { ref, computed } from "vue";
import axios from "axios";
import { useAllStore } from "@/stores/all";
const allStore = useAllStore();

const name = ref("");
const lastName = ref("");
const surname = ref("");
const city = ref("");
const street = ref("");
const phoneNumber = ref("");
const postalCode = ref("");
const buildingNumber = ref("");
const houseNumber = ref("");
const apartment = ref("");
let warning = ref("");
let warningAll = ref("");
const correctDataInput = computed(
  () =>
    buildingNumber.value !== "" &&
    houseNumber.value !== "" &&
    apartment.value !== "" &&
    name.value.length >= 2 &&
    lastName.value.length >= 2 &&
    surname.value.length >= 2 &&
    city.value.length >= 2 &&
    street.value.length >= 2 &&
    phoneNumber.value.length >= 2 &&
    postalCode.value.length >= 2
);
const createAddress = async () => {
  try {
    if (correctDataInput.value == true) {
      const newAddress = await axios.post(
        "http://localhost:3001/api/create-address",
        {
          name: name.value,
          lastName: lastName.value,
          surname: surname.value,
          city: city.value,
          street: street.value,
          phoneNumber: phoneNumber.value,
          postalCode: postalCode.value,
          buildingNumber: buildingNumber.value,
          houseNumber: houseNumber.value,
          apartment: apartment.value,
        },
        )
        location.reload()
    } else if (!correctDataInput.value) {
      setTimeout(() => {
        warningAll.value = "";
      }, 3000);
      warningAll.value = "*Заполните все обязательные поля или заполните их корректно"
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <div class="mt-16">
    <form class="flex flex-col">
      <div class="flex flex-col gap-2 justify-center">
        <input
          placeholder="Фамилия *"
          class="border-2 text-gray-500 rounded-md p-2 mb-4 focus:bg-gray-60 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 md:w-96"
          type="text"
          v-model="lastName"
        />
        
        <input
          placeholder="Имя *"
          class="border-2 text-gray-500 rounded-md p-2 mb-4 focus:bg-gray-60 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 md:w-96"
          type="text"
          v-model="name"
        />
        
        
        <input
          placeholder="Отчество (при наличии)"
          class="border-2 text-gray-500 rounded-md p-2 mb-4 focus:bg-gray-60 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 md:w-96"
          type="text"
          v-model="surname"
        />
      </div>

      <div class="flex space-x-4 mb-8 mt-3">
        <input
          placeholder="Номер телефона *"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="tel"
          v-model="phoneNumber"
        />
        
        <input
          placeholder="Город *"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
          v-model="city"
        />
      </div>
      
      <div class="flex space-x-4 mb-8">
        <input
          placeholder="Почтовый индекс *"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="num"
          v-model="postalCode"
        />
        
        <input
          placeholder="Улица *"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
          v-model="street"
        />
        
      </div>
      <div class="flex space-x-4 mb-8">
        <input
          placeholder="Дом *"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
          v-model="houseNumber"
        />
        <input
          placeholder="Корпус"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
          v-model="buildingNumber"
        />
      </div>
      <div class="flex space-x-4 mb-8">
        <input
          placeholder="Квартира *"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
          v-model="apartment"
        />
      </div>
      <p class="text-red-600 text-[16px]">{{ warningAll }}</p>
    </form>

    <div class="flex gap-5 flex-wrap justify-center md:mt-8">
      <button
        class="bg-[#60d389] px-7 py-3 rounded-lg text-white text-sm font-normal hover:bg-green-700 transition duration-250"
        @click="createAddress()"
      >
        Создать адрес
      </button>
      <button
        class="bg-[#7747ff] px-4 py-2 rounded-lg text-white text-sm font-normal hover:bg-red-600 transition duration-250"
        @click="allStore.targetPage = ''"
      >
        Вернуться назад
      </button>
    </div>
  </div>
</template>
