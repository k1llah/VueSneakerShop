<script setup lang="ts">

</script>
<template>

  <div class="flex gap-20 justify-center mt-36">
		<router-link to="">
    <div class="relative hover:scale-[1.05] transition-all 1.3s">
      <div class="absolute inset-0 bg-black opacity-50 z-10 hover:opacity-0 transition-all 1.1s cursor-pointer"></div>
      <div class="w-[350px] h-[450px] flex justify-center bg-cover items-end" style="background-image: url('/Nike.jpeg');">
        <p class="text-center text-2xl font-xl mb-10 text-white z-20">Мужская обувь</p>
      </div>
    </div>
	</router-link>

		<router-link to="">
    <div class="relative hover:scale-[1.05] transition-all 1.3s">
      <div class="absolute inset-0 bg-black opacity-50 z-10 hover:opacity-0 transition-all 1.1s"></div>
      <div class="w-[350px] h-[450px] flex justify-center bg-cover items-end" style="background-image: url('/womansPart.jpeg');">
        <p class="text-center text-2xl font-xl mb-10 text-white z-20">Женская обувь</p>
      </div>
    </div>
	</router-link>
  </div>

</template>

