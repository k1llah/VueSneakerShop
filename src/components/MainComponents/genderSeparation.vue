<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { useGenderStore } from '@/stores/separate';
  let genderStore = useGenderStore();
  let clickValue = ref('')
  genderStore.onClickOnGender = clickValue.value
  
  const setGender = (gender: string) => {
    clickValue.value = gender;
    localStorage.setItem('gender', gender);
  }

  watch(clickValue, () => {
    genderStore.onClickOnGender = clickValue.value
    setGender(clickValue.value)
    console.log(genderStore.onClickOnGender)
    console.log(clickValue.value)
  });
  
</script>
<template>

  <div class="flex gap-20 justify-center mt-36">
		<router-link to="/gender">
    <div class="relative hover:scale-[1.05] transition-all 1.3s" @click="setGender('man')">
      <div class="absolute inset-0 bg-black opacity-50 z-10 hover:opacity-0 transition-all 1.1s cursor-pointer"></div>
      <div class="w-[350px] h-[450px] flex justify-center bg-cover items-end" style="background-image: url('/Nike.jpeg');"  >
        <p class="text-center text-2xl font-xl mb-10 text-white z-20">Мужская обувь</p>
      </div>
    </div>
	</router-link>

		<router-link to="/gender">
    <div class="relative hover:scale-[1.05] transition-all 1.3s" @click="setGender('woman')">
      <div class="absolute inset-0 bg-black opacity-50 z-10 hover:opacity-0 transition-all 1.1s"></div>
      <div class="w-[350px] h-[450px] flex justify-center bg-cover items-end" style="background-image: url('/womansPart.jpeg');" >
        <p class="text-center text-2xl font-xl mb-10 text-white z-20">Женская обувь</p>
      </div>
    </div>
	</router-link>
  </div>

</template>

