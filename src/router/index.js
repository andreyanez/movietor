import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../pages/MainLayout.vue';
import MovieInfo from '../pages/MovieInfo.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: MainLayout,
	},
	{
		path: '/movies/:id',
		name: 'MovieInfo',
		props: true,
		component: MovieInfo,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(savedPosition) {
		if (savedPosition) {
			// <----
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
});

export default router;
