import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { formatDate } from '@/utils/filters';

const app = createApp(App);
//날짜 filter 적용
app.config.globalProperties.$filters = {
	formatDate,
};
app.use(store).use(router).mount('#app');
