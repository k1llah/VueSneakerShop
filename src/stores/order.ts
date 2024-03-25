import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
interface Item {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
}
export const useOrderStore = defineStore({
  id: "order",

  state: () => ({
    items: <Item[]>[],
    idParam: localStorage.getItem("sneakerId"),
    amount: 0,
    methodPayment: "",
    isSelected: false,
    addressId: 2,
  }),
  actions: {
    async placeAnOrder(isFormCorrect: boolean, ...args: any) {
      try {
        if (this.isSelected == true) {
          if (this.methodPayment === "online") {
            const pay = await axios.post(
              "http://localhost:3001/api/sberbank/pay",
              {
                userName: "",
                password: "",
                orderNumber: "",
                amount: 125.0,
              }
            );
            if (pay.status === 200) {
              console.log(pay);
             location.replace('/')
            } else {
              console.log('Ошибка при выполнении запроса');
            }
            console.log(pay);
          } else if (this.methodPayment === "payWhenReceiving") {
            if (this.isSelected) {
              const pay = await axios.post(
                "http://localhost:3001/api/create-new-order",
                {
                  userId: localStorage.getItem("id"),
                  sneakerDataId: this.idParam,
                  amount: this.amount,
                  addressId: this.addressId,
                  PayStatus: "whenReceived"
                }
              )
              if (pay.status === 200) {
                console.log(pay);
               location.replace('/')
              } else {
                console.log('Ошибка при выполнении запроса');
              }
              console.log(pay)
            } else if(this.isSelected == false && isFormCorrect == true){
              const newAddress = await axios.post(
                "http://localhost:3001/api/create-address",
                {
                  userId: localStorage.getItem("id"),
                  firstName: args.name,
                  lastName: args.lastName,
                  surname: args.surname,
                  city: args.city,
                  street: args.street,
                  phoneNumber: args.phoneNumber,
                  postalCode: args.postalCode,
                  buildingNumber: args.buildingNumber,
                  houseNumber: args.houseNumber,
                  apartment: args.args.apartment,
                },
                )
              this.addressId = newAddress.data.id
              
             const pay = await axios.post(
              "http://localhost:3001/api/create-new-order",
              {
                userId: localStorage.getItem("id"),
                sneakerId: this.idParam,
                amount: this.amount,
                addressId: this.addressId,
                payStatus: "payWhenReceiving"
              }
             )
             console.log(pay, 'ezzzz')
            }
          }
        } else if (this.methodPayment === '') {
          alert("Выберите способ оплаты");
        }
        else if(isFormCorrect === false){
          console.log('isFormCorrect = false')
        }
        else{
          console.log('idk')
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
