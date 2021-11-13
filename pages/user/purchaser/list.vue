<template>
	<view class="list">
		<view class="item">
			<view class="hd">
				<view class="stit">小白鞋</view>
				<view class="status">接单中</view>
			</view>
			<view class="desc">压花牛皮 | 猪里 | 喷漆跟 | 猪里垫</view>
			<view class="bd">
				<view class="left">
					<text class="money">¥8000.00</text>
					<text class="sub">预付款¥800.00</text>
				</view>
				<view class="right">3厂家已接单</view>
			</view>
			<view class="ft flex">
				<view class="left">100双 | 2款式</view>
				<view class="right flex">
					<view class="time flex">
						<u-icon name="" color="#999999"></u-icon>
						<text>1小时前</text>
					</view>
					<view class="eye flex">
						<u-icon name="" color="#999999"></u-icon>
						<text>20</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.list{
		padding: 20rpx 24rpx;
		.item{
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding:24rpx 30rpx;
			margin-bottom: 20rpx;
			.flex{
				display: flex;
				align-items: center;
			}
			.hd{
				display: flex;
				align-items: center;
				.stit{
					flex:1;
					font-size: 32rpx;
					font-family: PingFang SC, PingFang SC-Bold;
					font-weight: 700;
					color: #333333;
				}
				.status{
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #fb6729;
				}
			}
			.desc{
				margin-top: 10rpx;
				margin-bottom: 20rpx;
				font-size: 28rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				color: #333333;
			}
			.bd{
				display: flex;
				align-items: center;
				.left{
					flex:1;
					display: flex;
					align-items: center;
					.money{
						font-size: 32rpx;
						font-family: PingFang SC, PingFang SC-Bold;
						font-weight: 700;
						color: #fb6729;
					}
					.sub{
						margin-left: 16rpx;
						font-size: 24rpx;
						font-family: PingFang SC, PingFang SC-Regular;
						font-weight: 400;
						color: #666666;
					}
				}
				.right{
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #333333;
				}
			}
			.ft{
				margin-top: 10rpx;
				.left{
					flex:1;
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #999999;
				}
				.right{
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #999999;
					.time{
						margin-right: 14rpx;
					}
				}
			}
		}
	}
</style>
