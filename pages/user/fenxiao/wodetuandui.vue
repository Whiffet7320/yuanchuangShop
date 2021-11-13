<template>
	<view class="wanl-order-list">
		<view class="nav1">
			<view class="txt1">我的邀请人</view>
			<view class="n1-right">
				<!-- <image src="/static/images/bank/ABC.png" class="pic1-1" mode=""></image> -->
				<view class="n1-txt">{{myYaoqinren.nickname?myYaoqinren.nickname:''}} {{myYaoqinren.mobile?myYaoqinren.mobile:''}}</view>
			</view>
		</view>
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
					<wanl-empty text="没有找到任何成员" v-if="tag.loaded === true && tag.orderList.length === 0" />
					<!-- 任务列表 -->
					<view class="items">
						<view class="item" v-for="item in tag.orderList">
							<!-- <image class="item-pic1" src="/static/images/bank/ABC.png" mode=""></image> -->
							<view class="item-r">
								<view class="ir-txt1">{{item.nickname}}</view>
								<view class="ir-txt2">{{item.jointime}}加入 | 下级成员：{{item.yiji}}人</view>
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
						state: 0,
						text: '已邀请成员(0)',
						loadingType: 'more',
						current_page: 1,
						orderList: []
					},
					{
						state: 1,
						text: '二级成员(0)',
						loadingType: 'more',
						current_page: 1,
						orderList: []
					},
				],
				contentText: {
					contentdown: ' ',
					contentrefresh: '正在加载...',
					contentnomore: ''
				},
				myYaoqinren:'',
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
			this.getData();
			this.loadData()
		},
		methods: {
			getData(){
				uni.request({
					url: `${this.$url}/wanlshop/Fenxiao/i_team`,
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						console.log(res.data)
						this.myYaoqinren = res.data.data.data;
					}
				})
			},
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
				// if(this.tabCurrentIndex == 0){
					uni.request({
						url: `${this.$url}/wanlshop/Fenxiao/i_team_yiji`,
						method: 'POST',
						header: {
							'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
						},
						data:{
							page: this.navList[0].current_page,
							limit: 10,
						},
						success: res => {
							this.navList[0].text = `已邀请成员(${res.data.data.count})`
							this.navList[0].orderList = this.navList[0].orderList.concat(res.data.data.data)
							console.log(this.navList[0].orderList)
							if (res.count == this.navList[0].orderList.length) {
								this.navList[0].loadingType = 'noMore';
							} else {
								this.navList[0].loadingType = 'more';
								this.navList[0].current_page++
							}
						},
						fail: err => {
							console.log(err)
							if (err.data.code == 0) {
								this.navList[0].loadingType = 'noMore';
							}
						},
					})
				// }else if(this.tabCurrentIndex == 1){
					uni.request({
						url: `${this.$url}/wanlshop/Fenxiao/i_team_erji`,
						method: 'POST',
						header: {
							'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
						},
						data:{
							page: this.navList[1].current_page,
							limit: 10,
						},
						success: res => {
							console.log(res.data)
							this.navList[1].text = `二级成员(${res.data.data.count})`
							this.navList[1].orderList = this.navList[1].orderList.concat(res.data.data.data)
							console.log(this.navList[1].orderList)
							if (res.count == this.navList[1].orderList.length) {
								this.navList[1].loadingType = 'noMore';
							} else {
								this.navList[1].loadingType = 'more';
								this.navList[1].current_page++
							}
						},
						fail: err => {
							console.log(err)
							if (err.data.code == 0) {
								this.navList[1].loadingType = 'noMore';
							}
						},
					})
				// }
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
	.index {}

	.nav1 {
		background: #ffffff;
		border-radius: 10rpx;
		box-shadow: 0rpx 8rpx 12rpx 0rpx rgba(244, 244, 244, 0.50);
		height: 82rpx;
		margin: 0 24rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;

		.txt1 {
			font-size: 24rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			text-align: left;
			color: #2e2e2e;
		}

		.n1-right {
			display: flex;
			align-items: center;

			.pic1-1 {
				width: 38rpx;
				height: 38rpx;
				border-radius: 50%;
			}

			.n1-txt {
				font-size: 24rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				color: #2e2e2e;
				margin-left: 10rpx;
			}
		}
	}
	.navbar{
		margin-top: 30rpx;
		margin-bottom: 10rpx;
	}
	.btns{
		display: flex;
		align-items: center;
	}
	.items {
		padding: 0 24rpx;
		.item{
			margin: 16rpx 0;
			width: 702rpx;
			height: 122rpx;
			background: #ffffff;
			border-radius: 10rpx;
			box-shadow: 0rpx 8rpx 12rpx 0rpx rgba(244,244,244,0.50); 
			display: flex;
			align-items: center;
			padding: 0 24rpx;
			.item-pic1{
				width: 74rpx;
				height: 74rpx;
				border-radius: 50%;
				margin-right: 16rpx;
			}
			.item-r{
				display: flex;
				flex-direction: column;
				.ir-txt1{
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Bold;
					font-weight: 700;
					color: #2e2e2e;
				}
				.ir-txt2{
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #98999c;
				}
			}
		}
	}
</style>
