<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useGenderStore } from "@/stores/separate";
const genderStore = useGenderStore();
let gender = ref("");



let data = genderStore.sneakersData;
if (genderStore.onClickOnGender == "man") {
  gender.value = "Мужская обувь";
} else if (genderStore.onClickOnGender == "woman") {
  gender.value = "Женская обувь";
} else {
  gender.value =
    "Произошла какая то ошибка, мы уже работаем над ее исправлением";
}
onMounted(async () => {
await genderStore.genderRoute();
console.log(genderStore.sneakersData);
});

</script>
<template>
  <div class="flex ml-[50px] mt-5 gap-[15px]">
    <div class="flex gap-5">
      <button
        class="h-[35px] w-[35px] border rounded-[10px] border-[#F2F2F2] flex justify-center items-center text-white hover:bg-slate-600 transition hover:scale-[1.2] disabled:bg-slate-400 cursor-pointer"
        @click="$router.go(-1)"
      >
        <img src="/arrow-right.svg" class="rotate-180" alt="close button" />
      </button>
      <h2 class="text-3xl">{{ gender }}</h2>
    </div>
  </div>
</template>
