import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		name: 'login',
		// dynamic importing: code spliting //초기 렌더링 속도 증가
		component: () => import('@/views/LoginPage.vue'),
	},
	{
		path: '/signup',
		name: 'signup',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '@/views/SignupPage.vue'),
	},
	{
		path: '/:catchAll(.*)', // Unrecognized path automatically matches 404
		component: () => import('@/views/error/404.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL), //# 제거 필수 default 값
	routes,
});

export default router;
