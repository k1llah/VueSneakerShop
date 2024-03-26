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
    idParam: parseInt(localStorage.getItem("sneakerId") || "0", 10),
    amount: 0,
    methodPayment: "",
    isSelected: false,
    addressId: 2,
    firstName: '',
    lastName: '',
    surname: '',
    city: '',
    street: '',
    house: '',
    apartment: '',
    buildingNumber: '',
    postalCode: 0,
    phone: '',
    comment: '',
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
          }
        } else if (this.methodPayment === "payWhenReceiving") {
          if (this.isSelected) {
            const pay = await axios.post(
              "http://localhost:3001/api/create-new-order",
              {
                userId: localStorage.getItem("id"),
                sneakerDataId: this.idParam,
                amount: this.amount,
                addressId: this.addressId,
                PayStatus: "whenReceived",
              }
            );
            if (pay.status === 200) {
              console.log(pay);
              location.replace("/");
            } else {
              console.log("Ошибка при выполнении запроса");
            }
            console.log(pay);
          } else if (this.isSelected == false) {
            const newAddress = await axios.post(
              "http://localhost:3001/api/create-address",
              {
                userId: localStorage.getItem("id"),
                firstName: this.firstName,
                lastName: this.lastName,
                surname: this.surname,
                city: this.city,
                street: this.street,
                phoneNumber: this.phone,
                postalCode: this.postalCode,
                buildingNumber: this.buildingNumber,
                houseNumber: this.house,
                apartment: this.apartment,
              }
            );
            this.addressId = newAddress.data.id;

            const pay = await axios.post(
              "http://localhost:3001/api/create-new-order",
              {
                userId: localStorage.getItem("id"),
                sneakerDataId: this.idParam,
                amount: this.amount,
                addressId: this.addressId,
                PayStatus: "whenReceived",
                orderMessage: this.comment,
              }
            );
            if (pay.status === 200) {
              console.log(pay);
             console.log('daaaa')
            } else {
              console.log("Ошибка при выполнении запроса");
            }
            console.log(pay, "ezzzz");
          }
        } else if (this.methodPayment === "") {
          alert("Выберите способ оплаты");
        } else if (isFormCorrect === false) {
          console.log("isFormCorrect = false");
        } else {
          console.log("idk");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
