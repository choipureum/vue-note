<template>
	<li>
		<div class="post-title">{{ postItem.title }}</div>
		<div class="post-contents">{{ postItem.contents }}</div>
		<div class="post-time">{{ postItem.createdAt }}</div>
	</li>
</template>

<script>
export default {
	//props는 최대한 자세히 정의할것
	props: {
		postItem: {
			type: Object,
			required: true,
		},
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
</style>
