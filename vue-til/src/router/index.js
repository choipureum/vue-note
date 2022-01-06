import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

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
		path: '/main',
		name: 'main',
		meta: {
			auth: true,
		},
		component: () => import('@/views/MainPage.vue'),
	},
	{
		path: '/add',
		name: 'add',
		meta: {
			auth: true,
		},
		component: () => import('@/views/post/PostAddPage.vue'),
	},
	{
		path: '/posts/:id',
		name: 'Edit',
		meta: {
			auth: true,
		},
		component: () => import('@/views/post/PostEditPage.vue'),
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

router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters.isLogin) {
		//인증이 필요하면서 로그인하지 않았을경우
		console.log('인증이 필요합니다');
		next('/login');
		return; //함수 종료
	}
	next();
});

export default router;
