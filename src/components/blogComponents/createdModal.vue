<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, watch,onMounted } from 'vue'
import { useBlog } from '@/stores/sneakerBlog';
const blog = useBlog()
const router = useRouter();
</script>
<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-50 opacity-90"></div>
  <div class="w-full flex justify-center">
  <div class="md:w-[400px] sm:w-[300px] top-[30%] h-auto flex flex-col fixed gap-1 z-50">
    <div class="p-5 rounded-lg bg-[#f0fdf3]">
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
          <p class="font-semibold">Предложение отправлено</p>
          <p>Мы приняли ваше предложение!</p>
            <p>
             Спасибо что проявили желание и интерес помочь нашему магазину, мы обязательно выложим его после модерации
            </p>
          
          <div class="flex gap-2">
            <button type="button" class="text-sm p-2 rounded-md hover:bg-green-200 transition-all duration-200" @click="blog.isOpenedModal = false, router.push('/'), blog.isOpenedModalFeedback = false, blog.unlock()">
              На главную
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>