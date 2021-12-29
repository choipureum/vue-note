<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">username: </label>
			<input type="text" id="username" v-model="user.username" />
		</div>
		<div>
			<label for="password">password: </label>
			<input type="text" id="password" v-model="user.password" />
		</div>
		<div>
			<label for="nickname">nickname: </label>
			<input type="text" id="nickname" v-model="user.nickname" />
		</div>
		<button type="submit">SignUp🎨</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { signupUser } from '@/api/index';

export default {
	//data 자동완성기능 : vda
	data() {
		return {
			user: {
				username: '',
				password: '',
				nickname: '',
			},
			logMessage: '',
		};
	},
	methods: {
		//@은 이벤트 v-on의 약자
		// .prevent로 제출후 이벤트 이동을 방지한다.
		async submitForm() {
			//then, catch보다 async await 추천
			//destructuring을 통해 response.data를 바로 꺼낼수있음
			const { data } = await signupUser(this.user);
			this.logMessage = `${data.nickname}님이 가입되었습니다.✔`;
			this.initForm();
		},
		initForm() {
			this.user = {
				username: '',
				password: '',
				nickname: '',
			};
		},
	},
};
</script>

<style></style>
