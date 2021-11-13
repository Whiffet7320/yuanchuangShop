<template>
	<view>
		<view class="edgeInsetTop"></view>
		<view class="search_wrap">
			<view class="searchbox">
				<text class="wlIcon-sousuo1 icon"></text>
				<input type="text" v-model="searchKeywords" class="ipt" confirm-type="search" placeholder-style="color: #999" placeholder="搜索店铺" @confirm="onSearchInputConfirmed" />
			</view>
		</view>
		<view class="gap"></view>
		<view v-if="isData" class="cu-list menu-avatar">
			<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in dataList" :key="index" @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
				<view class="cu-avatar round lg" :style="[{backgroundImage:'url('+ $wanlshop.oss(item.avatar, 52, 52) +')'}]" @tap="onShop(item.id)"></view>
				<view class="content" @tap="onShop(item.id)">
					<view v-if="item.isself == 1">
						<text class="cu-tag radius wanl-bg-redorange margin-right-xs">自营</text>
						{{item.shopname}}
					</view>
					<view v-else>
						<text class="cu-tag radius bg-gray margin-right-xs" v-if="item.state == 0">个人</text>
						<text class="cu-tag radius wanl-bg-blue margin-right-xs" v-if="item.state == 1">企业</text>
						<text class="cu-tag radius wanl-bg-orange margin-right-xs" v-if="item.state == 2">旗舰</text>
						{{item.shopname}}
					</view>
					<view class="text-gray text-sm">{{item.city}}</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">粉丝:{{$wanlshop.toFormat(item.like, 'hundred')}}</view>
				</view>
				<view class="move">
					<view class="bg-orange" @tap="onShop(item.id)">查看</view>
				</view>
			</view>
		</view>
		<wanl-empty text="暂无数据" src="follow_default3x" v-else></wanl-empty>
		<uni-load-more :status="status" :content-text="contentText" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchKeywords:"",
				dataList: [],
				isData: true, //判断是否存在数据
				reload: false, //判断是否上拉
				total: 0, //数据量
				current_page: 1, //当前页码
				last_page: 1, //总页码
				status: 'loading',
				contentText: {
					contentdown: ' ',
					contentrefresh: '加载中',
					contentnomore: ''
				},
				// 侧滑
				modalName: null,
				listTouchStart: 0,
				listTouchDirection: null
			}
		},
		onLoad() {
			this.loadData();
		},
		onPullDownRefresh() {
			this.current_page = 1;
			this.reload = true;
			this.loadData();
		},
		onReachBottom() {
			//判断是否最后一页
			if (this.current_page >= this.last_page) {
				this.status = 'noMore';
			} else {
				this.reload = false;
				this.current_page = this.current_page + 1; //页码+1
				this.status = 'loading';
				this.loadData();
			}
		},
		methods: {
			async loadData() {
				this.$api.post({
					url: '/wanlshop/shop/shopList',
					data: {
						page: this.current_page,
						keyword:this.searchKeywords
					},
					success: res => {
						uni.stopPullDownRefresh();
						this.dataList = this.reload ? res.data : this.dataList.concat(res.data); //评论数据 追加
						this.isData = this.dataList.length == 0 ? false : true; //判断是否存在数据
						this.total = res.total; //数据量
						this.current_page = res.current_page; //当前页码
						this.last_page = res.last_page; //总页码
						this.status = res.total == 0 ? 'noMore':'more';
					}
				});
			},
			onSearchInputConfirmed(event) {
				let value = event.detail.value;
				this.searchKeywords = value;
				uni.hideKeyboard();
				this.current_page = 1;
				this.reload = true;
				this.loadData();
			},
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},
			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cu-tag{
		padding: 0 8rpx;
		height: 36rpx;
	}
	.search_wrap{
		width: 100%;
		background-color: #ffffff;
		padding:40rpx 24rpx;
		margin-bottom: 2rpx;
		position: fixed;
		top:0;
		left:0;
		z-index: 999;
	}
	.searchbox{
		background-color: #f6f6f6;
		width: 100%;
		height: 70rpx;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		.icon{
			margin:0 20rpx;
		}
		.ipt{
			font-size: 24rpx;
			color:#666666;
		}
	}
	.gap{
		/* #ifndef H5 */
		width: 100%;
		height: 152rpx;
		/* #endif */
		/* #ifdef H5 */
		width: 100%;
		height: 64rpx;
		/* #endif */
	}
</style>
