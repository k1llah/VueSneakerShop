<script setup lang="ts">
	import SignUp_View from '@/components/profileComponents/Sign_up.vue';
  import buttonBack from '@/components/buttonBack.vue';
</script>

<template>
	
		<div class="container min-h-[600px]">
    <div class="flex ml-[50px] mt-5 gap-[15px] items-center">
      <buttonBack/>
      <h2 class="text-3xl">Регистрация</h2>
    </div>
		
    <SignUp_View/>
  </div>
</template>

