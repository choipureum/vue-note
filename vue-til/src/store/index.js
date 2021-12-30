import { createStore } from 'vuex';

export default createStore({
	state: {
		user: {
			username: '',
			nickname: '',
		},
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
	},
	actions: {},
	modules: {},
});
