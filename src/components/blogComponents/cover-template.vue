<script setup lang="ts">
const props = defineProps({
	titleCover: String,
	coverImage: String,
	shortDescription: String,
	hashtags: {
    type: Array,
    required: true
  }
})

</script>
<template>
	<div class="flex flex-col gap-4 cursor-pointer min-w-[260px] md:max-w-[320px] sm:max-w-[310px]">
		<img v-if="props.coverImage" :src="'http://localhost:1337' + $props.coverImage" class="w-full h-[100px] border-2 min-h-[160px] object-cover" alt=""> 
		<div class="flex gap-3 flex-row">
      <p v-for="(hashtag, index) in hashtags" :key="index" class="text-[#20bbed] text-xs">{{ hashtag }}</p>
    </div>
		<h1 class="text-2xl font-bold">{{ props.titleCover }}</h1>
		<p class="text-sm font-light">{{ props.shortDescription }}</p>
	</div>
</template>