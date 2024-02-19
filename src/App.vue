<script setup script lang="ts">
import Header from "./components/header.vue";
import { onMounted } from "vue";
import { checkAuth, isAuthenticated, currentUser } from "./auth";
onMounted(() => {
  checkAuth();
});
</script>
<template>
  <div class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14">
    <Header />
    <section>
      <div class="container">
        <RouterView />
      </div>
    </section>
  </div>
  <!-- <Drawer/> -->
</template>