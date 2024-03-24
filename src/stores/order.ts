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
    amount: 0,
    methodPayment: "",
    isSelected: false,
    addressId: 0,
  }),
  actions: {
    async placeAnOrder() {
      try{
      if(this.isSelected == true){
        if(this.methodPayment === 'online'){
          const pay = await axios.post('http://localhost:3001/api/sberbank/pay',{
            userName: '',
            password: '',
            orderNumber: '',
            amount: 125.00
          })
          location.replace('https://3dsec.sberbank.ru/payment/rest/register.do')
          console.log(pay)
        }
        else if(this.methodPayment === 'payWhenReceiving'){
          const pay = await axios.post('http://localhost:3001/api/create-new-order',{
            userId: localStorage.getItem('id'),
            sneakerId: this.idParam,
            amount: this.amount,
            addressId: this.addressId
          })
          console.log(pay)
        }
      }
      else if(this.isSelected == false){
        alert('Выберите способ оплаты')
      }
    }catch(error){
      console.log(error)
    }
    }
	
		
  },
});
