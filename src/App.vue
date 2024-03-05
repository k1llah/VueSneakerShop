<script setup script lang="ts">
import Header from "./components/header.vue";
import Drawer from '@/components/DrawerComponents/Drawer.vue';
import Footer from '@/components/footer.vue';
import { onMounted, computed } from "vue";
import { checkAuth } from "./auth";
import {useSneaker} from '@/stores/sneaker'
import { RouterView } from 'vue-router'
const sneakerStore = useSneaker()
onMounted(() => {
  checkAuth();
});

const page = computed(()=> window.location.pathname)
</script>
<template>
  <div class="w-4/5 m-auto bg-white rounded-xl shadow-xl mt-14">
    <Header />
    <section>
      <div class="container min-h-[800px] m-auto">
        <RouterView />
      </div>
    </section>
    <Footer v-if="page!='/profile' && page!='/description'"/>
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