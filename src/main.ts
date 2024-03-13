import './assets/main.css'
import { createApp } from 'vue';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createPinia } from 'pinia'
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { useGenderStore } from '@/stores/separate';

const router = createRouter({
	history: createWebHistory(),
	routes: [{
		name: 'Main',
		path: '/VueSneakerShop/',
		component: () => import('./view/View_main.vue')
	},{
		name: 'Purchases',
		path: '/VueSneakerShop/purchases',
		component: () => import('./view/View_favorites.vue')
	}
	,{
		name: 'Profile',
		path: '/VueSneakerShop/profile',
		component: () => import('./view/profile_user.vue')
	}
	,{
		name: 'Sign_up',
		path: '/VueSneakerShop/sign_up',
		component: () => import('./view/View_signUp.vue')
	},
	{
		name: 'Sneakers_page',
		path: '/VueSneakerShop/sneakers_page',
		component: () => import('./view/CardListView.vue')
	},
	{
		name: 'Gender',
		path: `/VueSneakerShop/gender`,
		component: () => import('./view/View_gender.vue')
	},
	{
		name: 'Description',
		path: `/VueSneakerShop/description`,
		component: () => import('./view/View_sneakerDs.vue')
	},
	{
		name: 'Feedback',
		path: `/VueSneakerShop/feedback`,
		component: () => import('./view/View_feedback.vue')
	},
]
})
const pinia = createPinia()
const app = createApp(App)
.use(autoAnimatePlugin)
.use(pinia)
.use(router)
.mount('#app')

