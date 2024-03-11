<script setup lang="ts">
import buttonBack from "@/components/buttonBack.vue";
import feedBack from "@/components/feedBackComponents/feedBack.vue";
</script>
<template>
  <div class="flex md:ml-[50px] sm:ml-[20px] mt-5 gap-[15px]">
    <div class="flex gap-5 items-center">
			<buttonBack/>
			<h2 class="text-3xl">Отзывы</h2>
    </div>
  </div>
	
  <div>
    <feedBack />
  </div>
</template>
