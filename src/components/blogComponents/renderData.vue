<script setup lang="ts">
import { ref, computed } from "vue";
import  { marked }  from 'marked';
// Define props
const props = defineProps({
  title: String,
  markDown: String,
  divScrollId: String,

})
const html = computed(() => {
  if (props.markDown !== undefined) {
    return marked(props.markDown);
  }
  return "";
});
</script>
<template>
 <div  class="p-5 pt-0" :id="props.divScrollId">
  <h1 class="text-4xl mt-10 font-extralight" >{{ props.title }}</h1>
  <div v-if="props.markDown !== undefined" v-html="html">
  
  </div>
 </div>
</template>

