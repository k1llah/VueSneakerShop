<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import gsap from "gsap";

// Define refs for elements you want to access
const content = ref<HTMLElement | null>(null);
const title = ref<HTMLElement | null>(null);
const isVisible = ref(false);
// Other variables and functions...

onMounted(() => {
  // Watch for changes in isVisible and trigger animations accordingly
  watchEffect(() => {
    if (isVisible.value) {
      animateText();
    }
  });
  
  // Add scroll event listener when the component is mounted
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  // Get the position of content element
  const contentPosition = content.value?.getBoundingClientRect().top || 0;
  const screenPosition = window.innerHeight / 1.8;
  
  // If content is visible, trigger animations and remove scroll event listener
  if (contentPosition < screenPosition) {
    isVisible.value = true;
    window.removeEventListener("scroll", handleScroll);
  }
};

// Define function to animate text using GSAP
const animateText = () => {
  gsap.from(title.value, {
    opacity: 0,
    y: -400,
    duration: 1.2,
    ease: 'bounce.out',
  });
};

// Define ref for dropdowns
const dropdowns = ref<boolean[]>([false, false, false]);

// Define function to toggle dropdown
const toggleDropdown = (index: number) => {
  dropdowns.value[index] = !dropdowns.value[index];
  const dropdownContent = document.querySelector('.textBlock') as HTMLDivElement
  
  if (dropdownContent) {
    if (dropdowns.value[index]) {
      gsap.to(dropdownContent, { height: "350px", padding: "20px", duration: 0.7, ease: "power2.out" });
    } else {
      gsap.to(dropdownContent, { height: "0px", duration: 0.7, ease: "power2.out" });
    }
  }
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
          
            <div
            
              class="textBlock flex justify-center bg-white p-5"
              :class="{ 'open': dropdowns[0], 'closed': !dropdowns[0] }"
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
          
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.open {
  max-height: 1000px; /* Выберите желаемую высоту */
  transition: max-height 0.7s ease;
}

.closed {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.7s ease;
}
</style>