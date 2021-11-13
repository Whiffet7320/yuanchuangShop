<template>
	<view class="container">
		<view class="category">
			<scroll-view class="scrollbox" :scroll-x="true" :scroll-with-animation="true" :scroll-into-view="scroll_category_index">
				<view class="item" :class="category_index == -1 ? 'current' : ''" id="category_index_-1" @click="categoryChange(0,-1)">
					<view class="text">
						<text>全部</text>
					</view>
				</view>
				<block v-for="(item,index) in common.modulesData.categoryModules" :key="item.id">
				<view class="item" v-for="(categoryData, index) in item.childlist" :key="index" :class="category_index == index ? 'current' : ''" :id="'category_index_' + index" @click="categoryChange(categoryData.id,index)">
					<view class="text">
						<text>{{ categoryData.name }}</text>
					</view>
				</view>
				</block>
			</scroll-view>
		</view>
		<block v-if="goodsData.length == 0">
			<wanl-empty :text="empty"/>
		</block>
		<block v-else>
			<wanl-product :dataList="goodsData" :dataStyle="liststyle" />
		</block>
		<uni-load-more :status="status" :content-text="contentText" />
		<view class="edgeInsetBottom"></view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default{
		data(){
			return{
				category_id: 0,
				category_index: -1,
				scroll_category_index: 'scroll_category_index_-1',
				liststyle: 'col-2-20', //列表样式
				empty: '没有找到任何宝贝',
				goodsData:[], //商品列表数据
				reload: false, //判断是否上拉
				page:1,
				last_page: 0,
				status: 'loading',
				contentText: {
					contentdown: '',
					contentrefresh: '正在加载..',
					contentnomore: '没有更多数据了'
				}
			}
		},
		computed: {
			...mapState(['common'])
		},
		methods:{
			//异步加载商品列表
			async loadData() {
				this.$api.get({
					url: '/wanlshop/product/xianhuo',
					data:{
						category:this.category_id
					},
					success: res => {
						uni.stopPullDownRefresh();
						this.status = 'more';
						this.goodsData = this.reload ? res.data : this.goodsData.concat(res.data); //数据 追加
						this.page = res.current_page; //当前页码
						this.last_page = res.last_page; //总页码
					}
				});
			},
			categoryChange(id,index) {
				this.category_id = id;
				this.category_index = index;
				var nextIndex = index - 1;
				nextIndex = nextIndex <= 0 ? -1 : nextIndex;
				this.scroll_category_index = `category_index_${nextIndex}`; //动画滚动,滚动至中心位置
				this.goodsData = [];
				this.loadData();
			}
		},
		onLoad(option){
			this.loadData();
		},
		// 监听上拉
		onPullDownRefresh() {
			this.page = 1;
			this.reload = true;
			this.loadData();
		},
		// 下拉刷新
		onReachBottom() {
			if (this.page >= this.last_page) {
				this.status = 'noMore';
			} else {
				this.reload = false;
				this.contentText.contentdown = '上拉显示更多';
				this.page = this.page + 1; //页码+1
				this.status = 'loading';
				this.loadData();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.category {
		display: flex;
		align-items: center;
		width: 100%;
		padding-left: 38rpx;
		height: 80rpx;
		position: relative;
		white-space: nowrap;
		background-color: #ffffff;
		.item {
			position: relative;
			display: inline-block;
			height: 80rpx;
			line-height: 80rpx;
			margin-right: 60rpx;
			&::after {
				content: "";
				width: 0;
				height: 6rpx;
				position: absolute;
				left: 0;
				bottom: 0;
				transition: 0.3s;
			}
			.text {
				font-size: 28rpx;
				color: #8d8d8d;
			}
		}
		.current {
			&::after {
				width: 100%;
				background: #fb6729;
			}
			.text {
				color: #333333;
			}
		}
	}
</style>
