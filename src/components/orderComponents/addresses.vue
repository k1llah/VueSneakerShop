<script setup lang="ts">
import { ref, onMounted, onBeforeMount, watchEffect } from "vue";
import axios from "axios";
import addressTemplate from "./addressTemplate.vue";
import templateItem from "./templateItem.vue";
import { useOrderStore } from "@/stores/order";
import order from "./order.vue";
const orderStore = useOrderStore();
const localStorageId = localStorage.getItem("sneakerId");
let isAddress = ref(false);
let address = ref();
let data = ref();
const dataAddress = async () => {
  try {
    const data = await axios.post("http://localhost:3001/api/get-addresses", {
      userId: localStorage.getItem("id"),
    });
    address.value = data.data;
    isAddress.value = address.value.length > 0;
    console.log(address.value, isAddress.value);
  } catch (error) {
    console.log(error);
  }
};
const getDateShoe = async function (params: any) {
  try {
    const dataShoe = await axios.get(`http://localhost:3001/api/sneaker`, {
      params: {
        id: params,
      },
    });
    data.value = dataShoe.data;
    console.log(dataShoe.data);
    console.log(dataShoe.data.id);
    console.log(data.value.items);
  } catch (error) {
    console.log(error);
  }
};
onBeforeMount(() => {
  dataAddress();
  getDateShoe(localStorageId);
});
</script>
<template>
  <div>
    <h2 class="text-3xl ml-20 mt-8 text-end pr-5">Мои адреса</h2>
  </div>
  <div class="w-full flex justify-around items-center">
		<div class="ml-10">
      <templateItem
        :id="data?.id"
        :title="data?.title"
        :image="data?.imageUrl"
        :price="data?.price"
      />
    </div>
    <div
      v-if="isAddress"
      class="flex gap-10 ml-20 overflow-scroll max-w-[400px] max-h-fit mt-5"
    >
      <addressTemplate
        v-for="item in address"
        :key="item.id"
        :id="item.id"
        :firstName="item.firstName"
        :city="item.city"
        :street="item.street"
        :phoneNumber="item.phoneNumber"
        class="min-w-[320px]"
      />
    </div>

    <div v-else class="max-w-[500px] mt-10 ml-20">
      <p class="text-xl">
        К сожалению, у вас нет добавленных адресов, но вы можете добавить свой
        адрес на странице профиля
        <router-link to="profile" class="text-[#7747ff] cursor-pointer"
          >во вкладке мои адреса</router-link
        >
      </p>
    </div>
		
   
  </div>
</template>
