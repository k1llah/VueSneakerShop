<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <div class="flex m-auto mt-20 justify-around">
    <div>
      <img src="/prof.jpeg" alt="profile image" class="w-[150px]"/>
			
    </div>
    <div class="flex">
      <div class="flex flex-col gap-10">
        <div class="border-b-2 border-[#166534] pb-[10px] w-[200px]">
					<span class="text-slate-400 text-[16px]">Фамилия:</span>
					<h4 class="text-black text-[20px]">Не указано</h4>
				</div>
        <div class="border-b-2 border-[#166534] pb-[10px] w-[200px]">
					<span class="text-slate-400 text-[16px]">Фамилия:</span>
					<h4 class="text-black text-[20px]">Иванов</h4>
				</div>
        <div class="border-b-2 border-[#166534] pb-[10px] w-[200px]">
					<span class="text-slate-400 text-[16px]">Возраст:</span>
					<h4 class="text-black text-[20px]">23 года </h4>
				</div>
      </div>
      <div></div>
    </div>
  </div>
</template>
