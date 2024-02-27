<script setup script lang="ts">
import Header from "./components/header.vue";
import Drawer from '@/components/Drawer.vue';
import Footer from '@/components/footer.vue';
import { onMounted } from "vue";
import { checkAuth } from "./auth";
import {useSneaker} from '@/stores/sneaker'
import { RouterView } from 'vue-router'
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
      <Footer/>
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