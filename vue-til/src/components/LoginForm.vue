<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<page-header>Login🔑</page-header>
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">username: </label>
					<input type="text" id="username" v-model="user.username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && user.username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">password: </label>
					<input type="text" id="password" v-model="user.password" />
				</div>
				<button
					:disabled="!isUserNameValid || !user.password"
					type="submit"
					class="btn"
					:class="!isUserNameValid || !user.password ? 'disabled' : null"
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
				await this.$store.dispatch('LOGIN', this.user); //actions level 부를수있음 -> 리팩토링해서 actions로 이동 (await 필수)
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
