<script setup lang="ts">
import { defineProps, ref } from "vue";
import stars from './stars.vue';
const props = defineProps({
  id: Number,
  author: String,
  image: String,
  text: String,
  rate: Number || String,
});
const rate = ref(props.rate)
</script>
<template>
    <div
      class="w-80 p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col justify-center gap-5 bg-[#eff6ff]"
    >
      <h2 class="text-xl font-semibold">{{ props.author }} Author</h2>
      <img
        class="w-full h-40 object-cover rounded-t-lg"
        alt="Card Image"
        src="/sneakers/conv.jpeg"
      
      />
      <div class="p-4">
        <p class="text-gray-600">
          {{ props.text }}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          ante sit amet tellus ornare tincidunt.
        </p>
        
       <stars/>
      </div>
    </div>

  
</template>

<style scoped>

</style>
