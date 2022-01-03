import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

/**
 * @name axios 초기화 함수
 * @returns instance
 */
function createInstance() {
	//const BASE_URL = 'http://localhost:3000/';
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
		// headers: {
		// 	Authorization: store.state.token, //이렇게 선언하면 처음 로그인시 빈값으로 헤더가 create가됨 => axios interceptor 설정해야함
		// },
	});
	return setInterceptors(instance); //token 제대로 담기위한 것
}
const instance = createInstance();

/**
 * @name 회원가입 API
 * @param {userData} userData: username, nickname
 * @returns user
 */
function signupUser(userData) {
	return instance.post('signup', userData);
}

/**
 * @name 로그인 API
 * @param {userData} userData: username, nickname
 * @returns statusCode, token
 */
function loginUser(userData) {
	return instance.post('login', userData);
}

/**
 * @name 학습 노트 데이터 조회 API
 * @returns posts
 */
function fetchPosts() {
	return instance.get('posts');
}

/**
 * @name 학습 노트 데이터 등록 API
 * @param {postData} postData: title, contents
 * @returns statusCode, postData
 */
function createPost(postData) {
	return instance.post('posts', postData);
}

export { signupUser, loginUser, fetchPosts, createPost };
