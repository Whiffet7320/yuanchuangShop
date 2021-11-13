<template>
	<view class="wanl-order-list">
		<view class="navbar">
			<view class="nav-item text-df" v-for="(item, index) in navList" :key="item.state"
				:class="{ current: tabCurrentIndex === index }" @tap="tabClick(index)">
				{{ item.text }}
			</view>
		</view>
		<swiper :current="tabCurrentIndex" style="height: calc(100% - 80rpx)" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tag, key) in navList" :key="tag.state">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData">
					<!-- 空白页 -->
					<wanl-empty text="没有找到任何任务" v-if="tag.loaded === true && tag.orderList.length === 0" />
					<!-- 任务列表 -->
					<view class="items">
						<view class="list" @click="toRenwuxiangqin(item)" v-for="(item,i) in tag.orderList"
							:key='item.id'>
							<view class="hd flex">
								<view class="stit">{{item.name}}</view>
								<view class="status">{{item.myStatus}}</view>
							</view>
							<view class="desc">{{item.myKuanshi}}</view>
							<view class="bd flex">
								<view class="left">
									<text class="money">¥{{item.count_money}}</text>
									<text class="sub">预付款¥{{item.yfk_money}}</text>
								</view>
								<view v-if="item.gc_count == 0" class="right">暂无厂家接单</view>
								<view v-else class="right">有{{item.gc_count}}位厂家接单</view>
							</view>
							<view class="ft flex">
								<view class="left">{{item.count}}双 | {{item.ks_count}}款式</view>
								<view class="right flex">
									<view class="time flex">
										<image class="pic1" src="/static/images/img/zu1525.png" mode=""></image>
										<text>{{item.ctime}}</text>
									</view>
									<view class="eye flex">
										<image class="pic2" src="/static/images/img/view.png" mode=""></image>
										<text>{{item.views}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<uni-load-more :status="tag.loadingType" :content-text="contentText" />
					<view class="edgeInsetBottom"></view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				tabCurrentIndex: 0,
				navList: [{
						state: -1,
						text: '全部',
						loadingType: 'more',
						current_page: 1,
						orderList: []
					},
					{
						state: 0,
						text: '接单中',
						loadingType: 'more',
						current_page: 1,
						orderList: []
					},
					{
						state: 4,
						text: '已关闭',
						loadingType: 'more',
						current_page: 1,
						orderList: []
					},
					{
						state: 1,
						text: '待确认',
						loadingType: 'more',
						current_page: 1,
						orderList: []
					},
					{
						state: 2,
						text: '合作中',
						loadingType: 'more',
						current_page: 1,
						orderList: []
					}, {
						state: 3,
						text: '已完成',
						loadingType: 'more',
						current_page: 1,
						orderList: []
					}
				],
				contentText: {
					contentdown: ' ',
					contentrefresh: '正在加载...',
					contentnomore: ''
				}
			};
		},
		onLoad(options) {
			if (!options.state) {
				options.state = 0;
			}
			this.tabCurrentIndex = +options.state;
			// #ifndef MP
			// this.loadData();
			// #endif
			// #ifdef MP
			// if (options.state == 0) {
			// 	this.loadData();
			// }
			// #endif
		},
		onShow() {
			this.navList.forEach(ele=>{
				ele.current_page = 1;
				ele.loadingType = 'more';
				ele.orderList = [];
			})
			this.loadData();
		},
		methods: {
			//获取订单列表
			loadData(source) {
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				let state = navItem.state;
				//判断是否最后一页
				if (navItem.loadingType == 'noMore') {
					return;
				}
				//tab切换只有第一次需要加载数据
				// if (source === 'tabChange' && navItem.loaded === true) {
				// 	return;
				// }
				//防止重复加载
				if (navItem.loadingType === 'loading') {
					return;
				}
				navItem.loadingType = 'loading';
				// 获取列表
				this.$api.post({
					url: '/wanlshop/Jiedan/task_list',
					data: {
						status: state,
						page: navItem.current_page,
						limit: 10,
						private:1,
					},
					fail: err => {
						console.log(err)
						if (err.data.code == 0) {
							navItem.loadingType = 'noMore';
						}
					},
					success: res => {
						console.log(res)
						navItem.orderList = navItem.orderList.concat(res.data)
						console.log(navItem.orderList)
						if (res.count == navItem.orderList.length) {
							navItem.loadingType = 'noMore';
						} else {
							navItem.loadingType = 'more';
							navItem.current_page++
						}
						navItem.orderList.forEach(ele => {
							ele.myStatus = ele.status == 0 ? '接单中' : ele.status == 1 ? '待确认' : ele
								.status == 2 ? '合作中' : ele.status == 3 ? '已完成' : '已关闭';
							ele.myKuanshi = '';
							ele.kuanshi.forEach((item, i) => {
								if (i == ele.kuanshi.length - 1) {
									ele.myKuanshi += `${item}`
								} else {
									ele.myKuanshi += `${item} | `
								}
							})
						})
						//loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
						this.$set(navItem, 'loaded', true);
					}
				});
			},

			//swiper 切换
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
				this.loadData('tabChange');
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
			},
			//删除订单
			deleteOrder(order_id, key) {
				uni.showLoading({
					title: '请稍后'
				});
				this.$api.post({
					url: '/wanlshop/order/delOrder',
					data: {
						id: order_id
					},
					success: res => {
						this.navList[this.tabCurrentIndex].orderList.splice(key, 1);
						uni.hideLoading();
					}
				});
			},
			//取消订单- 设置为7 -全局
			cancelOrder(item) {
				uni.showLoading({
					title: '请稍后'
				});
				// 获取列表
				this.$api.post({
					url: '/wanlshop/order/cancelOrder',
					data: {
						id: item.id
					},
					success: res => {
						let {
							stateTip,
							stateTipColor
						} = this.orderStateExp(7);
						item = Object.assign(item, {
							state: 7,
							stateTip,
							stateTipColor
						});
						this.$store.commit('statistics/order', {
							pay: this.$store.state.statistics.order.pay - 1
						});
						// 取消订单后删除待付款中该项，并修改全部中的状态 1.0.2升级
						let list = this.navList[1].orderList;
						let index = list.findIndex(val => val.id === item.id);
						index !== -1 && list.splice(index, 1);
						// 删除后修改全部中的为7
						if (this.tabCurrentIndex == 1) {
							let list = this.navList[0].orderList;
							let index = list.findIndex(val => val.id === item.id);
							if (index !== -1) {
								list[index].state = 7;
							}
						}
						uni.hideLoading();
					}
				});
			},
			commentOrder(id) {
				this.$wanlshop.to('/pages/user/order/comment?order_id=' + id);
			},
			toRenwuxiangqin(item) {
				console.log(item)
				if (item.private == 0) {
					uni.navigateTo({
						url: `/pages/user/changjia/renwuxiangqin?id=${item.id}`
					})
				} else if (item.private == 1) {
					uni.navigateTo({
						url: `/pages/user/caigoushang/renwuxiangqin?id=${item.id}`
					})
				}

			},
			//支付订单
			paymentOrder(id) {
				this.$wanlshop.to('/pages/user/money/pay?order_id=' + id);
			},
			//确认收货- 全局
			confirmOrder(item) {
				uni.showModal({
					title: '温馨提示',
					content: '确认收货后，钱款将自动打入厂家账户。',
					success: (res) => {
						if (res.confirm) {
							uni.showLoading({
								title: '请稍后'
							});
							// 获取列表
							this.$api.post({
								url: '/wanlshop/order/confirmOrder',
								data: {
									id: item.id
								},
								success: res => {
									let {
										stateTip,
										stateTipColor
									} = this.orderStateExp(4);
									item = Object.assign(item, {
										state: 4,
										stateTip,
										stateTipColor
									});
									this.$store.commit('statistics/order', {
										receiving: this.$store.state.statistics.order
											.receiving - 1,
										evaluate: this.$store.state.statistics.order
											.evaluate + 1
									});
									uni.hideLoading();
								},
								fail: (err) => {
									uni.hideLoading();
								}
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//订单状态文字和颜色
			orderStateExp(state) {
				let stateTip = '',
					stateTipColor = '#ff5000';
				switch (+state) {
					case 1:
						stateTip = '等待支付';
						break;
					case 2:
						stateTip = '等待卖家发货';
						break;
					case 3:
						stateTip = '卖家已发货';
						break;
					case 4:
						stateTip = '交易成功';
						break;
					case 5:
						stateTip = '交易成功';
						break;
					case 6:
						stateTip = '已完成';
						break;
					case 7:
						stateTip = '订单已关闭';
						stateTipColor = '#909399';
						break;
						//更多自定义
				}
				return {
					stateTip,
					stateTipColor
				};
			},
			getRefund(status) {
				return ["退款", "退款中", "待退货", "退款完成", "退款关闭", "退款被拒"][status];
			},
			// 修改地址
			editAddress(id) {
				this.$wanlshop.to('/pages/user/address/address?source=2&order_id=' + id);
			},
			//添加或修改成功之后回调
			async refreshList(address_id, order_id) {
				uni.showLoading({
					title: '正在提交新地址'
				});
				// 获取列表
				this.$api.post({
					url: '/wanlshop/order/editOrderAddress',
					data: {
						id: order_id,
						address_id: address_id
					},
					success: res => {
						this.$wanlshop.msg('地址修改成功');
						uni.hideLoading();
					}
				});
			}
		}
	};
</script>

<style>
	page {
		background: #f8f8f8;
		height: 100%;
	}
</style>

<style lang="scss" scoped>
	.items {
		padding: 0 24rpx;

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
</style>
