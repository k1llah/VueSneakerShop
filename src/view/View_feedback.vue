<script setup lang="ts">
import buttonBack from "@/components/buttonBack.vue";
import feedBack from "@/components/feedBackComponents/feedBack.vue";
</script>
<template>
  <div class="container-bg">
  <div class="flex md:ml-[50px] sm:ml-[20px]  gap-[15px]">
    <div class="flex gap-5 items-center mt-5 bg-white opacity-90 p-3 rounded-2xl">
			<buttonBack/>
			<h2 class="text-3xl ">Отзывы</h2>
    </div>
  </div>
	
  <div>
    <feedBack />
  </div>
</div>
</template>




<style scoped>
.container-bg {
  width: 100%;
  height: 100%;
  --s: 60px;
  --c1: #180a22;
  --c2: #5b42f3;
  --_g: radial-gradient(
    25% 25% at 25% 25%,
    var(--c1) 99%,
    rgba(0, 0, 0, 0) 101%
  );
  background:
    var(--_g) var(--s) var(--s) / calc(2 * var(--s)) calc(2 * var(--s)),
    var(--_g) 0 0 / calc(2 * var(--s)) calc(2 * var(--s)),
    radial-gradient(50% 50%, var(--c2) 98%, rgba(0, 0, 0, 0)) 0 0 / var(--s)
      var(--s),
    repeating-conic-gradient(var(--c2) 0 50%, var(--c1) 0 100%)
      calc(0.5 * var(--s)) 0 / calc(2 * var(--s)) var(--s);
}
</style>