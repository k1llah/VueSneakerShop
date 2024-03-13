<script setup script lang="ts">
import Bucket from './bucket.vue'
import CartItemList from './CartItemList.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'


// const cartItems = ref([] as any)
// onMounted(async ()=>{
// 	const {data} = await axios.get(`http://localhost:3001/api`);
// 	const cartIds = JSON.parse(localStorage.cart)
// 	cartItems.value = cartIds.map((id: number) => data.find((item: any) => item.id == id))
// 	console.log(cartItems.value)
// })
</script>

<template>
  <div>
    <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70">
			
		</div>
  
    <div class="bg-white md:w-96 md:h-full sm:w-72 sm:h-full fixed right-0 top-0 z-20 p-10">
      <Bucket/>
      <CartItemList/>
      <div>
        
				<div class="flex flex-col gap-4 mt-7">
					<div class="flex gap-2">
					<span>
						Итого:
					</span>
					<div class="flex-1 border-b border-dashed"> </div>
					<p>12900 RUB</p>
				</div>

				<div class="flex gap-2">
					<span>
						Налог
					</span>
					<div class="flex-1 border-b border-dashed"> </div>
					<p>900 RUB</p>
				</div>
				</div>


				<button disabled class="bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-700 transition disabled:bg-slate-400 cursor-pointer mt-4">Оформить Заказ</button>
			</div>
      </div>
  </div>
</template>

