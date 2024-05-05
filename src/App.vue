<script setup script lang="ts">
import Header from "./components/header.vue";
import Drawer from "@/components/DrawerComponents/Drawer.vue";
import Footer from "@/components/footer.vue";
import backToTop from './components/backToTop.vue';
import { onMounted, computed, watch, onBeforeMount, ref } from "vue";
import { useSneaker } from "@/stores/sneaker";
import { RouterView, useRouter } from "vue-router";
import { useAuthStore } from "./stores/authData";
const route = useRouter();
const authStore = useAuthStore();
const sneakerStore = useSneaker();
onMounted(() => {
  authStore.getRole();
  authStore.checkAuth();
  console.log(authStore.id);
});
const page = ref(window.location.pathname);
watch(() => route.currentRoute.value.path, (newPath) => {
  page.value = newPath;
});
</script>
<template>
  <div class="md:w-4/5 sm:w-full m-auto bg-white rounded-xl shadow-xl mt-14">
    <Header />
    <section>
      <div class="w-full min-h-[800px] m-auto">
        <RouterView />
        <backToTop v-if="page != '/profile'"/>
      </div>
    </section>
    <Footer v-if="page != '/profile' && page != '/description'" />
  </div>

  <transition name="fade">
    <Drawer v-if="sneakerStore.show" />
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
