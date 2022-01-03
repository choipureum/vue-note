// 학습 노트 관련 API
import { posts } from './index';

/**
 * @name 학습 노트 데이터 리스트 조회 API
 * @returns posts
 */
function fetchPosts() {
	return posts.get('/');
}

/**
 * @name 학습 노트 데이터 조회 API
 * @returns post
 */
function fetchPost(postId) {
	return posts.get(`/${postId}`);
}

/**
 * @name 학습 노트 데이터 등록 API
 * @param {postData} postData: title, contents
 * @returns statusCode, postData
 */
function createPost(postData) {
	return posts.post('/', postData);
}

/**
 * @name 학습 노트 데이터 수정 API
 * @param {*} postData: id, title, contents
 * @returns statusCode
 */
function editPost(postId, postData) {
	return posts.put(postId, postData);
}

/**
 * @name 학습 노트 데이터 삭제 API
 * @param {postId} postId : 고유 아이디
 * @returns statusCode
 */
function deletePost(postId) {
	return posts.delete(`/${postId}`);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
