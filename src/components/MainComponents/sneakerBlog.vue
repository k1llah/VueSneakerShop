<script setup lang="ts">
import { ref, onMounted, watchEffect, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { marked } from 'marked'
import { useAllStore } from '@/stores/all';
import scrollComponent from "./scrollComponent.vue";
import coverTemplate from '../blogComponents/cover-template.vue';
import firstPostComponent from '../blogComponents/firstPostComponent.vue';
const content = ref();
const allStore = useAllStore()
const isVisible = ref(false);
const { title, span } = {
  title: ref(null),
  span: ref(null),
};
onMounted(() => {
  watchEffect(() => {
    if (isVisible.value) {
      animateText();
    }
  });
  allStore.getStrapiData()
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(()=>{
  window.removeEventListener("scroll", handleScroll);

})

const handleScroll = () => {
  const contentPosition = content.value.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.6;

  if (contentPosition < screenPosition) {
    isVisible.value = true;
    window.removeEventListener("scroll", handleScroll);
  }
};

const animateText = () => {
  gsap.from(title.value, {
    opacity: 0,
    x: 600,
    duration: 1.1,
    ease: "back.inOut",
  });

  gsap.from(span.value, {
    opacity: 0,
    x: -600,
    duration: 1.1,
    ease: "back.inOut",
  });
};

</script>

<template>
  <div class="md:mt-40 md:ml-32 sm:ml-20 sm:mt-20 flex items-center border-b-2 border-slate-300" ref="content">
    <h2
      class="md:text-[45px] sm:text-[30px] text-center font-[400] text-gradient text-gradient-to-r from-purple-600 via-cyan-400 to-red-500 lol"
      :class="{ 'hidden-text': !isVisible }"
      ref="title"
    >
      Sneaker
    </h2>
    <span
      class="md:text-[45px] sm:text-[30px] text-center font-[400] lol"
      :class="{ 'hidden-text': !isVisible }"
      ref="span"
      >Blog</span
    >
  </div>



	<div class="h-[650px] p-5 flex flex-wrap">
    <div v-if="allStore.posts && allStore.posts.length > 0">
    <firstPostComponent :titleCover="allStore.posts[1].titleToCover" :coverImage="allStore.posts[1].coverImage.data.attributes.url" :shortDescription="allStore.posts[1].shortDescriptionCover" :hashtags="allStore.posts[1].hashtags.data.map((hashtag:any) => hashtag.attributes.hashtagName)"/>
    <div v-for="(post, index) in allStore.posts.slice(2)" :key="index">
      <!-- <p>{{ post.imageToCover.data.attributes.url }}</p>
      <img v-if="post.imageToCover" :src="'http://localhost:1337' + post.imageToCover.data.attributes.url" class="w-full h-[100px] border-2" alt=""> -->
      
      <coverTemplate v-if="post.coverImage" :titleCover="post.titleToCover" :coverImage="post.coverImage.data.attributes.url" :shortDescription="post.shortDescriptionCover" :hashtags="post.hashtags.data.map((hashtag:any) => hashtag.attributes.hashtagName)"/>
    
      <div>
    <!-- Перебираем массив postTemplate и рендерим компоненты -->
    
  </div>
    </div>
  </div>
	</div>
 
</template>
<style>
.lol {
  background: #6c6c6c;
  background: linear-gradient(to left, #6c6c6c 10%, #000000 67%, #72736d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
