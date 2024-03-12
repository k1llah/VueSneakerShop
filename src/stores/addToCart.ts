// import { defineStore } from 'pinia';
// import { ref } from 'vue';
// import axios from 'axios';
// export const useAllStore = defineStore({
// 	id: 'all',
//   state: () => ({
//     idShoe: ref<Number>(),
		
//   }),
//   actions: {
//     onFavoriteAdd: async (sneakerId: number, item:any) => {
// 			try {
// 				const postAddData = await axios.post(
// 					"http://localhost:3001/api/add-to-cart",
// 					{
// 						userId: localStorage.getItem("id"),
// 						sneakerId: sneakerId,
// 					}
// 				);
// 					item.isAdded = true
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		}
//   },
// });
