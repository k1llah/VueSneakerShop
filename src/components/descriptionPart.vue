<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useAllStore } from '@/stores/all';
const allStore = useAllStore();
const paramsId = localStorage.getItem('sneakerId')
let itemData = ref()
const getDateShoe = async function (params: number) {
	try{
		const dataShoe = await axios.get(`http://localhost:3001/api/sneaker`,{
			params: {
				id: paramsId
			}
		})
		itemData.value = dataShoe.data
		console.log(itemData.value)
	}
	catch(error){
		console.log(error)
	}
}
onMounted(() => {
	if (paramsId) {
        getDateShoe(parseInt(paramsId));
    }
})
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
          <h2 class="text-3xl">Описание</h2>
        </div>
      </div>


			<div>
				<div>
					<img src="" alt="">
				</div>

				<div>

				</div>
			</div>


			<div>

			</div>
</template>
