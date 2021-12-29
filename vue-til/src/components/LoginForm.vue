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
		<button type="submit">Login👍</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/index';
export default {
	data() {
		return {
			user: {
				username: '',
				password: '',
			},
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			const { data } = await loginUser(this.user);
			this.logMessage = `${data.user.nickname}님 환영합니다!`;
			this.initForm();
		},
		initForm() {
			this.user = {
				username: '',
				password: '',
			};
		},
	},
};
</script>

<style></style>
