<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<page-header>Sign Up🎨</page-header>
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">username: </label>
					<input
						type="text"
						id="username"
						v-model="user.username"
						:class="usernameValidClass"
					/>
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">password: </label>
					<input
						type="text"
						id="password"
						v-model="user.password"
						:class="passwordValidClass"
					/>
					<p class="validation-text">
						<span class="warning" v-if="!isPasswordValid">
							Password must be over 8 letters
						</span>
					</p>
				</div>
				<div>
					<label for="nickname">nickname: </label>
					<input
						type="text"
						id="nickname"
						v-model="user.nickname"
						:class="nicknameValidClass"
					/>
				</div>
				<button type="submit" class="btn" :class="isButtonDisabled">
					SignUp✔
				</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import PageHeader from '@/components/common/PageHeader.vue';
import { signupUser } from '@/api/auth';
import { validateEmail, validatePassword } from '@/utils/validation';

export default {
	components: {
		PageHeader,
	},
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
	computed: {
		usernameValidClass() {
			if (!this.user.username) {
				return;
			}
			return validateEmail(this.user.username) ? 'valid' : 'invalid';
		},
		isUsernameValid() {
			if (!this.user.username) {
				return true;
			}
			return validateEmail(this.user.username);
		},
		passwordValidClass() {
			if (!this.user.password) {
				return;
			}
			return validatePassword(this.user.password) ? 'valid' : 'invalid';
		},
		isPasswordValid() {
			if (!this.user.password) {
				return true;
			}
			return validatePassword(this.user.password);
		},
		nicknameValidClass() {
			return this.user.nickname ? 'valid' : null;
		},
		isButtonDisabled() {
			return !this.user.username ||
				!this.user.password ||
				!this.user.nickname ||
				!validateEmail(this.user.username) ||
				!validatePassword(this.user.password)
				? 'disabled'
				: null;
		},
	},
	methods: {
		//@은 이벤트 v-on의 약자
		// .prevent로 제출후 이벤트 이동을 방지한다.
		async submitForm() {
			//then, catch보다 async await 추천
			//destructuring을 통해 response.data를 바로 꺼낼수있음
			try {
				const { data } = await signupUser(this.user);
				this.logMessage = `${data.nickname}님이 가입되었습니다.✔`;
			} catch ({ response }) {
				if (response.status === 409) {
					this.logMessage = `${this.user.username} already exists`;
				}
			} finally {
				this.initForm();
			}
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

<style scoped>
.form {
	width: 460px;
	height: 100%;
}
.form .validation-text {
	margin-top: -0.5rem;
	margin-bottom: 0.5rem;
	font-size: 1rem;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
}
.btn {
	color: white;
}
.log {
	width: 460px;
}
</style>
