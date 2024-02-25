<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import gsap from "gsap";
import { Back } from "gsap";
const content = ref();
const isVisible = ref(false);
const {title} = {
  title: ref(null),
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
			ease:	'bounce.out',
		});
	}

const dropdowns = ref([false, false, false]); // Массив для отслеживания состояния выпадающих меню

const toggleDropdown = (index: number) => {
  dropdowns.value[index] = !dropdowns.value[index];
};
</script>
<template>
  <div class="bg-[#f8f8ff] pt-36" ref = "content">
    <h3 class="text-5xl text-center" ref="title" :class="{ 'hidden-text': !isVisible }">
      <span class="text-[#7747ff]">Почему</span> мы?🤔
    </h3>
    <div class="wrapper w-full mt-36">
      <div class="dropDownMenus flex justify-center flex-col items-center">
        <div class="w-[550px]">
          <div
            class="flex justify-end items-center gap-8 bg-[#e3e3e3] p-2 rounded-t-xl"
            @click="toggleDropdown(0)"
          >
            <h2 class="text-[23px]">Достоинства низкой стоимости💸</h2>
            <img class="mr-3 w-8" src="/down.png" alt="" />
          </div>
          <transition name="fade">
            <div
              v-show="dropdowns[0]"
              class="textBlock flex justify-center bg-white p-5"
            >
              <p class="text-[18px] font-[300] leading-[30px]">
                Доступность для широкого круга клиентов: Низкая стоимость делает
                товары более доступными для большего количества потребителей,
                что позволяет вашему магазину привлекать разнообразную
                аудиторию. Экономия денег для клиентов: Клиенты ценят
                возможность сэкономить деньги при покупке товаров. Низкие цены
                могут стать дополнительным стимулом для совершения покупок.
                Привлечение внимания: Магазины с низкими ценами могут привлечь
                больше внимания и привлечь больше потенциальных клиентов,
                особенно тех, кто ценит экономичные покупки.
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.7s;
}

.fade-enter, .fade-leave-to {
	height: auto; /* Используем auto вместо 0 */
  opacity: 0;
  overflow: hidden;
	transition: all 0.7s;
}
</style>
