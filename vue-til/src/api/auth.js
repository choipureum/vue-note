// 회원 API
import { instance } from './index';
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

export { signupUser, loginUser };
