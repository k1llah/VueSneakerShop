import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
// import { useAuthStore } from "@/stores/authData";
// const authStore = useAuthStore();
export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: [] as any,
  }),
  actions: {
    async onCartAdd(sneakerId: number, item: any){
        try {
          const postAddData = await axios.post(
            "http://localhost:3001/api/add-to-cart",
            {
              userId: localStorage.getItem("id"),
              sneakerId: sneakerId,
            }
          );
          item.isAdded = true;
        } catch (error) {
          console.log(error);
        }
      },
		
			// else if(item.isAdded == true && authStore.isAuthenticated == true){
			// 	try{
			// 		const removeData = await axios.post(
			// 			"http://localhost:3001/api/remove-from-cart",
			// 			{
			// 				userId: localStorage.getItem("id"),
			// 				sneakerId: sneakerId,
			// 			}
			// 		)
			// 	} catch(error){
			// 		console.log(error)
			// 	}
			// }
    },
  
});
