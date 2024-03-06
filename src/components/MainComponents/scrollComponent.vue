<script setup lang="ts">
import { ref, onMounted, watchEffect } from "vue";
import gsap from "gsap";

const content = ref<HTMLElement | null>(null);
const title = ref<HTMLElement | null>(null);
const isVisible = ref(false);

onMounted(() => {
  watchEffect(() => {
    if (isVisible.value) {
      animateText();
    }
  });

  window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const contentPosition = content.value?.getBoundingClientRect().top || 0;
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
    ease: "bounce.out",
  });
};

const dropdowns = ref<boolean[]>([true, false, false]);

const toggleDropdown = (index: number) => {
  dropdowns.value[index] = !dropdowns.value[index];
  const dropdownContent = document.querySelector(
    `.textBlock${index}`
  ) as HTMLDivElement;

  if (dropdownContent) {
    if (dropdowns.value[index]) {
      gsap.to(dropdownContent, {
        maxHeight: "100%",
        
        duration: 0.7,
        ease: "power2.out",
      });
    } else {
      gsap.to(dropdownContent, {
        maxHeight: "0px",
        
        duration: 0.7,
        ease: "power2.out",
      });
    }
  }
};
</script>
<template>
  <div class="md:mt-36 sm:mt-20" ref="content">
    <h3
      class="text-center sm:text-2xl md:text-5xl "
      ref="title"
      :class="{ 'hidden-text': !isVisible }"
    >
      <span class="text-[#7747ff]">Почему</span> мы?🤔
    </h3>
    <div class="wrapper w-full pb-36 sm:mt-20 md:mt-36">
      <div class="dropDownMenus flex justify-center flex-col items-center">
        
        <div class="sm:w-[320px] md:w-[600px] ">
          <div
            class="flex justify-between items-center gap-8 bg-[#e3e3e3] p-2 rounded-t-xl"
            @click="toggleDropdown(0)"
          >
            <h2 class="sm:text-[18px] sm:ml-2 md:text-[23xp] md:ml-5">Достоинства низкой стоимости 💸</h2>
            <img
              class="mr-2 w-8"
              src="/down.png"
              :class="{
                'rotate-[-180deg] transition-all duration-500': dropdowns[0],
                'rotate-0 transition-all duration-500': !dropdowns[0],
              }"
              alt=""
            />
          </div>

          <div
            class="textBlock0 flex justify-center bg-white"
            :class="{ closed: !dropdowns[0] }" style="max-height: 370px;" 
          >
            <p class="sm:text-[14px] md:text-[18px] font-[300] leading-[30px] p-[20px]">
              <span class="font-[700]"
                >Доступность для широкого круга клиентов:</span
              >
              Мы гордимся тем, что предлагаем широкий ассортимент товаров по выгодным ценам, чтобы каждая ваша покупка стала не только удовольствием, но и разумным решением для вашего бюджета. <br>
              <span class="font-[700]">Экономия денег для клиентов:</span>
              Мы ценим каждого нашего клиента и стремимся делать ваше
              покупательское опыт максимально удобным и приятным. Приходите к
              нам и убедитесь сами в наших выгодных предложениях и дружественном
              сервисе! Экономьте с нами, не жертвуя качеством! Приглашаем вас в
              магазин, где каждая покупка - это шаг к экономии и удовлетворению
              вашего вкуса и потребностей."
            </p>
          </div>
        </div>

        <div class="sm:w-[320px] md:w-[600px] ">
          <div
            class="flex justify-between items-center gap-8 bg-[#e3e3e3] p-2"
            @click="toggleDropdown(1)"
          >
            <h2 class="sm:text-[18px] sm:ml-2 md:text-[23xp] md:ml-5">Достоинства быстрой доставки 🏎️</h2>
            <img
              class="mr-2 w-8"
              src="/down.png"
              :class="{
                'rotate-[-180deg] transition-all duration-500': dropdowns[1],
                'rotate-0 transition-all duration-500': !dropdowns[1],
              }"
              alt=""
            />
          </div>

          <div
            class="textBlock1 flex justify-center bg-white"
            :class="{ closed: !dropdowns[1] }"
          >
            <p class="text-[18px] font-[300] leading-[30px] p-[20px]">
              <span class="font-[700]">Удовлетворение ожиданий клиентов:</span>
              Быстрая доставка отвечает потребностям клиентов в получении
              товаров в кратчайшие сроки. Это способствует повышению
              удовлетворенности клиентов и созданию положительного опыта
              покупок.
              <span class="font-[700]">Повышение лояльности клиентов:</span>
              Быстрая доставка может стать фактором, который заставит клиентов
              возвращаться к вашему магазину снова и снова. Клиенты ценят
              эффективное обслуживание и готовы остаться верными бренду, который
              предлагает быструю доставку. Конкурентное преимущество: В мире
              электронной торговли быстрая доставка является ключевым
              конкурентным преимуществом.
            </p>
          </div>
        </div>

        <div class="sm:w-[320px] md:w-[600px] ">
          <div
            class="flex justify-between items-center gap-8 bg-[#e3e3e3] p-2"
            @click="toggleDropdown(2)"
          >
            <h2 class="sm:text-[18px] sm:ml-2 md:text-[23xp] md:ml-5">
              Безопасность и надежность всех покупок 🔐
            </h2>
            <img
              class="mr-2 w-8"
              src="/down.png"
              :class="{
                'rotate-[-180deg] transition-all duration-500': dropdowns[2],
                'rotate-0 transition-all duration-500': !dropdowns[2],
              }"
              alt=""
            />
          </div>

          <div
            class="textBlock2 flex justify-center bg-white"
            :class="{ closed: !dropdowns[2] }"
          >
            <p class="text-[18px] font-[300] leading-[30px] p-[20px]">
              <span class="font-[700]">Безопасные Транзакции:</span> Мы
              используем надежные платежные системы, обеспечивая безопасность
              ваших финансов при совершении покупок в нашем магазине. Ваши
              данные защищены передовыми технологиями шифрования.
              Гарантированная Конфиденциальность: Мы уважаем вашу
              конфиденциальность.
              <span class="font-[700]">Возврат и Обмен без Забот:</span> Наша
              гибкая политика возврата и обмена обеспечивает вашу уверенность в
              том, что вы получите именно то, что ожидали.
              <span class="font-[700]">
                Сертифицированные Безопасные Товары:</span
              >
              Мы тщательно выбираем обувь у проверенных производителей,
              гарантируя, что каждая пара соответствует стандартам безопасности
              и качества. Ваши ноги в надежных руках.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.closed {
  overflow: hidden;
  max-height: 0px;
}
</style>
