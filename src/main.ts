import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [{
		name: 'Main',
		path: '/Main',
		component: App.vue
	},{
		name: '',
		path: '/Purchases',
		component: () => import('./components/myPurchases.vue')
	}
]
})
createApp(App).mount('#app')
