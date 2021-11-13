<template>
	<view class="index">
		<view class="nav1">
			<view class="tit1">订单状态</view>
			<!-- 1.待支付全款 -->
			<view class="tit2">待支付全款</view>
			<!-- 2.待支付预付款 -->
			<!-- <view class="tit2">待支付预付款</view> -->
			<!-- 3.待支付尾款 -->
			<!-- <view class="tit2">待支付尾款</view> -->
			<!-- 待发货 -->
			<!-- <view class="tit2">待发货</view> -->
			<!-- 待收货 -->
			<!-- <view class="tit2">待收货</view> -->
			<!-- 已完成 -->
			<!-- <view class="tit2">已完成</view> -->
			<!-- 已取消 -->
			<!-- <view class="tit2">已取消</view> -->
		</view>
		<view class="nav7 nav3 nav2">
			<!-- <view class="tit2">物流信息</view> -->
			<view class="cu-item" @tap="onLogistics(orderData.id)" v-if="orderData.state != 7 && orderData.state != 1 && orderData.state != 2 && logisticsType">
				<view class="cu-avatar round wanl-bg-blue"><text class="wlIcon-yunshuzhong"></text></view>
				<view class="content">
					<view>
						<text class="text-cut-2 text-sm wanl-pip">{{orderData.logistics.status}} - {{orderData.logistics.context}}</text>
					</view>
					<view class="wanl-gray">
						<text class="text-sm">{{orderData.logistics.time}}</text>
					</view>
				</view>
				<view class="action">
					<text class="wlIcon-fanhui2 wanl-gray"></text>
				</view>
			</view>
		</view>
		<view class="nav7 nav3 nav2">
			<!-- 4.5.6待发货 -->
			<!-- <view class="tit2">收货信息</view>
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
				</view> -->
		</view>
		
		
		<view class="nav2">
			<view class="tit2">任务信息</view>
			<view class="list">
				<view class="hd flex">
					<view class="stit">{{obj.renwu.name}}</view>
				</view>
				<view class="desc">{{obj.renwu.myKuanshi}}</view>
				<view class="bd flex">
					<view class="left">
						<text class="money">¥{{obj.renwu.count_money}}</text>
					</view>
				</view>
				<view class="ft flex">
					<view class="left">{{obj.renwu.count}}双 | {{obj.renwu.kuanshi_count}}款式</view>
					<view class="right flex">
						<view @click="seeXiangqin(obj.id)" class="seeXQ">查看详情</view>
					</view>
				</view>
			</view>
		</view>
		<view class="nav3 nav2">
			<view class="tit2">接单信息</view>
			<view class="nav-3">
				<view class="tit-3">
					<view class="txt-3-1">厂家名称</view>
					<view class="txt-3-2">温州AAA鞋厂</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">厂家地址</view>
					<view class="txt-3-2">浙江省温州市鹿城区某某路11号</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">联系人</view>
					<view class="txt-3-2">王先生</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">联系电话</view>
					<view class="txt-3-2 yellow">17777777777</view>
				</view>
			</view>
		</view>
		<view class="nav4 nav3 nav2">
			<view class="tit2">付款信息</view>
			<view class="nav-3">
				<!-- 全额 -->
				<!-- 				<view class="tit-3">
					<view class="txt-3-1">付款方式</view>
					<view class="txt-3-2">全额支付</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">待支付</view>
					<view class="txt-3-2 yellow">¥8000.00(待支付)</view>
				</view> -->
				<!-- 预付款 -->
				<!-- 				<view class="tit-3">
					<view class="txt-3-1">付款方式</view>
					<view class="txt-3-2">预付款+尾款支付</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">待支付</view>
					<view class="txt-3-2 yellow">¥800.00(待支付)</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">尾款</view>
					<view class="txt-3-2 yellow">¥7200.00</view>
				</view> -->
				<!-- 尾款 -->
				<view class="tit-3">
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
				</view>
			</view>
		</view>
		<view class="nav5 nav3 nav2">
			<view class="tit2">订单信息</view>
			<view class="nav-3">
				<view class="tit-3">
					<view class="txt-3-1">订单编号</view>
					<view class="txt-3-2">20219164677981</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">确认时间</view>
					<view class="txt-3-2">2021-9-16 13:53:04</view>
				</view>
			</view>
		</view>
		<!-- 订单信息 -->
		<view class="nav5 nav3 nav2">
			<view class="tit2">订单信息</view>
			<view class="nav-3">
				<view class="tit-3">
					<view class="txt-3-1">订单编号</view>
					<view class="txt-3-2">20219164677981</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">第三方交易号</view>
					<view class="txt-3-2">467798146779812021916(预付款)</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">第三方交易号</view>
					<view class="txt-3-2">467798146779812021916(尾款)</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">确认时间</view>
					<view class="txt-3-2">2021-9-16 13:53:04</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">付款时间</view>
					<view class="txt-3-2">2021-9-16 13:53:04(预付款)</view>
				</view>
				<view class="tit-3">
					<view class="txt-3-1">付款时间</view>
					<view class="txt-3-2">2021-9-16 13:53:04(尾款)</view>
				</view>
			</view>
		</view>
		<!-- 1.2.3.5.6 -->
		<view class="footer">
			<view class="btn3">联系采购商</view>
		</view>
		<!-- 4.待发货 -->
		<view class="footer">
			<view class="btn1">联系采购商</view>
			<view class='btn2 isHaveDD'>发货</view>
		</view>
		<!-- 7.已取消 -->
		<view class="footer">
			<view class="btn3">删除订单</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				id:'',
				obj:{},
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
			// this.loadData({id:option.id});
			this.id = option.id;
			this.getData()
		},
		methods: {
			addAddress(type) {
				this.$wanlshop.to(`/pages/user/address/addressManage?type=${type}`);
			},
			userAddress() {
				this.$wanlshop.to('/pages/user/address/address?source=1');
			},
			getData(){
				uni.request({
					url: `${this.$url}/wanlshop/Jiedan/pay_view`,
					data: {
						id: this.id,
					},
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						console.log(res.data)
						if(res.data.code == 0){
							this.$wanlshop.msg(res.data.msg);
							setTimeout(()=>{
								uni.navigateBack({
								delta:1
							})
							},2000)
						}
						this.obj = res.data.data;
						this.obj.renwu.myKuanshi = '';
						this.obj.renwu.kuanshi.forEach((item,i)=>{
							console.log(item)
							if(i == this.obj.renwu.kuanshi.length - 1){
								this.obj.renwu.myKuanshi += `${item}`
							}else{
								this.obj.renwu.myKuanshi += `${item} | `
							}
						})
					}
				})
			},
			async loadData(data) {
				this.$api.get({
					url: '/wanlshop/order/getOrderInfo',
					data: data,
					success: res => {
						this.orderData = res;
						this.logisticsType = true;
						if(res.state == 0){
							this.orderData.statetime = '剩余时间0';
						}else if(res.state == 1){
							var diff = (res.createtime + res.config.cancel * 86400) - Date.parse(new Date()) / 1000;
							var days = Math.floor(diff / 86400);
							var hours = Math.floor(diff % 86400 / 3600); 
							var minutes = Math.floor(diff % 86400 % 3600 / 60);
							if (minutes > 0) {
								this.orderData.statetime = '还剩' +minutes+ '分自动关闭订单';
							}
							if (hours > 0) {
								this.orderData.statetime = '还剩' +hours+ '天' +minutes+ '分自动关闭订单';
							}
							if (days > 0) {
								this.orderData.statetime = '还剩' +days+ '天' +hours+ '小时' +minutes+ '分自动关闭订单';
							}
						}else if(res.state == 2){
							this.orderData.statetime = '等待卖家发货';
						}else if(res.state == 3){
							var diff = (res.delivertime + res.config.receiving * 86400) - Date.parse(new Date()) / 1000;
							var days = Math.floor(diff / 86400);
							var hours = Math.floor(diff % 86400 / 3600); 
							var minutes = Math.floor(diff % 86400 % 3600 / 60);
							if (minutes > 0) {
								this.orderData.statetime = '还剩' +minutes+ '分自动确认收货';
							}
							if (hours > 0) {
								this.orderData.statetime = '还剩' +hours+ '天' +minutes+ '分自动确认收货';
							}
							if (days > 0) {
								this.orderData.statetime = '还剩' +days+ '天' +hours+ '小时' +minutes+ '分自动确认收货';
							}
						}else if(res.state == 4){
							var diff = (res.taketime + res.config.comment * 86400) - Date.parse(new Date()) / 1000;
							var days = Math.floor(diff / 86400);
							var hours = Math.floor(diff % 86400 / 3600); 
							var minutes = Math.floor(diff % 86400 % 3600 / 60);
							if (minutes > 0) {
								this.orderData.statetime = '还剩' +minutes+ '分自动评论';
							}
							if (hours > 0) {
								this.orderData.statetime = '还剩' +hours+ '天' +minutes+ '分自动评论';
							}
							if (days > 0) {
								this.orderData.statetime = '还剩' +days+ '天' +hours+ '小时' +minutes+ '分自动评论';
							}
						}else if(res.state == 6){	
							this.orderData.statetime = res.dealtime_text;
						}else if(res.state == 7){	
							this.orderData.statetime = '订单已取消';
						}
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
	.nav7{
		.margin-bj{
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
