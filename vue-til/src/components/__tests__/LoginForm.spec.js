import LoginForm from '../LoginForm.vue';
import { shallowMount } from '@vue/test-utils';

describe('LoginForm.vue', () => {
	test('component mount 이후 username이 존재하고 초기 값으로 설정되어 있다.', () => {
		/*
        const wrapper = mount(LoginForm);
		console.log(wrapper);
		console.log(wrapper.text());
		expect(wrapper.componentVM.user.username).toBe('');
        */
		const wrapper = shallowMount(LoginForm);
		expect(wrapper.vm.user.username).toBe('');
	});

	test('ID는 email 형식이어야한다', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					user: {
						username: 'test',
					},
				};
			},
		});
		const warningText = wrapper.find('.warning');
		console.log('warning: ' + warningText.exists());
		expect(warningText.exists()).toBeTruthy();
	});

	test('ID는 email 형식이 아닐때 false를 반환한다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					user: {
						username: 'test',
						password: '1234',
					},
				};
			},
		});
		const usernameInput = wrapper.find('#username');
		console.log(`username: ${usernameInput.element.value}`);
		console.log(`computed[isUserNameValid] : ${wrapper.vm.isUserNameValid}`);

		expect(wrapper.vm.user.username).toBe('test');
		expect(wrapper.vm.isUserNameValid).toBe(false);
	});

	test('ID는 email 형식일때 true를 반환한다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					user: {
						username: 'test@test.com',
						password: '1234',
					},
				};
			},
		});
		expect(wrapper.vm.user.username).toBe('test@test.com');
		expect(wrapper.vm.isUserNameValid).toBe(true);
	});

	test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 됨.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					user: {
						username: '',
						password: '',
					},
				};
			},
		});

		const button = wrapper.find('button');
		expect(button.element.disabled).toBeTruthy();
	});
});
