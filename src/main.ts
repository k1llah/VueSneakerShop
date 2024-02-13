import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [{
		name: 'Main',
		path: '/',
		component: () => import('./components/CardListView.vue')
	},{
		name: 'Purchases',
		path: '/purchases',
		component: () => import('./components/myPurchases.vue')
	}
]
})
createApp(App)
.use(router)
.mount('#app')

