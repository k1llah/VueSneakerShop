import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useGenderStore = defineStore({
  id: 'gender',
  state: () => ({
    onClickOnGender: ref(''),
    sneakersData: ref({}),
  }),
  actions: {
    async genderRoute() {
      try {
        const params = this.onClickOnGender
        if (params === 'man' || params === 'woman') {
          const response = await axios.get(`http://localhost:3001/api/${params}Sneakers`);
          this.sneakersData = response.data;
        } 
      } catch (error) {
        console.error('Error fetching sneakers data:', error);
        // Handle error if needed
      }
    },
  },
});
