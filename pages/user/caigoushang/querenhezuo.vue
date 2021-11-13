<template>
	<view class="index">
		<view class="nav7 nav3 nav2">
			<view class="tit2">收货信息</view>
			<view class="address cu-list menu-avatar margin-bj radius-bock">
				<view class="cu-item">
					<view class="cu-avatar round wanl-bg-orange"><text class="wlIcon-weizhi1"></text></view>
					<view class="content" v-if="addressData.address" @tap="userAddress()">
						<view>
							<text class="wanl-pip margin-right-sm">{{ addressData.name }}</text>
							<text class="wanl-gray-light text-sm">{{ addressData.mobile }}</text>
						</view>
						<view class="text-sm wanl-pip text-cut">{{ addressData.province}} {{ addressData.city }}
							{{ addressData.district }} {{ addressData.address }}
						</view>
					</view>
					<view class="content" @tap="addAddress('newadd')" v-else>
						<view class="text-sm wanl-pip text-cut">点击此处填写收货地址</view>
					</view>
					<view class="action"><text class="wlIcon-fanhui2 text-lg"></text></view>
				</view>
			</view>
		</view>
		<view class="nav2">
			<view class="tit2">任务信息</view>
			<view class="list">
				<view class="hd flex">
					<view class="stit">{{obj.name}}</view>
				</view>
				<view class="desc">{{obj.myKuanshi}}</view>
				<view class="bd flex">
					<view class="left">
						<text class="money">¥{{obj.count_money}}</text>
					</view>
				</view>
				<view class="ft flex">
					<view class="left">{{obj.count}}双 | {{obj.kuanshi_count}}款式</view>
					<!-- <view class="right flex">
						<view @click="tochakanxiangqin" class="seeXQ">查看详情</view>
					</view> -->
				</view>
			</view>
		</view>
		<view class="nav3 nav2">
			<view class="tit2">接单信息</view>
			<view class="nav-3">
				<view class="tit-3">
					<view class="txt-3-1">厂家名称</view>
					<view class="txt-3-2">{{obj.shopname}}</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">厂家地址</view>
					<view class="txt-3-2">{{obj.xiangxi}}</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">联系人</view>
					<view class="txt-3-2">{{obj.nickname}}</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">联系电话</view>
					<view class="txt-3-2 yellow">{{obj.mobile}}</view>
				</view>
			</view>
		</view>
		<view class="nav4 nav3 nav2">
			<view class="tit2">付款信息</view>
			<view class="nav-3">
				<!-- 全额 -->
				<view class="tit-3" v-if='obj.fktype == 1'>
					<view class="txt-3-1">付款方式</view>
					<view class="txt-3-2">全额支付</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">待支付</view>
					<view class="txt-3-2 yellow">¥{{obj.count_money}}(待支付)</view>
				</view>
				<!-- 预付款 -->
				<view class="tit-3" v-if='obj.fktype == 2'>
					<view class="txt-3-1">付款方式</view>
					<view class="txt-3-2">预付款+尾款支付</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">待支付</view>
					<view class="txt-3-2 yellow">¥{{obj.yfk_money}}(待支付)</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">尾款</view>
					<view class="txt-3-2 yellow">¥{{Number(obj.count_money)-Number(obj.yfk_money)}}</view>
				</view>
				<!-- 尾款 -->
				<!-- <view class="tit-3">
					<view class="txt-3-1">付款方式</view>
					<view class="txt-3-2">预付款+尾款支付</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">待支付</view>
					<view class="txt-3-2 yellow">¥800.00(已支付)</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">尾款</view>
					<view class="txt-3-2 yellow">¥7200.00(待支付)</view>
				</view> -->
			</view>
		</view>
		<view class="footer">
			<view @click="topay" class="btn3">提交订单</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex";
	export default {
		computed: {
			...mapState(["nowAddress"]),
		},
		data() {
			return {
				aid: '',
				bid: '',
				obj: {},
				addressData: {},
				orderData: {
					order_no: '',
					address: {
						name: '加载中...',
						mobile: '',
						address: '',
						address_name: ''
					},
					logistics: {
						context: '',
						status: '',
						time: ''
					},
					statetime: ''
				},
				logisticsType: false,
				infoMore: false
			}
		},
		onLoad(option) {
			this.aid = option.aid;
			this.bid = option.bid;
		},
		onShow() {
			console.log(this.nowAddress)
			this.loadData(false, true);
			this.getData()
		},
		methods: {
			topay() {
				var address =
					`${this.addressData.name},,${this.addressData.mobile},,${this.addressData.province}${this.addressData.city}${this.addressData.district}${this.addressData.address}`
				uni.request({
					url: `${this.$url}/wanlshop/Jiedan/yes_cooperate`,
					data: {
						aid: this.aid,
						bid: this.bid,
						address,
					},
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						console.log(res.data)
						if (res.data.code == 1) {
							if (this.obj.fktype == 1) {
								uni.navigateTo({
									url: `/pages/user/caigoushang/shouyintai1?money=${this.obj.count_money}&type=${this.obj.fktype}&id=${this.bid}`
								})
							} else if (this.obj.fktype == 2) {
								uni.navigateTo({
									url: `/pages/user/caigoushang/shouyintai1?money=${this.obj.yfk_money}&type=${this.obj.fktype}&id=${this.aid}`
								})
							}
						}
					}
				})
			},
			getData() {
				uni.request({
					url: `${this.$url}/wanlshop/Jiedan/yes_cooperate_view`,
					data: {
						aid: this.aid,
						bid: this.bid
					},
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						console.log(res.data)
						this.obj = res.data.data;
						this.obj.myKuanshi = '';
						this.obj.kuanshi.forEach((item, i) => {
							if (i == this.obj.kuanshi.length - 1) {
								this.obj.myKuanshi += `${item}`
							} else {
								this.obj.myKuanshi += `${item} | `
							}
						})
					}
				})
			},
			tochakanxiangqin() {
				uni.navigateTo({
					url: ''
				})
			},
			addAddress(type) {
				this.$wanlshop.to(`/pages/user/address/addressManage?type=${type}`);
			},
			userAddress() {
				this.$wanlshop.to('/pages/user/address/address?source=3');
			},
			async loadData(reload, refresh) {
				this.$api.get({
					url: '/wanlshop/address/getaddress',
					loadingTip: refresh ? '更新列表中...' : '',
					data: {
						page: reload ? (this.current_page) : 1
					},
					success: res => {
						if (reload) {
							this.addressList = this.addressList.concat(res.data);
						} else {
							this.addressList = res.data;
							uni.stopPullDownRefresh();
						}
						this.addressData = this.addressList[0];
						if(this.nowAddress.address){
							this.addressData = this.nowAddress;
						}
						this.total = res.total; //数据量
						this.current_page = res.current_page; //当前页码
						this.last_page = res.last_page; //总页码
						this.status = res.total == 0 ? 'noMore' : 'more';
					}
				});
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
