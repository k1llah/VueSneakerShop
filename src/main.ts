import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [{
		name: 'main',
		path: '/',
		component: () => import('./view/View_main.vue')
	},{
		name: 'Purchases',
		path: '/purchases',
		component: () => import('./view/myPurchases.vue')
	}
	,{
		name: 'Profile',
		path: '/profile',
		component: () => import('./view/profile_user.vue')
	}
	,{
		name: 'Sign_up',
		path: '/sign_up',
		component: () => import('./view/View_signUp.vue')
	},
	{
		name: 'Sneakers_page',
		path: '/sneakers_page',
		component: () => import('./view/CardListView.vue')
	}
]
})
createApp(App)
.use(router)
.mount('#app')

