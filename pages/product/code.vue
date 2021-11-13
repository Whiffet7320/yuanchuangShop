<template>
	<view class="codewrap">
		<view class="subtitle">
			<text class="top">码上新品</text>
			<text>使用商品口令查看限时/限次专属商品</text>
		</view>
		<view class="iptbox">
			<input type="text" class="ipt" v-model="code" placeholder-style="color: #CECECE" placeholder="粘贴码上新品口令" />
		</view>
		<button type="primary" class="btn_primary" @click="onQuery">查看商品</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				code:""
			}
		},
		methods:{
			onQuery(){
				if(this.code==""){
					uni.showToast({title:"请输入新品口令",icon:"none"});
				}else{
					this.$api.post({
						url: '/wanlshop/kouling/goods',
						data: {
							kouling: this.code
						},
						success: res => {
							uni.navigateTo({
								url:"/pages/product/goods?id="+res+"&kouling="+this.code
							})
						}
					});
				}
			}
		}
	}
</script>

<style>
	page{background: #ffffff;}
</style>
<style lang="scss" scoped>
	.codewrap{
		padding:0 24rpx;
		.subtitle{
			padding:80rpx 24rpx;
			font-size: 24rpx;
			color: #999999;
			display: flex;
			flex-direction: column;
			.top{
				font-size: 44rpx;
				font-weight: 800;
				color: #333333;
				margin-bottom: 10rpx;
			}
		}
		.iptbox{
			margin-bottom: 20rpx;
			.ipt{
				padding: 0 30rpx;
				height: 84rpx;
				line-height: 84rpx;
				background: #f7f7f7;
				border-radius: 42rpx;
				font-size: 28rpx;
				color:#000000;
			}
		}
		.btn_primary{
			width: 100%;
			height: 76rpx;
			line-height: 76rpx;
			background: #fb6729;
			border-radius: 38rpx;
			font-size: 28rpx;
			font-weight: 700;
			text-align: center;
			color: #ffffff;
		}
	}
</style>
