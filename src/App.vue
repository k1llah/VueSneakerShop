<script setup script lang="ts">
import Header from './components/header.vue'
</script>
<template>
  <div class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14">
    <Header />
    <RouterView />
    
  </div>
  <!-- <Drawer/> -->
</template>
