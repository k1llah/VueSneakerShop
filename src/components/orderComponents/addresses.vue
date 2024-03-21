<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import addressTemplate from './addressTemplate.vue';
let isAddress = ref(false);
let address = ref();
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
dataAddress()
</script>
<template>
  <div>
    <h2 class="text-3xl ml-20 mt-8">Мои адреса</h2>
  </div>
  <div v-if="isAddress" class="flex ml-20 overflow-scroll max-w-[700px] max-h-fit mt-5">
		<addressTemplate
		v-for="item in address" 
		:key="item.id"
		:id="item.id"
		:firstName="item.firstName"
		:city="item.city"
		:street="item.street"
		:phoneNumber="item.phoneNumber"
		/>
	</div>
	<div v-else class="max-w-[500px] mt-10 ml-20">
		<p class="text-xl ">К сожалению, у вас нет добавленных адресов, но вы можете добавить свой адрес на странице профиля  
		<router-link to="profile" class="text-[#7747ff] cursor-pointer">во вкладке мои адреса</router-link>
		</p>
	</div>
</template>
