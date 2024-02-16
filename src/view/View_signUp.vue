<script setup lang="ts">
	import SignUp_View from '@/components/Sign_up.vue';

</script>

<template>
	
		<div class="container min-h-[600px]">
    <div class="flex ml-[50px] mt-5 gap-[15px]">
      <button
        class="h-[35px] w-[35px] border rounded-[10px] border-[#F2F2F2] flex justify-center items-center text-white hover:bg-slate-600 transition hover:scale-[1.2] disabled:bg-slate-400 cursor-pointer"
        @click="$router.go(-1)"
      >
        <img
          src="/arrow-right.svg"
          class="rotate-180"
          alt="close button"
        />
      </button>
      <h2 class="text-3xl">Регистрация</h2>
    </div>
		<div class="flex mt-[50px] items-center flex-col">
			<h3 class="text-[28px] font-light">
				<span class="text-[#7747ff]" v-if="">Зарегистрируйтесь</span>
			</h3>
			
		</div>
    <SignUp_View/>
  </div>
</template>

