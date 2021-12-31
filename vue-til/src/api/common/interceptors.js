import store from '@/store/index';

function setInterceptors(instance) {
	//Add a request interceptor
	instance.interceptors.request.use(
		function (config) {
			config.headers.Authorization = store.state.token;
			return config;
		},
		function (error) {
			return Promise.reject(error);
		},
	);
	//Add a response interceptor
	instance.interceptors.response.use(
		function (config) {
			return config;
		},
		function (error) {
			return Promise.reject(error);
		},
	);
	return instance;
}

export { setInterceptors };
