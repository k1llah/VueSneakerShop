<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import gsap from "gsap";
import scrollComponent from "./scrollComponent.vue";
const content = ref();
const isVisible = ref(false);
const { title, span } = {
  title: ref(null),
  span: ref(null),
};
onMounted(() => {
  watchEffect(() => {
    if (isVisible.value) {
      animateText();
    }
  });

  window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const contentPosition = content.value.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.6;

  if (contentPosition < screenPosition) {
    isVisible.value = true;
    window.removeEventListener("scroll", handleScroll);
  }
};

const animateText = () => {
  gsap.from(title.value, {
    opacity: 0,
    x: 600,
    duration: 1.1,
    ease: "back.inOut",
  });

  gsap.from(span.value, {
    opacity: 0,
    x: -600,
    duration: 1.1,
    ease: "back.inOut",
  });
};
</script>

<template>
  <div class="mt-40 ml-32 flex items-center border-b-2 border-slate-300" ref="content">
    <h2
      class="text-[45px] text-center font-[400] text-gradient text-gradient-to-r from-purple-600 via-cyan-400 to-red-500 lol"
      :class="{ 'hidden-text': !isVisible }"
      ref="title"
    >
      Sneaker
    </h2>
    <span
      class="text-[45px] text-center font-[400] lol"
      :class="{ 'hidden-text': !isVisible }"
      ref="span"
      >Blog</span
    >
  </div>



	<div class="h-[650px]">
		<p class="text-center pt-56 text-[35px]">Тут будет сникерБлог </p>
	</div>
</template>
<style>
.lol {
  background: #6c6c6c;
  background: linear-gradient(to left, #6c6c6c 10%, #000000 67%, #72736d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
