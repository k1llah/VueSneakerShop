import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
export const useAllStore = defineStore({
  id: "all",
  state: () => ({
    idShoe: ref<Number>(),
    brandImages: {
      Vans: "https://static.street-beat.ru/upload/iblock/d0c/d0cce4e2fba49304d25a39de2a9ef5d6.svg",
      TheNorthFace:
        "https://static.street-beat.ru/upload/iblock/4f7/4f773befa3ff5485a4e6c2d98c9ef00d.svg",
      Nike: "https://static.street-beat.ru/upload/iblock/be7/be79be54f63add76b08e75dc6eedbfa7.svg",
      Puma: "https://static.street-beat.ru/upload/iblock/3b4/3b4fe7d256fd066693ce400192ab81cc.svg",
      Converse:
        "https://static.street-beat.ru/upload/iblock/ea2/ea28052b0d88d010a96b1bc1bc27f3e0.svg",
      Reebok:
        "https://static.street-beat.ru/upload/iblock/8b0/8b0db0a7d3c2bffa7e7df0c8843aa7f0.svg",
      Adidas:
        "https://static.street-beat.ru/upload/iblock/d24/d24e44f9f5ce894b5cfb1289271318c9.svg",
      Jordan:
        "https://static.street-beat.ru/upload/iblock/0d9/0d9a80d8726234ca418ef6cde0c523d1.svg",
      HellyHansen:
        "https://static.street-beat.ru/upload/iblock/809/809d5927ce5cca568d98a0b053bf4f79.svg",
      Timberland:
        "https://static.street-beat.ru/upload/iblock/3f7/3f7fe697e8a65cdae39c543150e251d8.svg",
      Columbia:
        "https://static.street-beat.ru/upload/iblock/189/189b04d3c24a105f24003e9f13ee53db.svg",
      NewBalance:
        "https://static.street-beat.ru/upload/iblock/a3c/a3cfae237440a133b540ad67792b67eb.svg",
      DrMartens:
        "https://static.street-beat.ru/upload/iblock/b23/b233da50b4b147d98a6dec186f18dda0.svg",
      Asics:
        "https://static.street-beat.ru/upload/iblock/a47/a473eb406a0b7e775e27cfbf0ea84865.svg",
    } as any,
    isOpened: ref(false),
    targetPage: "",
    headerText: "Мои адреса для доставки",
    idAddress: 0 as number,
    isOpenedFeedBack: false,
    addressData: [] as any[],
    posts: [] as any[],
    token:
      "93502989fdf7ab37488054e2c4268174eb7eaec4d3c8ccf5ee33b867f27031a1ecd97cae45c4d5ce07231bd6abc20bbb17dd5ede5fcbe4a729d6ab5db61a28d73efa94f1b2d40a43187492d25d3f4aa42647c19383ce3a7d14e7f6223a1f8fcc354c280fd4ad79a68c2c64ef57dc77e3fe6fc2d892def029e18723c8c8aad857",
  }),
  actions: {
    async getStrapiData() {
      try{

      
      const res = await axios.get("http://localhost:1337/api/posts", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        this.posts = res.data.data.map((post: any) => post.attributes)
        console.log(res.data.data[0].attributes)
      } catch(error){
        console.log(error)
      } 
    },
    getBrandImageUrl(brandName: string): string {
      // Проверяем, есть ли ключ с указанным названием бренда
      if (this.brandImages.hasOwnProperty(brandName)) {
        return this.brandImages[brandName];
      } else {
        return "";
      }
    },
  },
});
