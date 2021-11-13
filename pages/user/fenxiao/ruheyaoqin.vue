<template>
	<view class="index">
		<view class="nav1 nav">
			<view class="tit1-1">方法一</view>
			<view class="tit1-2">点击推广页面下方的“分享邀请链接”，将邀请链接发送给朋友完成注册。</view>
			<image class="pic1-1" src="/static/images/img/zu1881.png" mode=""></image>
		</view>
		<view class="nav2 nav">
			<view class="tit1-1">方法二</view>
			<view class="tit1-2">点击推广页面下方的“分享邀请二维码”，邀请朋友扫描二维码完成注册。</view>
			<image class="pic1-1" src="/static/images/img/zu1886.png" mode=""></image>
		</view>
		<view class="nav3 nav">
			<view class="tit1-1">方法三</view>
			<view class="tit1-2">好友在注册时可填写您的邀请码（即手机号）完成注册。</view>
			<image class="pic1-3" src="/static/images/img/zu19999.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style>
	page {
		background: #f8f8f8;
		height: 100%;
	}
</style>

<style lang="scss" scoped>
	.index {}
	.nav{
		margin: 0 56rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		.tit1-1{
			font-size: 32rpx;
			font-family: PingFang SC, PingFang SC-Heavy;
			font-weight: 800;
			text-align: center;
			color: #333333;
			position: relative;
			&:after{
				content: '';
				position: absolute;
				bottom: -4rpx;
				left: 0;
				z-index: -1;
				width: 100%;
				height: 14rpx;
				background-color: #fed4c3;
			}
		}
		.tit1-2{
			margin-top: 40rpx;
			margin-bottom: 24rpx;
			white-space: pre-wrap;
			width: 640rpx;
		}
		.pic1-1{
			width: 640rpx;
			height: 174rpx;
		}
	}
	.nav1{
		margin-top: 76rpx;
	}
	.nav2{
		margin-top: 90rpx;
	}
	.nav3{
		margin-top: 90rpx;
		padding-bottom: 56rpx;
		.pic1-3{
			width: 640rpx;
			height: 430rpx;
		}
	}
</style>
