import axios from 'axios';

//const BASE_URL = 'http://localhost:3000/';
const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

function signupUser(userData) {
	return instance.post('signup', userData);
}

function loginUser(userData) {
	return instance.post('login', userData);
}

export { signupUser, loginUser };
