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
export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: [] as CartItem[],
    isAdded: false,
    cartCounter: 0,
    localCounter: parseInt(localStorage.getItem("cartCounter") || "0", 10),
    counter: 1,
    totalPrice: 0,
    localPrice: parseInt(localStorage.getItem("totalPrice") || "0", 10),
  }),
  actions: {
    counterPlus() {
      this.counter += 1
    },
    counterRemove() {
      if (this.counter > 1) {
        this.counter -= 1
      }
    },

    async onCartAdd(sneakerId: number, item: any, price: any) {
      try {
        const postAddData = await axios.post(
          "http://localhost:3001/api/add-to-cart",
          {
            userId: localStorage.getItem("id"),
            sneakerId: sneakerId,
          }
        );
        this.items = postAddData.data.items

        this.totalPrice += price
        localStorage.setItem("totalPrice", this.totalPrice.toString())
        this.cartCounter = this.items.length
        console.log(this.items.length, this.items)
        localStorage.setItem("cartCounter", this.cartCounter.toString())
				console.log(item.isAdded)
				item.isAdded = true
      } catch (error) {
        console.log(error)
      }
    },
    async onDeleteItem(id: number, item: any, price: any) {
      if (item.isAdded) {
        try {
          const removeData = await axios.post(
            "http://localhost:3001/api/remove-from-cart",
            {
              userId: localStorage.getItem("id"),
              sneakerId: id,
            }
          );
          if (this.cartCounter > 0) {
            this.cartCounter -= 1
            localStorage.setItem("cartCounter", this.cartCounter.toString())
          }

          if (this.totalPrice > 0) {
            this.totalPrice -= price
            localStorage.setItem("totalPrice", this.totalPrice.toString())
          }
					item.isAdded = false
					
					console.log(item.isAdded)
        } catch (error) {
          console.log(error)
        }
      }
    },

    async cartDataGet() {
      try {
        const dataCart = await axios.post(
          "http://localhost:3001/api/get-cart-items",
          {
            userId: localStorage.getItem("id"),
          }
        );
        this.items = dataCart.data.items;
        if(this.items !== undefined){
        this.isAdded = this.items.length > 0
      }
      
      if (this.isAdded) {
        this.items.forEach((el: any) => {
          el.isAdded = true;
        });
      }
      this.totalPrice = parseInt(localStorage.getItem("totalPrice") || "0", 10)
      this.cartCounter = this.items.length
      
        localStorage.setItem("cartCounter", this.cartCounter.toString())
      } catch (error) {
        console.log(error)
      }
    },
		// checkIfItemInCart(itemId: number) {
		// 	// проверяем, есть ли этот товар в корзине
		// 	const itemInCart = this.items.find((item: any) => item.id === itemId);
		// 	if (itemInCart?.isAdded) {
		// 		return true
		// 	} else if(itemInCart?.isAdded == false) {
		// 		return false
		// 	}
		// },
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
