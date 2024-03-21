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
export const useFavoritesStore = defineStore({
  id: "favorites",
  state: () => ({
    items: [],
		isFav: true
  }),
  actions: {
		async favorites(){
			try {
				const { data } = await axios.post(
					"http://localhost:3001/api/favorites-user",
					{
						id: localStorage.getItem("id"),
					}
				);
		
				this.isFav = true;
				this.items = data[0].Favorite;
				this.items.forEach((el:any) => {
					el.isFavorite = true
				})
				
				if(this.items.length == 0){
					this.isFav = false
				}
			} catch (error) {
				console.log(error);
			}
		}
		

  },
});
