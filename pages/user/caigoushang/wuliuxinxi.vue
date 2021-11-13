<template>
	<view class="index">
		<uni-steps
			:options="list"
			direction="column" :active="length"></uni-steps>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				length:null,
			}
		},
		onLoad(option) {
			this.list = JSON.parse(option.list).reverse();
			console.log(this.list)
			this.list.forEach(ele=>{
				ele.title = ele.context;
				ele.desc = ele.ftime;
			})
			this.length = this.list.length - 1;
		},
	}
</script>

<style>
</style>
