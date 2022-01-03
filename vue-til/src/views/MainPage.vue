<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned Vue</h1>
			<div v-if="isLoading">
				<loading-spinner></loading-spinner>
			</div>
			<ul v-else>
				<post-list-item
					v-for="postItem in postItems"
					:key="postItem._id"
					:postItem="postItem"
					@refresh="fetchNote"
				></post-list-item>
			</ul>
		</div>
		<router-link to="/add" class="create-button">
			<i class="icon ion-md-add"></i>
		</router-link>
	</div>
</template>

<script>
import { fetchPosts } from '@/api/posts';
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
	components: {
		PostListItem,
		LoadingSpinner,
	},
	data() {
		return {
			postItems: [],
			isLoading: false,
		};
	},
	methods: {
		async fetchNote() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.isLoading = false;
			this.postItems = data.posts;
		},
	},
	created() {
		this.fetchNote();
	},
};
</script>

<style scoped>
.list-container {
	padding-top: 13px;
}
.list-container.sticky {
	margin-top: 76px;
}
ul {
	display: flex;
	flex-wrap: wrap;
}
ul > li {
	position: relative;
	flex-grow: 1;
	width: 320px;
	height: 250px;
	margin: 7px;
	padding: 10px 20px;
	background: white;
	box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
	border-radius: 3px;
}
.post-title {
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 0.5rem;
}
.post-contents {
	height: 160px;
	overflow-y: auto;
	font-size: 18px;
}
.post-time {
	position: absolute;
	bottom: 4px;
	right: 5px;
	font-size: 14px;
	color: #9e9e9e;
}
.icon {
	font-size: 1.3rem;
	cursor: pointer;
	color: #364f6b;
	padding-right: 0.4rem;
}
.icon:hover {
	color: #3fc1c9;
}
.icon:active {
	color: #fc5185;
}
.ion-md-create {
	padding-left: 0.1rem;
}
.create-button {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	position: fixed;
	right: 20px;
	bottom: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
	background: #fe9616;
	border: 3px solid white;
}
</style>
