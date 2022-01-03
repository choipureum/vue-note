import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

/**
 * @name axios 기본 초기화 함수
 * @returns instance
 */
function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

/**
 * @name axios auth 초기화 함수
 * @returns instance
 */
function createInstanceWithAuth(url) {
	//const BASE_URL = 'http://localhost:3000/';
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
		// headers: {
		// 	Authorization: store.state.token, //이렇게 선언하면 처음 로그인시 빈값으로 헤더가 create가됨 => axios interceptor 설정해야함
		// },
	});
	return setInterceptors(instance); //token 제대로 담기위한 것
}

export const instance = createInstance();
export const posts = createInstanceWithAuth('posts');
