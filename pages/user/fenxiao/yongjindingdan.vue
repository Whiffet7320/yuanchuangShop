<template>
	<view class="wanl-order-list">
		<view class="navbar">
			<view class="nav-item text-df" v-for="(item, index) in navList" :key="item.state"
				:class="{ current: tabCurrentIndex === index }" @tap="tabClick(index)">
				{{ item.text }}
			</view>
		</view>
<!-- 		<view class="btns">
			<view @click="btnClick(0)" :class='{"btn":true,"no":btnIndex==0}'>全部</view>
			<view @click="btnClick(1)" :class='{"btn":true,"no":btnIndex==1}'>待付款</view>
			<view @click="btnClick(2)" :class='{"btn":true,"no":btnIndex==2}'>已付款</view>
			<view @click="btnClick(3)" :class='{"btn":true,"no":btnIndex==3}'>已完成</view>
			<view @click="btnClick(4)" :class='{"btn":true,"no":btnIndex==4}'>无效</view>
		</view> -->
		<swiper :current="tabCurrentIndex" style="height: calc(100% - 80rpx)" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tag, key) in navList" :key="tag.state">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData">
					<view class="btns">
						<view @click="btnClick(0)" :class='{"btn":true,"no":btnIndex==0}'>全部</view>
						<view @click="btnClick(1)" :class='{"btn":true,"no":btnIndex==1}'>待付款</view>
						<view @click="btnClick(2)" :class='{"btn":true,"no":btnIndex==2}'>已付款</view>
						<view @click="btnClick(3)" :class='{"btn":true,"no":btnIndex==3}'>已完成</view>
						<view @click="btnClick(4)" :class='{"btn":true,"no":btnIndex==4}'>无效</view>
					</view>
					<!-- 空白页 -->
					<wanl-empty text="没有找到任何成员" v-if="tag.loaded === true && tag.orderList.length === 0" />
					<!-- 任务列表 -->
					<view class="items">
						<view class="item" v-for="(item,i) in tag.orderList" :key='i'>
							<!-- 待付款 -->
							<template v-if="item.state == 1">
								<view class="tit1">
									<view class="txt1-1">[{{item.level == 1?'一级' : '二级'}}]佣金订单{{item.order_no}}</view>
									<view class="txt1-2 dfk">订单待付款</view>
								</view>
								<view class="tit2">
									<view class="txt2-1">下单时间：{{item.createtime}}</view>
									<view class="txt2-2">完成时间：-</view>
								</view>
								<view class="tit3">
									<view class="tit3-l">
										<view class="txt3-1">预计佣金</view>
										<view class="txt3-2">待结算</view>
									</view>
									<view class="tit3-r">{{item.yongjin}}</view>
								</view>
							</template>
							<!-- 已付款 -->
							<template v-if="item.state == 2">
								<view class="tit1">
									<view class="txt1-1">[{{item.level == 1?'一级' : '二级'}}]佣金订单{{item.order_no}}</view>
									<view class="txt1-2 yfk">订单已付款</view>
								</view>
								<view class="tit2">
									<view class="txt2-1">下单时间：{{item.createtime}}</view>
									<view class="txt2-2">完成时间：-</view>
								</view>
								<view class="tit3">
									<view class="tit3-l">
										<view class="txt3-1">预计佣金</view>
										<view class="txt3-2 wx" v-if="item.order_status == 1">无效</view>
										<view class="txt3-2" v-if="item.order_status == 2">待结算</view>
										<view class="txt3-2 ydz" v-if="item.order_status == 3">已到账</view>
									</view>
									<view class="tit3-r">{{item.yongjin}}</view>
								</view>
							</template>
							<!-- 已完成 -->
							<template v-if="item.state == 6 || item.state == 4">
								<view class="tit1">
									<view class="txt1-1">[{{item.level == 1?'一级' : '二级'}}]佣金订单{{item.order_no}}</view>
									<view class="txt1-2 ywc">订单已完成</view>
								</view>
								<view class="tit2">
									<view class="txt2-1">下单时间：{{item.createtime}}</view>
									<view class="txt2-2">完成时间：-</view>
								</view>
								<view class="tit3">
									<view class="tit3-l">
										<view class="txt3-1">预计佣金</view>
										<view class="txt3-2 wx" v-if="item.order_status == 1">无效</view>
										<view class="txt3-2" v-if="item.order_status == 2">待结算</view>
										<view class="txt3-2 ydz" v-if="item.order_status == 3">已到账</view>
									</view>
									<view class="tit3-r">{{item.yongjin}}</view>
								</view>
							</template>
							<!-- 已退款 -->
							<!-- <template v-if="item.state == 7">
								<view class="tit1">
									<view class="txt1-1">[{{item.level == 1?'一级' : '二级'}}]佣金订单{{item.order_no}}</view>
									<view class="txt1-2 ytk">订单已退款</view>
								</view>
								<view class="tit2">
									<view class="txt2-1">下单时间：{{item.createtime}}</view>
									<view class="txt2-2">完成时间：-</view>
								</view>
								<view class="tit3">
									<view class="tit3-l">
										<view class="txt3-1">预计佣金</view>
										<view class="txt3-2 wx">无效</view>
									</view>
									<view class="tit3-r">{{item.yongjin}}</view>
								</view>
							</template> -->
							<!-- 已取消 -->
							<template  v-if="item.state == 7">
								<view class="tit1">
									<view class="txt1-1">[{{item.level == 1?'一级' : '二级'}}]佣金订单{{item.order_no}}</view>
									<view class="txt1-2 ytk">订单已取消</view>
								</view>
								<view class="tit2">
									<view class="txt2-1">下单时间：{{item.createtime}}</view>
									<view class="txt2-2">完成时间：-</view>
								</view>
								<view class="tit3">
									<view class="tit3-l">
										<view class="txt3-1">预计佣金</view>
										<view class="txt3-2 wx" v-if="item.order_status == 1">无效</view>
										<view class="txt3-2" v-if="item.order_status == 2">待结算</view>
										<view class="txt3-2 ydz" v-if="item.order_status == 3">已到账</view>
									</view>
									<view class="tit3-r">{{item.yongjin}}</view>
								</view>
							</template>
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
	export default{
		data() {
			return {
				btnIndex:'0',
				// 
				tabCurrentIndex: 0,
				navList: [{
						state: 0,
						text: '全部订单',
						loadingType: 'more',
						current_page: 1,
						orderList: []
					},
					{
						state: 1,
						text: '一级佣金订单',
						loadingType: 'more',
						current_page: 1,
						orderList: []
					},
					{
						state: 2,
						text: '二级佣金订单',
						loadingType: 'more',
						current_page: 1,
						orderList: []
					},
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
			if (options.state == 0) {
				// this.loadData();
			}
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
		methods:{
			//获取订单列表
			loadData(source) {
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				let state = navItem.state;
				//判断是否最后一页
				// if (navItem.loadingType == 'noMore') {
				// 	return;
				// }
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
					url: '/wanlshop/Fenxiao/order',
					data: {
						type:state,
						state: this.btnIndex,
						page: navItem.current_page,
						limit: 10,
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
						// navItem.orderList.forEach(ele => {
						// 	ele.myStatus = ele.status == 0 ? '未接单' : ele.status == 1 ? '已接单' : ele
						// 		.status == 2 ? '合作中' : ele.status == 3 ? '交易完成' : '任务关闭';
						// 	ele.myKuanshi = '';
						// 	ele.kuanshi.forEach((item, i) => {
						// 		if (i == ele.kuanshi.length - 1) {
						// 			ele.myKuanshi += `${item}`
						// 		} else {
						// 			ele.myKuanshi += `${item} | `
						// 		}
						// 	})
						// })
						//loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
						// this.$set(navItem, 'loaded', true);
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
			btnClick(i){
				this.btnIndex = i;
				this.navList.forEach(ele=>{
					ele.current_page = 1;
					ele.loadingType = 'more';
					ele.orderList = [];
				})
				this.loadData();
			},
		}
	}
</script>

<style>
	page {
		background: #f8f8f8;
		height: 100%;
	}
</style>

<style lang="scss" scoped>
	.wanl-order-list {
		padding: 0 32rpx;
	}
	.navbar{
		margin-top: 30rpx;
		margin-bottom: 10rpx;
	}
	.btns{
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.btn.no{
			width: 128rpx;
			height: 54rpx;
			background: #ffffff;
			border: 2rpx solid #fb6729;
			border-radius: 30rpx;
			font-size: 24rpx;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			text-align: center;
			line-height: 54rpx;
			color: #fb6729;
		}
		.btn{
			border: none;
			width: 128rpx;
			height: 54rpx;
			background: #e9e9e9;
			border-radius: 28rpx;
			font-size: 24rpx;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			text-align: center;
			line-height: 54rpx;
			color: #999999;
		}
	}
	.items{
		margin-top: 24rpx;
		.item{
			margin-bottom: 16rpx;
			width: 702rpx;
			height: 222rpx;
			background: #ffffff;
			border-radius: 10rpx;
			padding: 0 40rpx ;
			.tit1{
				padding-top: 30rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.txt1-1{
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #2e2e2e;
				}
				.txt1-2{
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					text-align: right;
				}
				.txt1-2.dfk{
					color: #fb6729;
				}
				.txt1-2.yfk{
					color: #3990E8;
				}
				.txt1-2.ywc{
					color: #18BC4F;
				}
				.txt1-2.ytk{
					color: #999999;
				}
			}
			.tit2{
				display: flex;
				align-items: center;
				margin-top: 12rpx;
				.txt2-1{
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #98999c;
				}
				.txt2-2{
					margin-left: 22rpx;
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #98999c;
				}
			}
			.tit3{
				margin-top: 48rpx;
				display: flex;
				justify-content: space-between;
				.tit3-l{
					display: flex;
					align-items: center;
					.txt3-1{
						font-size: 28rpx;
						font-family: PingFang SC, PingFang SC-Regular;
						font-weight: 400;
						color: #2e2e2e;
					}
					.txt3-2{
						margin-left: 12rpx;
						width: 76rpx;
						height: 34rpx;
						background: #fb6729;
						border: 2rpx solid #fb6729;
						border-radius: 4rpx;
						font-size: 24rpx;
						font-family: PingFang SC, PingFang SC-Regular;
						font-weight: 400;
						text-align: center;
						line-height: 34rpx;
						color: #FFFFFF;
					}
					.txt3-2.ydz{
						background: #18bc4f;
						border: none;
					}
					.txt3-2.wx{
						background: #999999;
						border: none;
					}
				}
				.tit3-r{
					font-size: 32rpx;
					font-weight: 700;
					color: #2e2e2e;
				}
			}
		}
	}
</style>
