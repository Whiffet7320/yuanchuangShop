<template>
	<view class="index">
		<view class="nav3 nav2" v-for="(item,i) in list" :key='i'>
			<view class="tit2">接单厂家#{{i+1}}</view>
			<!-- 不能合作 -->
			<view v-if="item.type == 1" class="tit2-1">该厂家未确认任务修改，无法合作</view>
			<view class="nav-3">
				<view class="tit-3">
					<view class="txt-3-1">厂家名称</view>
					<view class="txt-3-2">{{item.shopname}}</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">厂家地址</view>
					<view class="txt-3-2">{{item.xiangxi}}</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">联系人</view>
					<view class="txt-3-2">{{item.nickname}}</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">联系电话</view>
					<view class="txt-3-2 yellow">{{item.mobile}}</view>
				</view>
				<view class="btnn">
					<view class="btns">
						<view class="btn1">联系厂家</view>
						<view class="btn2" @click="querenhezuo(item)">确认合作</view>
						<!-- 不能合作 -->
						<!-- <view class="btn2 no">确认合作</view> -->
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				list:[],
			}
		},
		onLoad(option) {
			this.id= option.id;
			this.getData();
		},
		methods: {
			querenhezuo(item){
				uni.navigateTo({
					url:`/pages/user/caigoushang/querenhezuo?aid=${this.id}&bid=${item.jd_id}`
				})
			},
			getData() {
				uni.request({
					url: `${this.$url}/wanlshop/Jiedan/take_over_list`,
					data: {
						id: this.id,
						page:1,
						limit:100,
					},
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						console.log(res.data)
						this.list = res.data.data;
						// this.obj = res.data.data;
					}
				})
			},
		}
	}
</script>

<style>
	page {
		background: #f8f8f8;
	}
</style>
<style lang="scss" scoped>
	.nav2 {
		position: relative;

		.tit2-1 {
			position: absolute;
			top: 0;
			right: 0;
			font-size: 24rpx;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			color: #fb6729;
		}
	}

	.btnn {
		display: flex;
		flex-direction: row-reverse;

		.btns {
			margin-top: 16rpx;
			display: flex;

			.btn1 {
				width: 148rpx;
				height: 60rpx;
				border: 1rpx solid #fb6729;
				border-radius: 31rpx;
				font-size: 24rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				text-align: center;
				color: #fb6729;
				line-height: 60rpx;
				margin-right: 24rpx;
			}

			.btn2 {
				width: 148rpx;
				height: 60rpx;
				background: #fb6729;
				border-radius: 30rpx;
				font-size: 24rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				text-align: center;
				color: #ffffff;
				line-height: 60rpx;
			}
			.btn2.no{
				background: #cfcfcf;
			}
		}
	}

	.index {
		padding-bottom: 140rpx;
	}

	.nav7 {
		.margin-bj {
			margin: 12rpx 0;
		}
	}

	.nav1 {
		margin-bottom: 30rpx;
		width: 750rpx;
		height: 86rpx;
		background: #ffffff;
		padding: 0 24rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.tit2 {
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			color: #fb6729;
		}
	}

	.nav2 {
		.pic1 {
			width: 20rpx;
			height: 20rpx;
			margin-right: 6rpx;
		}

		.pic2 {
			width: 22rpx;
			height: 14rpx;
			margin-right: 6rpx;
		}

		margin: 0 24rpx;

		.tit2 {
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			color: #333333;
		}

		.list {
			margin-top: 20rpx;
			width: 702rpx;
			height: 250rpx;
			background: #ffffff;
			border-radius: 10rpx;
			padding: 24rpx 30rpx;

			.flex {
				display: flex;
				align-items: center;
			}

			.hd {
				.stit {
					flex: 1;
					font-size: 32rpx;
					font-family: PingFang SC, PingFang SC-Bold;
					font-weight: 700;
					color: #333333;
				}

				.status {
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #fb6729;
				}
			}

			.desc {
				margin-top: 10rpx;
				margin-bottom: 20rpx;
				font-size: 28rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				color: #333333;
			}

			.bd {
				.left {
					flex: 1;
					display: flex;
					align-items: center;

					.money {
						font-size: 32rpx;
						font-family: PingFang SC, PingFang SC-Bold;
						font-weight: 700;
						color: #fb6729;
					}

					.sub {
						margin-left: 16rpx;
						font-size: 24rpx;
						font-family: PingFang SC, PingFang SC-Regular;
						font-weight: 400;
						color: #666666;
					}
				}

				.right {
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #333333;
				}
			}

			.ft {
				margin-top: 10rpx;

				.left {
					flex: 1;
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #999999;
				}

				.right {
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #999999;

					.seeXQ {
						font-size: 28rpx;
						font-family: PingFang SC, PingFang SC-Regular;
						font-weight: 400;
						color: #fb6729;
					}

					.time {
						margin-right: 14rpx;
					}
				}
			}

			.cellbox {
				background-color: #F9F9F9;

				.cell {
					background: #f3f3f3;
					padding: 24rpx;
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #333333;

					&.white {
						background-color: #FFFFFF;

						.gray {
							color: #999999;
						}
					}
				}
			}
		}

	}

	.nav3 {
		margin-top: 30rpx;

		.nav-3 {
			margin-top: 24rpx;
			width: 702rpx;
			// height: 256rpx;
			background: #ffffff;
			border-radius: 10rpx;
			padding: 24rpx 30rpx;

			.tit-3 {
				&:nth-child(1) {
					margin-top: 0;
				}

				margin-top: 24rpx;
				display: flex;
				align-items: center;

				.txt-3-1 {
					width: 196rpx;
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Bold;
					font-weight: 700;
					color: #333333;
				}

				.txt-3-2 {
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #333333;
				}

				.yellow {
					color: #fb6729;
				}
			}
		}
	}

	.nav4 {
		.nav-3 {
			// height: 140rpx;
		}
	}

	// .nav5 {
	// 	padding-bottom: 140rpx;
	// }

	.footer {
		position: fixed;
		bottom: 0;
		width: 750rpx;
		height: 140rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #ffffff;
		box-shadow: 0rpx 8rpx 28rpx 0rpx rgba(166, 179, 194, 0.30);

		.btn1 {
			width: 344rpx;
			height: 76rpx;
			border: 2rpx solid #fb6729;
			border-radius: 40rpx;
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			text-align: center;
			color: #fb6729;
			line-height: 76rpx;
		}

		.btn2 {
			margin-left: 14rpx;
			width: 344rpx;
			height: 76rpx;
			background: #cfcfcf;
			border-radius: 38rpx;
			text-align: center;
			color: #FFFFFF;
			line-height: 76rpx;
		}

		.btn2.isHaveDD {
			font-size: 30rpx;
			background: #fb6729;
		}

		.btn3 {
			width: 702rpx;
			height: 76rpx;
			background: #fb6729;
			border-radius: 38rpx;
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			text-align: center;
			line-height: 76rpx;
			color: #ffffff;
		}
	}
</style>
