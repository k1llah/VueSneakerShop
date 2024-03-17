import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
interface CartItem {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  count: number;
  isAdded: boolean;
  onDelete: Function;
}
export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: [] as CartItem[],
		itemAdded: false,
		isAdded: false,
		cartCounter: parseInt(localStorage.getItem('cartCounter') || '0', 10),
		localCounter: localStorage.getItem('cartCounter')
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
					this.cartCounter += 1;
          localStorage.setItem('cartCounter', this.cartCounter.toString());
          item.isAdded = true;
					
        } catch (error) {
          console.log(error);
        }
      },
			async onDeleteItem(id: number, item: any) {
				// Проверяем, добавлен ли товар в корзину
				if (item.isAdded) {
						try {
								const removeData = await axios.post(
										"http://localhost:3001/api/remove-from-cart",
										{
												userId: localStorage.getItem("id"),
												sneakerId: id,
										}
								);
								// Уменьшаем счетчик корзины только если товар был добавлен
								this.cartCounter -= 1;
								localStorage.setItem('cartCounter', this.cartCounter.toString());
								// Устанавливаем isAdded в false, чтобы изображение снова стало "Plus svg"
								item.isAdded = false;
						} catch (error) {
								console.log(error);
						}
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
