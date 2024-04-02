import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useMyOrderStore = defineStore({
  id: "myOrders",
  state: () => ({
	orders: [] as any[],
	itemData: [] as any[],
  }),
  actions: {
		async getDataOrder() {
			try{
				const resOrders = await axios.post('http://localhost:3001/api/get-orders', {
					id: localStorage.getItem('id'),
				})
			this.orders = resOrders.data	
				for( const order of this.orders){
					const resItems = await axios.post('http://localhost:3001/api/sneakers-to-order', {
						id: order.sneakerDataId
					})
					order.items = resItems.data
				}
			console.log(this.orders)
			} catch(error){
				console.log(error)
			}
		},
  }
});
