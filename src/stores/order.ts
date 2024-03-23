import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "axios"
interface Item {
	id: number,
	title: string,
	imageUrl: string,
	price: number,
}
export const useOrderStore = defineStore({
  id: "order",

  state: () => ({
    items: <Item[]>[],
		idParam: localStorage.getItem("sneakerId"),
  }),
  actions: {
		
	
		
  },
});
