<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<page-header>Login🔑</page-header>
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">username: </label>
					<input type="text" id="username" v-model="user.username" />
				</div>
				<div>
					<label for="password">password: </label>
					<input type="text" id="password" v-model="user.password" />
				</div>
				<button
					:disabled="!isUserNameValid || !user.password"
					type="submit"
					class="btn"
				>
					Login👍
				</button>
				<p class="log">{{ logMessage }}</p>
			</form>
		</div>
	</div>
</template>

<script>
import PageHeader from '@/components/common/PageHeader.vue';
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
	components: {
		PageHeader,
	},
	data() {
		return {
			user: {
				username: '',
				password: '',
			},
			logMessage: '',
		};
	},
	// 유효성 검사, store 등등는 보통 computed
	computed: {
		// 지속적으로 v-model처럼 검사함
		isUserNameValid() {
			console.log(validateEmail(this.user.name));
			return validateEmail(this.user.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				const { data } = await loginUser(this.user);
				// this.logMessage = `${data.user.nickname}님 환영합니다!`;
				console.log(data);
				this.$store.commit('setUser', data.user);
				//router 링크 to 로 이동 //param이나 query도 넘길수있음
				this.$router.push('/main');
			} catch ({ response }) {
				this.logMessage = `${response}`;
			} finally {
				this.initForm();
			}
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

<style scoped>
.btn {
	color: white;
}
</style>
