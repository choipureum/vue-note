<template>
	<div id="container">
		<app-header></app-header>
		<router-view />
	</div>
</template>
<script>
//vim 스닙쳇으로 임포트 단축키 가능
import AppHeader from '@/components/common/AppHeader.vue';

export default {
	components: {
		AppHeader,
	},
};
</script>
<style>
@import './assets/css/reset.css';
@import './assets/css/common.css';
</style>
