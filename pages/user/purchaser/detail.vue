<template>
	<view class="container">
		<view class="detail_wrap">
			<view class="notice">支付前可修改任务信息，修改需已接单厂家同意修改，仅可选择同意的厂家合作。</view>
			<view class="list">
				<view class="hd flex">
					<view class="stit">小白鞋</view>
					<view class="status">接单中</view>
				</view>
				<view class="desc">压花牛皮 | 猪里 | 喷漆跟 | 猪里垫</view>
				<view class="bd flex">
					<view class="left">
						<text class="money">¥8000.00</text>
						<text class="sub">预付款¥800.00</text>
					</view>
					<view class="right">暂无厂家接单</view>
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
				<view class="cellbox">
					<view class="cell flex">
						<text class="name">产品名称</text>
						<text>小白鞋</text>
					</view>
				</view>
			</view>
		</view>
		<view class="btnwrap">
			<button class="commbtn btn_primary">修改任务</button>
			<button class="commbtn btn_gray">查看接单厂家</button>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.detail_wrap{
		margin:16rpx 24rpx;
		.notice{
			padding:20rpx 30rpx;
			background-color: #fce2d7;
			border-radius: 10rpx;
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			color: #fb6729;
			margin-bottom: 16rpx;
		}
		.list{
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding:40rpx 30rpx;
			.flex{
				display: flex;
				align-items: center;
			}
			.hd{
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
			.cellbox{
				background-color: #F9F9F9;
				.cell{
					background: #f3f3f3;
					padding:24rpx;
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #333333;
					&.white{
						background-color: #FFFFFF;
						.gray{
							color: #999999;
						}
					}
				}
			}
		}
		.btnwrap{
			position: fixed;
			bottom: 0;
			left:0;
			right:0;
			z-index: 50;
			padding: 16rpx 24rpx;
			background: #ffffff;
			box-shadow: 0rpx 8rpx 28rpx 0rpx rgba(166,179,194,0.30);
			.commbtn{
				flex:1;
				font-size: 28rpx;
				font-family: PingFang SC, PingFang SC-Bold;
				font-weight: 700;
				text-align: center;
			}
			.btn_primary{
				height: 76rpx;
				border: 2rpx solid #fb6729;
				border-radius: 40rpx;
				color: #fb6729;
			}
			.btn_gray{
				margin-left: 14rpx;
				background: #cfcfcf;
				border-radius: 38rpx;
				color: #ffffff;
			}
		}
	}
</style>
