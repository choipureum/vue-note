import { createStore } from 'vuex';
import { loginUser } from '@/api/auth';
import {
	getAuthFromCookie,
	getUserFromCookie,
	saveAuthToCookie,
	saveUserToCookie,
} from '@/utils/cookies';

export default createStore({
	state: {
		user: {
			username: getUserFromCookie() || '',
			nickname: '',
		},
		token: getAuthFromCookie() || '',
	},
	getters: {
		isLogin(state) {
			return state.user.username !== ''; // === 타입까지 비교
		},
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
		clearUser(state) {
			state.user = {
				username: '',
				nickname: '',
			};
		},
		setToken(state, token) {
			state.token = token;
		},
	},
	actions: {
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			// this.logMessage = `${data.user.nickname}님 환영합니다!`;
			commit('setToken', data.token);
			commit('setUser', data.user);
			//쿠키 저장 -> 쿠키는 개발자모드 애플리케이션 탭에서 확인 가능
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);
			return data;
		},
	},
	modules: {},
});
