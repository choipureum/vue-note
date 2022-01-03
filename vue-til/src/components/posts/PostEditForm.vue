<template>
	<div class="contents">
		<h1 class="page-header">Edit Post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title: </label>
					<input type="text" id="title" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents: </label>
					<textarea type="text" id="contents" rows="5" v-model="contents" />
					<p v-if="!isContentsValid" class="validation-text warning">
						Text length must be less than 200
					</p>
				</div>
				<button type="submit" class="btn">Create</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 200;
		},
	},
	methods: {
		async submitForm() {
			try {
				const { data } = await editPost(this.$route.params.id, {
					title: this.title,
					contents: this.contents,
				});
				this.$router.push('/main');
				console.log(data);
			} catch (error) {
				this.logMessage = error.response.data.message;
			}
		},
	},
	async created() {
		const { data } = await fetchPost(this.$route.params.id);
		this.title = data.title;
		this.contents = data.contents;
		console.log(data);
	},
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}
.btn {
	color: white;
}
</style>
