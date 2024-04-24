<script setup lang="ts">
import { ref, computed } from "vue";
import  { marked }  from 'marked';
// Define props
const props = defineProps({
  title: String,
  markDown: String,
  titleId: String,

})
const html = computed(() => {
  if (props.markDown !== undefined) {
    return marked(props.markDown);
  }
  return "";
});
</script>
<template>
 <div  class="p-5 pb-16">
  <h1 class="text-2xl" :id="props.titleId">{{ props.title }}</h1>
  <div v-if="props.markDown !== undefined" v-html="html">
  
  </div>
 </div>
</template>

