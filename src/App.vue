<script setup script lang="ts">
import Header from "./components/header.vue";
import Drawer from '@/components/Drawer.vue';
import { onMounted } from "vue";
import { checkAuth, isAuthenticated, currentUser } from "./auth";
import {useSneaker} from '@/stores/sneaker'
const sneakerStore = useSneaker()
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
  <transition name="fade">
    <Drawer v-if="sneakerStore.show"/>
  </transition>
</template>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>