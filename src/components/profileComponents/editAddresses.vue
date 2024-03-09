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
const postalCode = ref();
const buildingNumber = ref("");
const houseNumber = ref();
const apartment = ref();
let warningAll = ref("");
let dataAddress = ref()
const correctDataInput = computed(
  () =>
    houseNumber.value !== null &&
    apartment.value !== null &&
    postalCode.value !== null &&
    phoneNumber.value !== null &&
    name.value.length >= 2 &&
    lastName.value.length >= 2 &&
    surname.value.length >= 2 &&
    city.value.length >= 2 &&
    street.value.length >= 2
);
const editAddress = async () => {
  try {
    const data = await axios.post(
      "http://localhost:3001/api/get-address",
      {
        addressId: allStore.idAddress,
        userId: localStorage.getItem("id"),
      }
			);
			dataAddress.value = data
  } catch (error) {
    console.log(error);
  }
	console.log(allStore.idAddress, dataAddress.value);
};
editAddress()
console.log(allStore.idAddress, dataAddress.value);
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
          minlength="10"
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
          type="number"
          v-model="postalCode"
          minlength="6"
        />

        <input
          placeholder="Улица *"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
          v-model="street"
          minlength="2"
        />
      </div>
      <div class="flex space-x-4 mb-8">
        <input
          placeholder="Дом *"
          class="border-2 text-gray-500 rounded-md p-2 w-1/2 focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="number"
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
          type="number"
          v-model="apartment"
        />
      </div>
      <p class="text-red-600 text-[16px]">{{ warningAll }}</p>
    </form>

    <div class="flex gap-5 flex-wrap md:mt-8">
      <button
        class="cursor-pointer duration-200 hover:scale-125 active:scale-100"
        title="Go Back"
        @click="allStore.targetPage = '', allStore.headerText = 'Мои адреса для доставки'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          class="stroke-blue-300"
        >
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M11 6L5 12M5 12L11 18M5 12H19"
          ></path>
        </svg>
      </button>
      <button
        class="bg-[#60d389] px-7 py-3 rounded-lg text-white text-sm font-normal hover:bg-green-700 transition duration-250"
        @click="editAddress()"
      >
        Создать адрес
      </button>

      <button
        class="bg-[#7747ff] px-4 py-2 rounded-lg text-white text-sm font-normal hover:bg-red-600 transition duration-250"
        @click=""
      >
        Отменить изменения
      </button>
    </div>
  </div>
</template>
