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
      "0f97b2ecb3d66470a5385e3aa6f555d4a65e7f5adbbb4a1cc8477c102ca49f73808267246dd1fe0f20ff307e30b23665db6a14477edbf9d1ab18e920936b0de98f02d50028149ead6b3cab6258d27956ada082a98229ab6617f20265b8ea7a8691e094b71c2d3a8906289546718ec45e3efe982dc0110ef4c5ae1a306affb1d6",
  }),
  actions: {
    async getStrapiData() {
      try{

      
      const res = await axios.get("http://localhost:1337/api/posts?populate=*", {
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
