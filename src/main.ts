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
		name: 'main',
		path: '/',
		component: () => import('./view/View_main.vue')
	},{
		name: 'Purchases',
		path: '/purchases',
		component: () => import('./view/View_favorites.vue')
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
	},
	{
		name: 'gender',
		path: `/gender`,
		component: () => import('./view/View_gender.vue')
	},
	{
		name: 'description',
		path: `/description`,
		component: () => import('./view/View_sneakerDs.vue')
	},
	{
		name: 'feedback',
		path: `/feedback`,
		component: () => import('./view/View_feedback.vue')
	},
	{
		name: 'order',
		path: `/order`,
		component: () => import('./view/View_order.vue')
	},
	
	{
		name: 'admin',
		path: `/admin`,
		component: () => import('./view/View_admin.vue')
	},
	{
		name: 'feedback_admin',
		path: `/feedback_admin`,
		component: () => import('./components/adminComponents/feedbackComponents/feedbackModerate.vue')
	},
	{
		name: 'post_page',
		path: `/post_page`,
		component: () => import('./view/View_post.vue')
	},
	{
		name: 'ideas_admin',
		path: '/ideas_admin',
		component: () => import('./components/adminComponents/postComponents/postIdeasModerate.vue'),
	},
	{
		name: 'all_posts',
		path: '/all_posts',
		component: () => import('./view/View_all_posts.vue'),
	}
]
})
const pinia = createPinia()
const app = createApp(App)
.use(autoAnimatePlugin)
.use(pinia)
.use(router)
.mount('#app')

