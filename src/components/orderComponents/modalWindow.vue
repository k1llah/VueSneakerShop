<script setup lang="ts">
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import { useOrderStore } from '@/stores/order';
import { useAllStore } from '@/stores/all';
import { useCartStore } from '@/stores/addToCart';
import { ref } from 'vue'
const cartStore = useCartStore()
const allStore = useAllStore()
const orderStore = useOrderStore()
const router = useRouter()
let toggle = ref(false)
let target = ref("")
const handleOpenPage = (page: string) => {
  target.value = page;
  setTimeout(() => {
    toggle.value = true;
    allStore.isOpened = toggle.value
  },200)
  localStorage.setItem('page', page)
};
function clearDataAfterOrdered () {
  cartStore.localCounter = 0
  localStorage.setItem('counter', cartStore.localCounter.toString())
  localStorage.setItem('totalPrice', '0')
  cartStore.totalPrice = 0
  cartStore.items = []
  cartStore.axiosGetParamsStore()
  cartStore.cartDataGet()
}
onBeforeRouteLeave ((to, from, next) => {
  if (to.path === '/profile' || to.path === '/sneakers_page') {
    orderStore.success = false;
    orderStore.isSelected = false;
    orderStore.isFormCorrect = false;
    clearDataAfterOrdered();
    allStore.unlock();
    next();
  } else {
    orderStore.success = false;
    orderStore.isSelected = false;
    orderStore.isFormCorrect = false;
    clearDataAfterOrdered();
    allStore.unlock();
    router.push('/');
    next();
  }

})
</script>
<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>

  <div class="md:w-[400px] sm:w[310px] h-auto flex flex-col absolute gap-1 z-20" id="success">
    <div class="p-5 rounded-lg bg-[#f0fdf3] dark:bg-[#115e59] dark:text-slate-200">
      <div class="flex gap-2">
        <div class="flex-shrink-0">
          <svg
            class="w-5 h-5 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="flex flex-col gap-5">
          <p class="font-semibold">Заказ оформлен</p>
          <p>Номер вашего заказа: {{ orderStore.orderNumber }}</p>
            <p>
             Спасибо что выбрали нас, мы сделаем все возможное чтобы ваш заказ приехал к вам побыстрее, надеемся вы рады что ваш заказ оформлен
						 Возвращайтесь!!!
            </p>
          
          <div class="flex gap-2">
            <button type="button" class="text-sm p-2 rounded-md hover:bg-green-200 transition-all duration-200 dark:hover:bg-[#14532d]" @click="router.push('/profile'), orderStore.success = false, orderStore.isSelected = false, orderStore.isFormCorrect = false, handleOpenPage('orders'), clearDataAfterOrdered() , allStore.unlock()">
              К заказу
            </button>
            <button type="button" class="text-sm p-2 rounded-md hover:bg-green-200 transition-all duration-200 dark:hover:bg-[#14532d]"@click="router.push('/sneakers_page'), orderStore.success = false, orderStore.isSelected = false, orderStore.isFormCorrect = false, clearDataAfterOrdered(), allStore.unlock()">
              Продолжить покупки
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
