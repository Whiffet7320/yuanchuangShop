<template>
	<view class="index">
		<image class="pic" src="/static/images/img/zu1646.png" mode=""></image>
		<view class="tit1">接单成功，待采购商确认</view>
		<view class="tit2">您可通过以下方式与采购商沟通</view>
		<view class="tit3">
			<view class="txt3-1">
				线上交流<text class="yellow">(推荐)</text>
			</view>
			<view class="txt3-2">点此与采购商聊天</view>
		</view>
		<view class="tit3">
			<view class="txt3-1">联系电话</view>
			<view class="txt3-3">{{mobile}}（{{nickname}}）</view>
		</view>
		<view class="footer">
			<view @click="goBack" class="btn">返回</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				nickname:'',
				mobile:'',
			}
		},
		onLoad(options) {
			console.log(options)
			this.mobile = options.mobile;
			this.nickname = options.nickname;
		},
		methods:{
			goBack(){
				uni.navigateBack({
					delta:3
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.index{
		position: relative;
	}
	.pic{
		margin-top: 102rpx;
		margin-left: 306rpx;
		width: 140rpx;
		height: 140rpx;
	}
	.tit1{
		margin-top: 40rpx;
		text-align: center;
		font-size: 32rpx;
		font-family: PingFang SC, PingFang SC-Bold;
		font-weight: 700;
		color: #333333;
	}
	.tit2{
		margin-top: 14rpx;
		text-align: center;
		font-size: 28rpx;
		font-family: PingFang SC, PingFang SC-Regular;
		font-weight: 400;
		color: #666666;
		margin-bottom: 50rpx;
	}
	.tit3{
		margin-bottom: 2rpx;
		height: 88rpx;
		background: #ffffff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24rpx;
		.txt3-1{
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			color: #333333;
			.yellow{
				color: #FB6729;
			}
		}
		.txt3-2{
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			color: #fb6729;
		}
		.txt3-3{
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			color: #333333;
		}
	}
	.footer{
		position: fixed;
		bottom: 0;
		width: 750rpx;
		height: 140rpx;
		background: #ffffff;
		box-shadow: 0rpx 8rpx 28rpx 0rpx rgba(166,179,194,0.30); 
		display: flex;
		align-items: center;
		justify-content: center;
		.btn{
			width: 702rpx;
			height: 76rpx;
			background: #fb6729;
			border-radius: 38rpx;
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			text-align: center;
			color: #ffffff;
			line-height: 76rpx;
		}
	}
</style>
