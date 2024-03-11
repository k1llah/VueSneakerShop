import { defineStore } from "pinia";
import { ref } from "vue";
import axios from 'axios';
export const useAuthStore = defineStore({
  id: "all",
  state: () => ({
   id: '',
	 uuid: '',
	 role: '',
    
  }),
  actions: {
 
    
  },
});
