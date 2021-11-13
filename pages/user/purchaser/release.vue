<template>
	<view class="release_wrap">
		<view class="stit">基本信息</view>
		<view class="cellbox">
			<view class="cell">
				<view class="label">产品名称</view>
				<input type="text" placeholder="请输入产品名称" class="ipt" />
			</view>
		</view>
		<view class="titbox">
			<view class="hd">
				<text class="tit">款式信息</text>
				<view class="light">+增加款式</view>
			</view>
			<view class="subtit">款式1</view>
		</view>
		<view class="stit">备注信息</view>
		<view class="cellbox">
			<view class="cell">
				<view class="label">备注</view>
				<input type="text" placeholder="请输入备注" class="ipt" />
			</view>
		</view>
		<view class="stit">联系方式</view>
		<view class="cellbox">
			<view class="cell">
				<view class="label">联系人</view>
				<input type="text" placeholder="请输入联系人" class="ipt" />
			</view>
			<view class="cell">
				<view class="label">联系电话</view>
				<input type="text" placeholder="请输入联系电话，接单厂家可联系您" class="ipt" />
			</view>
		</view>
		<view class="stit">付款方式</view>
		<view class="paylist">
			<view class="pay_item">
				<view class="icon"></view>
				<view class="info">
					<view class="name">全款支付</view>
					<view class="desc">确认厂商后支付全款</view>
					<view class="light">¥8000.00</view>
				</view>
			</view>
			<view class="pay_item">
				<view class="icon"></view>
				<view class="info">
					<view class="name">预付款+尾款支付</view>
					<view class="desc">确认厂商后支付预付款，确认收货时支付尾款</view>
					<input type="text" placeholder="请输入预付款金额（元）" class="ipt" />
				</view>
			</view>
		</view>
		<view class="tip">
			<u-icon class="icon"></u-icon>
			<view>我已阅读并同意<text class="light">《任务发布协议》</text></view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	page{
		background: #f8f8f8;
	}
</style>
<style lang="scss" scoped>
	.release_wrap{
		.light{
			color: #fb6729;
		}
		.stit{
			padding:0 24rpx;
			height: 84rpx;
			line-height: 84rpx;
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			color: #333333;
		}
		.cellbox{
			.cell{
				padding:24rpx;
				background-color: #FFFFFF;
				margin-bottom: 2rpx;
				display: flex;
				flex-direction: column;
				&:last-child{
					margin-bottom: 0;
				}
				.label{
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Bold;
					font-weight: 700;
					color: #333333;
					margin-bottom: 12rpx;
				}
				.ipt{
					font-size: 28rpx;
					color: #333333;
				}
				.tag{
					background: #f3f3f3;
					display: flex;
					flex-direction: column;
					justify-content: center;
					.num{
						font-size: 28rpx;
						font-family: PingFang SC, PingFang SC-Bold;
						font-weight: 700;
						text-align: center;
						color: #666666;
					}
				}
			}
		}
		.titbox{
			padding:24rpx 24rpx 20rpx 24rpx;
			display: flex;
			flex-direction: column;
			.hd{
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;
				.tit{
					flex:1;
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Bold;
					font-weight: 700;
					color: #333333;
				}
			}
			.subtit{
				font-size: 28rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				color: #999999;
			}
		}
		.paylist{
			.pay_item{
				background-color: #FFFFFF;
				padding:30rpx 24rpx;
				margin-bottom: 2rpx;
				display: flex;
				&:last-child{
					margin-bottom: 0;
				}
				.icon{
					width: 30rpx;
					height: 30rpx;
					border: 1rpx solid #a1a1a1;
					border-radius: 50%;
					margin-right: 20rpx;
				}
				.info{
					flex:1;
					display: flex;
					flex-direction: column;
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					.name{
						font-size: 28rpx;
						font-family: PingFang SC, PingFang SC-Bold;
						font-weight: 700;
						color: #333333;
					}
					.desc{
						margin:6rpx 0;
						color: #666666;
					}
					.ipt{
						font-size: 28rpx;
						color: #333333;
					}
				}
			}
		}
		.tip{
			padding:24rpx 30rpx;
			display: flex;
			align-items: center;
			font-size: 20rpx;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			color: #999999;
			.icon{
				margin-right: 8rpx;
			}
			
		}
	}
</style>
