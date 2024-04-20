<script setup lang="ts">
import { useBlog } from "@/stores/sneakerBlog";
import { onBeforeMount } from 'vue'
const blog = useBlog();
onBeforeMount(async () => {
	await blog.getPostById();
	console.log(blog.infoPost)
})
</script>
<template>
  <div>
    <div>
      <img src="" alt="" />
    </div>
    <div >
      <ul v-for="(item, index) in  blog.infoPost.attributes" :key="index">
        <li v-for="(data, index) in item" :key="index">
					{{data}}
        </li>
      </ul>
    </div>
  </div>
</template>
