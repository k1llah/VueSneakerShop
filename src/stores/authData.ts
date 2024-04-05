import { defineStore } from "pinia";
import { ref } from "vue";
import axios from 'axios';
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
   id: '',
	 uuid: '',
	 role: '',
   isAuthenticated: false,
   currentUser: {id: '', uuid: ''},
  }),
  actions: {
    async getRole() {
      try {
        const data = await axios.post("http://localhost:3001/api/get-data", {
          uuid: localStorage.getItem("uuid"),
          id: localStorage.getItem("id"),
        });
        this.role = data.data.user.role
        console.log(this.role)
      }catch(error){
        console.log(error)
      }
    },
    checkAuth() {
      const idLocal = localStorage.getItem('id')
      const uuidLocal = localStorage.getItem('uuid')
      if(idLocal && uuidLocal){
        this.isAuthenticated = true
        this.currentUser = {id: idLocal, uuid: uuidLocal};
      }
      else {
        this.isAuthenticated = false
        this.currentUser = this.currentUser = { id: '', uuid: '' };
        localStorage.setItem('totalPrice', '0')
        
      }
    },
    logOut() {
      localStorage.removeItem('id')
      localStorage.removeItem('uuid')
      localStorage.setItem('cartCounter', '0')
      localStorage.setItem('totalPrice', '0')
      this.isAuthenticated = false
      this.currentUser = this.currentUser = { id: '', uuid: '' };
      this.role = ''
    }
    
  },
});
