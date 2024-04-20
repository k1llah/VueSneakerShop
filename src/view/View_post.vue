<script setup lang="ts">
import { onMounted } from 'vue';
import postInfo from '@/components/blogComponents/post-info.vue';
import { useBlog } from '@/stores/sneakerBlog';
const blog = useBlog();
onMounted(async () => {
	await blog.getPostById()
})
</script>
<template>
<div>
	<postInfo/>
</div>
</template>