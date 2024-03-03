import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAllStore = defineStore({
	id: 'all',
  state: () => ({
    idShoe: ref<Number>()
  }),
  actions: {

  },
});
