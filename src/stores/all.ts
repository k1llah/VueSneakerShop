import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAllStore = defineStore({
	id: 'all',
  state: () => ({
    idShoe: ref<Number>(),
    brandImages: ref({
      Vans: "https://example.com/vans.jpg",
      TheNorthFace: "https://example.com/northface.jpg",
      Nike: "https://example.com/nike.jpg",
      Puma: "https://example.com/puma.jpg",
      Converse: "https://example.com/converse.jpg",
      Reebok: "https://example.com/reebok.jpg",
      Adidas: "https://example.com/adidas.jpg",
      Jordan: "https://example.com/jordan.jpg",
      HellyHansen: "https://example.com/hellyhansen.jpg",
      Timberland: "https://example.com/timberland.jpg",
      Columbia: "https://example.com/columbia.jpg",
      NewBalance: "https://example.com/newbalance.jpg",
      DrMartens: "https://example.com/drmartens.jpg",
      Asics: "https://example.com/asics.jpg",
    })
  }),
  actions: {

  },
});
