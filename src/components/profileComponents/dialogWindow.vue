<script setup lang="ts">
import { ref } from "vue";
import buttonBack from "@/components/buttonBack.vue";
import { useAllStore } from "@/stores/all";
import EditProfile from './editProfile.vue';
import myOrders from './myOrders.vue';
import myAddress from './myAddress.vue';
const allStore = useAllStore();
const target = ref("");
target.value = localStorage.getItem('page')!;
</script>
<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="w-full flex justify-center">
    <div class="bg-white md:w-[600px] md:h-[800px] sm:w-[300px] sm:h-[600px] fixed top-10 z-20 md:p-10 sm:p-5 m-auto">

      <div v-if="target == 'orders'">
				<myOrders/>
				
			</div>
      <div v-else-if="target == 'editProfile'">
				<EditProfile/>
			</div>
			

      <div v-else-if="target == 'address'">
			<myAddress/>
			</div>
    </div>
  </div>
</template>
