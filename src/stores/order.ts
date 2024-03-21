import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "axios"
interface CartItem {
  id: number
  title: string
  imageUrl: string
  price: number
  count: number
  isAdded: boolean
  onDelete: Function
}
export const useOrderStore = defineStore({
  id: "order",
  state: () => ({
    items: [],
  }),
  actions: {
		
		

  },
});
