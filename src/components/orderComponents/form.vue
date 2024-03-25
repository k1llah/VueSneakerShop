<script setup lang="ts">
import { ref, computed } from "vue";
import axios from "axios";
import { useAllStore } from "@/stores/all";
import { useOrderStore } from "@/stores/order";
import { useFormStore } from '@/stores/formStore';
const formStore = useFormStore();
const orderStore = useOrderStore();
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
if(city.value !== '' && street.value !== '' && phoneNumber.value !== '' && postalCode.value !== '' && buildingNumber.value !== '' && houseNumber.value !== '' && apartment.value !== ''){
	formStore.isFormCorrect = true
}
</script>
<template>
  <div class="md:mt-16 sm:mt-8 overflow-scroll md:max-h-[auto] sm:max-h-[650px]max-w-[350px] pl-3">
    <form class="flex flex-col mr-3 p-5 rounded-2xl shadow-xl" v-if="!orderStore.isSelected">
      <div class="flex gap-3">
        <input
          placeholder="Фамилия *"
          class="border-[1px] text-gray-400 rounded-md p-2 mb-4 focus:bg-gray-60 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 md:w-52 sm:w-[80%]"
          type="text"
          v-model="lastName"
					minlength="2"
        />

        <input
          placeholder="Имя *"
          class="border-[1px] text-gray-400 rounded-md p-2 mb-4 focus:bg-gray-60 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 md:w-52 sm:w-[80%]"
          type="text"
          v-model="name"
					minlength="2"
        />

      
      </div>

      <div class="flex flex-wrap md:flex-nowrap  md:gap-3 mb-3">
				<input
          placeholder="Отчество (при наличии)"
          class="border-[1px] text-gray-400 rounded-md p-2 mb-4 focus:bg-gray-60 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 md:w-52 sm:w-[80%]"
          type="text"
          v-model="surname"
        />
				<input
          placeholder="Номер телефона *"
          class="border-[1px] text-gray-400 rounded-md p-2 mb-4 focus:bg-gray-60 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 md:w-52 sm:w-[80%]"
          type="tel"
          v-model="phoneNumber"
					minlength="10"
        />
      

      
      </div>

      <div class="flex flex-wrap md:flex-nowrap md:gap-3 mb-8">
				<input
          placeholder="Город *"
          class="border-[1px] text-gray-400 rounded-md p-2 md:w-52 sm:w-[80%] focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
          v-model="city"
        />
				
        <input
          placeholder="Почтовый индекс *"
          class="border-[1px] text-gray-400 rounded-md p-2 md:w-52 sm:w-[80%] focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="number"
          v-model="postalCode"
          minlength="6"
        />

      </div>
      <div class="flex flex-wrap md:flex-nowrap md:gap-3 mb-8">
        <input
          placeholder="Улица *"
          class="border-[1px] text-gray-400 rounded-md p-2 md:w-52 sm:w-[80%] focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
          v-model="street"
          minlength="2"
        />

        <input
          placeholder="Дом *"
          class="border-[1px] text-gray-400 rounded-md p-2 md:w-52 sm:w-[80%] focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="number"
          v-model="houseNumber"
        />
       
      </div>
      <div class="flex flex-wrap md:flex-nowrap md:gap-3 mb-8">
        <input
          placeholder="Квартира *"
          class="border-[1px] text-gray-400 rounded-md p-2 md:w-52 sm:w-[80%] focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="number"
          v-model="apartment"
        />
				<input
          placeholder="Корпус"
          class="border-[1px] text-gray-400 rounded-md p-2 md:w-52 sm:w-[80%] focus:bg-gray600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          type="text"
          v-model="buildingNumber"
        />
      </div>
      <p class="text-red-600 text-[16px]">{{ warningAll }}</p>
    </form>

    <div class="flex gap-5 sm:flex-wrap md:flex-nowrap md:mt-8">
      
      
			

    
      
    </div>
  </div>
</template>@/stores/formStore
