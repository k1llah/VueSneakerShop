<script setup lang="ts">
		
</script>
<template>
  <div class="flex gap-20 justify-center mt-32">
		<router-link to="">
    <div class="relative">
      <div class="absolute inset-0 bg-black opacity-50 z-10 hover:opacity-0 transition-all 1.1s cursor-pointer"></div>
      <div class="relative w-[300px] h-[400px] flex justify-center bg-cover items-end" style="background-image: url('/Nike.jpeg');">
        <p class="text-center text-2xl font-xl mb-10 text-white z-20">Женская обувь</p>
      </div>
    </div>
	</router-link>

		<router-link to="">
    <div class="relative">
      <div class="absolute inset-0 bg-black opacity-50 z-10 hover:opacity-0 transition-all 1.1s"></div>
      <div class="relative w-[300px] h-[400px] flex justify-center bg-cover items-end" style="background-image: url('/womansPart.jpeg');">
        <p class="text-center text-2xl font-xl mb-10 text-white z-20">Женская обувь</p>
      </div>
    </div>
	</router-link>
  </div>
</template>

