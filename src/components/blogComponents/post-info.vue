<script setup lang="ts">
import { useBlog } from "@/stores/sneakerBlog";
import { onBeforeMount } from "vue";
import renderData from "../blogComponents/renderData.vue"
const blog = useBlog();
onBeforeMount(async () => {
  await blog.getPostById();
  console.log(
    blog.infoPost,
    blog.infoPost.attributes.postTemplate[0].id
  );
});
</script>
<template>
  <div class="p-10  overflow-scroll flex justify-between items-center">
		<div class="overflow-scroll max-w-[500px]">
    <div
      v-if="blog.infoPost.attributes"
      class="flex gap-1 drop-shadow-md shadow-black max-w-fit p-2"
    >
      <template
        v-for="(hashtag, index) in blog.infoPost.attributes.hashtags.data"
        :key="index"
      >
        <p
          v-if="hashtag.attributes.hashtagName"
          class="text-black text-sm font-medium bg-[#b6d1ffe3] p-[10px] rounded-lg cursor-pointer border-[1px] border-black"
        >
          {{ hashtag.attributes.hashtagName }}
        </p>
      </template>
    </div>
	</div>
    <div>
      <button class="learn-more w-52 h-auto">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Поиск постов</span>
      </button>
    </div>
  </div>
  <div class="flex gap-10 justify-center p-5">
    <div>
      <img
        :src="`http://localhost:1337${blog.infoPost.attributes.coverImage.data.attributes.url}`"
        alt=""
        v-if="blog.infoPost.attributes"
        class="max-w-[400px]"
      />
    </div>
    <div class="max-w-fit">
      <ul
        v-if="blog.infoPost.attributes"
        class="flex flex-col justify-between border-l-2 border-slate-400 pl-3 text-[#4DD4F5] font-extralight"
      >
        <li
          v-for="(item, index) in blog.infoPost.attributes.postTemplate"
          :key="index"
          class="cursor-pointer pb-[5px]"

        >
          <template v-if="item.__component === 'content.title-of-content'">
            <a :href="`#title-${item.id.toString()}`">
            {{ item.title }}
          </a>
          </template>
        </li>
      </ul>
    </div>
  </div>


<div v-if="blog.infoPost.attributes">
  <div v-for="(item, index) in blog.infoPost.attributes.postTemplate" :key="index">
    <renderData 
    :title="item.title"
    :title-id="`title-${item.id.toString()}`"
    :mark-down="item.content"
    />
    
  </div>
</div>


</template>
<style scoped>
button {
 position: relative;
 display: inline-block;
 cursor: pointer;
 outline: none;
 border: 0;
 vertical-align: middle;
 text-decoration: none;
 background: transparent;
 padding: 0;
 font-size: inherit;
 font-family: inherit;
}
button.learn-more .circle {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: relative;
 display: block;
 margin: 0;
 width: 3rem;
 height: 3rem;
 background: #3b82f680;
 border-radius: 1.625rem;
}

button.learn-more .circle .icon {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto;
 background: #fff;
}

button.learn-more .circle .icon.arrow {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 left: 0.625rem;
 width: 1.125rem;
 height: 0.125rem;
 background: none;
}

button.learn-more .circle .icon.arrow::before {
 position: absolute;
 content: "";
 top: -0.25rem;
 right: 0.0625rem;
 width: 0.625rem;
 height: 0.625rem;
 border-top: 0.125rem solid #fff;
 border-right: 0.125rem solid #fff;
 transform: rotate(45deg);
}

button.learn-more .button-text {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 padding: 0.75rem 0;
 margin: 0 0 0 1.85rem;
 color: #282936;
 font-weight: 700;
 line-height: 1.6;
 text-align: center;
 text-transform: uppercase;
}

button:hover .circle {
 width: 100%;
}

button:hover .circle .icon.arrow {
 background: #fff;
 transform: translate(1rem, 0);
}

button:hover .button-text {
 color: #fff;
}
</style>