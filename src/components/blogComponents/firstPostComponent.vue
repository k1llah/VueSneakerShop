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
	<div class="flex flex-col justify-between p-4 cursor-pointer md:min-w-[550px] sm: min-w-[320px] md:max-w-[350px] sm:max-w-[310px] bg-cover min-h-[350px]"
	:style="{ 'background-image': `url('http://localhost:1337${props.coverImage}')` }"
	>
		<div class="flex max-w-fit gap-3 flex-row bg-[#10b981] p-2 rounded-lg">
      <p v-for="(hashtag, index) in hashtags" :key="index" class="text-black text-sm font-medium">{{ hashtag }}</p>
    </div>
		<div class="text-white">
		<h1 class="text-3xl font-bold ">{{ props.titleCover }}</h1>
		<p class="text-lg font-light">{{ props.shortDescription }}</p>
	</div>
	</div>
</template>