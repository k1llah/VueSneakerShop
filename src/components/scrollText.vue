	<script setup lang="ts">
	import { ref, onMounted, watchEffect } from "vue";
	import gsap from "gsap";
	import scrollComponent from './scrollComponent.vue';
	const content = ref();
	const isVisible = ref(false);
	const { title, paragraph1, paragraph2, subtitle } = {
		title: ref(null),
		paragraph1: ref(null),
		paragraph2: ref(null),
		subtitle: ref(null),
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
		const screenPosition = window.innerHeight / 1.8;
	
		if (contentPosition < screenPosition) {
			isVisible.value = true;
			window.removeEventListener("scroll", handleScroll);
		}
	};
	
	const animateText = () => {
		gsap.from(title.value, {
			opacity: 0,
			y: -400,
			duration: 1.2,
			ease: "expo.out",
		});
	
		gsap.from(paragraph1.value, {
			opacity: 0,
			x: -400,
			duration: 1.2,
			ease: "expo.out",
		});
	
		gsap.from(paragraph2.value, {
			opacity: 0,
			x: 400,
			duration: 1.2,
			ease: "expo.out",
		});
	
		gsap.from(subtitle.value, {
			opacity: 0,
			y: 700,
			duration: 1.2,
			ease:	'expo.out',
		});
	};
	</script>
<template>
  <div>
    <div class="content text-center mt-28 p-10 bg-[#f8f8ff] pb-28" ref="content">
      <!-- Ваш контент здесь -->
      <h2 ref="title" class="text-4xl" :class="{ 'hidden-text': !isVisible }">
        Добро пожаловать в мир стильных и комфортных кроссовок!
      </h2>
      <p ref="paragraph1" class="text-left mt-28 text-2xl font-[500] leading-[40px]" :class="{ 'hidden-text': !isVisible }">
        Исследуйте мир кроссовок вместе с нами! Мы предлагаем широкий выбор
        моделей от ведущих брендов, обеспечивая высочайшее качество и комфорт
      </p>
      <p ref="paragraph2" class="text-right text-2xl font-[300] leading-[40px] mt-24" :class="{ 'hidden-text': !isVisible }">
        Опыт покупки, которому вы можете доверять Наша цель — не просто продать
        кроссовки, но создать для вас незабываемый опыт покупок. Наш дружелюбный
        и профессиональный персонал всегда готов помочь вам выбрать идеальную
        пару кроссовок и ответить на все ваши вопросы.
      </p>
      <h3 ref="subtitle" class="text-2xl mt-10" :class="{ 'hidden-text': !isVisible }">Погрузитесь в <span class="text-[#7747ff]">мир кроссовок </span> с нами!</h3>
    </div>
  </div>
	<img src="/4-Collins-x-Air-Max.gif" alt="AirMax 95">

	<scrollComponent/>
</template>


<style>
.hidden-text {
  opacity: 0;
}
</style>
