<template>
	<view class="home" :style="{
			backgroundColor : common.modulesData.homeModules.page ? common.modulesData.homeModules.page.style.pageBackgroundColor : '',
			backgroundSize : '100% auto',
			backgroundImage : 'url(' + $wanlshop.oss(common.modulesData.homeModules.page ? common.modulesData.homeModules.page.style.pageBackgroundImage : '', 414, 0, 1, 'transparent', 'png') + ')'
		}">
		<!-- 导航条 -->
		<view class="cu-custom">
			<view class="cu-bar fixed" :style="{
				height: wanlsys.height + 'px', 
				paddingTop: wanlsys.top + 'px',
				color: common.modulesData.homeModules.page ? (common.modulesData.homeModules.page.style.navigationBarTextStyle == '#ffffff'?'#ffffff':'#333333'):''
			}">
				<view class="cu-avatar round" @tap="userUser" v-if="user.isLogin"
					:style="{ backgroundImage: 'url(' + $wanlshop.oss(user.avatar, 32, 32, 2, 'avatar') + ')' }"></view>
				<view class="cu-avatar round" @tap="userAuth" v-else
					:style="{ backgroundImage: 'url(' + $wanlshop.oss(user.avatar, 32, 32, 2, 'avatar') + ')' }"></view>
				<view class="search-form round">
					<text class="wlIcon-sousuo1 text-bold"></text>
					<swiper class="search-swiper placeholder" vertical autoplay circular interval="3000">
						<swiper-item @tap="productSearch('')">搜索商品、类目</swiper-item>
						<swiper-item v-for="(item, index) in common.modulesData.searchModules" :key="item.keywords"
							@tap="productSearch(item.keywords)">
							{{ item.keywords }}
						</swiper-item>
					</swiper>
				</view>
				<!-- 背景 -->
				<view class="bar-bg" v-if="headerOpacity > 0" :style="{
					height: wanlsys.height + 'px', 
					opacity: headerOpacity,
					backgroundColor: common.modulesData.homeModules.page ? common.modulesData.homeModules.page.style.navigationBarBackgroundColor : '#f7f7f7',
					backgroundImage: 'url(' + $wanlshop.oss(common.modulesData.homeModules.page ? common.modulesData.homeModules.page.style.navigationBackgroundImage : '', 0, 50, 1, 'transparent', 'png') + ')'
				}"></view>
				<view class="action" @tap="scanCode">
					<text class="wlIcon-saoyisao text-white"></text>
				</view>
			</view>
		</view>
		<!-- 自定义首页 -->
		<view v-for="(item, index) in common.modulesData.homeModules.item" :key="index"
			v-if="common.modulesData.homeModules">
			<view v-if="item.type == 'banner'">
				<wanl-page-banner :pageData="item" />
			</view>
			<view v-if="item.type == 'image'">
				<wanl-page-image :pageData="item" />
			</view>
			<view v-if="item.type == 'advertBanner'">
				<wanl-page-advert-banner :pageData="item" :advertData="common.adData.pageAdverts" />
			</view>
			<view v-if="item.type == 'advertImage'">
				<wanl-page-advert-image :pageData="item" :advertData="common.adData.pageAdverts" />
			</view>
			<view v-if="item.type == 'video'">
				<wanl-page-video :pageData="item" />
			</view>
			<view v-if="item.type == 'menu'">
				<wanl-page-menu :pageData="item" />
			</view>
			<view v-if="item.type == 'notice'">
				<wanl-page-notice :pageData="item" />
			</view>
			<view v-if="item.type == 'article'">
				<wanl-page-article :pageData="item" />
			</view>
			<view v-if="item.type == 'headlines'">
				<wanl-page-headlines :pageData="item" />
			</view>
			<view v-if="item.type == 'search'">
				<wanl-page-search :pageData="item" />
			</view>
			<view v-if="item.type == 'activity'">
				<wanl-page-activity :pageData="item" />
			</view>
			<view v-if="item.type == 'categoryTitle'">
				<wanl-page-category-title :pageData="item" />
			</view>
			<view v-if="item.type == 'classify'">
				<wanl-page-classify :pageData="item" />
			</view>
			<view v-if="item.type == 'likes'">
				<wanl-page-likes :pageData="item" :list="likeData" />
			</view>
			<view v-if="item.type == 'goods'">
				<wanl-page-goods :pageData="item" />
			</view>
			<view v-if="item.type == 'bargain'">
				<wanl-page-bargain :pageData="item" />
			</view>
			<view class="myNavv" v-if="index == 4">
				<view class="nav1">
					<view class="tit1">最新订单</view>
					<view class="tit2" @click="toRenwudating">查看全部<image class="piccc1"
							src="/static/images/img/lujin.png" mode=""></image>
					</view>
				</view>
				<view class="navItems">
					<view @click="toRenwuxiangqin(item)" class="navItem" v-for="item in myNavData" :key='item.id'>
						<view class="left">
							<view class="txt1">{{item.name}}需求订单</view>
							<view class="txt2">{{item.ctime}}</view>
						</view>
						<image class="right" src="/static/images/img/lujin.png" mode=""></image>
					</view>
				</view>
			</view>
			<view v-if="item.type == 'seckill'">
				<wanl-page-seckill :pageData="item" />
			</view>
			<view v-if="item.type == 'empty'">
				<wanl-page-empty :pageData="item" />
			</view>
			<view v-if="item.type == 'division'">
				<wanl-page-division :pageData="item" />
			</view>
		</view>
		<view class="WANL-MODAL" @touchmove.stop.prevent="moveHandle">
			<view class="cu-modal" :class="update.update?'show':''">
				<view class="cu-dialog">
					<view class="hade">
						<image :src="$wanlshop.appstc('/common/update.png')" mode="aspectFit"></image>
						<view class="title">
							<view class="text-white text-bold5">{{update.data.title}}</view>
							<text class="text-white text-bold5">最新版本：{{update.data.versionName}}</text>
						</view>
					</view>

					<view class="info">
						<view class="text-lg text-bold5">
							<text>更新内容：</text>
						</view>
						<rich-text class="wanl-gray-dark" :nodes="update.data.content" />
						<!-- 开始下载 -->
						<view class="margin-top-xl" v-if="update.download.start">
							<view class="flex margin-bottom-sm">
								<view class="cu-progress round striped active">
									<view class="bg-orange" :style="{ width: update.download.progress + '%'}"></view>
								</view>
								<text class="margin-left-sm">{{update.download.progress}}%</text>
							</view>
							<view class="wanl-gray-dark text-sm text-center">
								<text>下载中，请稍等（{{$wanlshop.conver(update.download.totalBytesWritten)}}/{{$wanlshop.conver(update.download.totalBytesExpectedToWrite)}}）</text>
							</view>
						</view>
						<!-- 开始安装 -->
						<view class="margin-top-xl text-center" v-else-if="update.download.install">
							安装中...
						</view>
						<!-- 更新提示 -->
						<view class="flex justify-around margin-top-xl" v-else>
							<button class="cu-btn radius-bock bg-gray lg" @tap="ignore">忽略升级</button>
							<button class="cu-btn radius-bock bg-blue lg" @tap="download">立刻升级</button>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- #ifdef APP-PLUS -->
		<!-- #endif -->
		<uni-load-more :status="status" :content-text="contentText" />
		<view class="edgeInsetBottom" style="background: #f7f7f7;"></view>
	</view>
</template>
<script>
	import {
		mapState,
		mapActions
	} from 'vuex';
	export default {
		computed: {
			...mapState(['user', 'common', 'update'])
		},
		data() {
			return {
				myNavData: [],
				headerOpacity: 0,
				wanlsys: this.$wanlshop.wanlsys(),
				// 上拉刷新
				reload: true,
				likeData: [],
				current_page: 1, //当前页码
				last_page: 1, //总页码
				status: 'loading',
				contentText: {
					contentdown: ' ',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				}
			};
		},
		onLoad() {
			this.loadlikeData();
		},
		onShow() {
			this.myupdate();
			console.log(this.myupdate)
			this.getMyData()
			setTimeout(() => {
				uni.setNavigationBarColor({
					frontColor: this.$store.state.common.modulesData.homeModules.page ? this.$store.state
						.common.modulesData.homeModules.page.style.navigationBarTextStyle : '',
					backgroundColor: this.$store.state.common.modulesData.homeModules.page ? this.$store
						.state.common.modulesData.homeModules.page.style.navigationBarBackgroundColor : ''
				})
			}, 200);
		},
		onReady() {
			// #ifdef APP-PLUS
			plus.navigator.setFullscreen(false);
			// #endif
			// 判断网络类型
			uni.getNetworkType({
				success: (res) => {
					if (res.networkType == '2g' || res.networkType == '3g' || res.networkType == '4g') {
						this.$wanlshop.msg('当前使用非WIFI环境，请注意流量使用');
					} else if (res.networkType == 'none') {
						this.$wanlshop.msg('没有网络');
					}
				}
			});
		},
		onPageScroll(e) {
			let tmpY = 300;
			e.scrollTop = e.scrollTop > tmpY ? 300 : e.scrollTop; //如果当前高度大于250则250否则当前高度
			this.headerOpacity = e.scrollTop * (1 / tmpY); //$headerOpacity 赋值当前高度x（1÷250）
		},
		onReachBottom() {
			//判断是否最后一页
			if (this.current_page >= this.last_page) {
				this.status = 'noMore';
			} else {
				this.reload = false;
				this.current_page = this.current_page + 1; //页码+1
				this.status = 'loading';
				this.loadlikeData();
			}
		},
		onPullDownRefresh() {
			uni.stopPullDownRefresh();
		},
		methods: {
			...mapActions({
				download: 'update/download', // 立即下载
				ignore: 'update/ignore', // 忽略更新
				myupdate: 'update/update',
			}),
			toRenwuxiangqin(item) {
				console.log(item)
				if (!uni.getStorageSync("wanlshop:user").token) {
					uni.navigateTo({
						url: '/pages/user/auth/auth'
					})
				} else {
					if (item.private == 0) {
						uni.navigateTo({
							url: `/pages/user/changjia/renwuxiangqin?id=${item.id}`
						})
					} else if (item.private == 1) {
						uni.navigateTo({
							url: `/pages/user/caigoushang/renwuxiangqin?id=${item.id}`
						})
					}
				}
			},
			toRenwudating() {
				uni.navigateTo({
					url: '/pages/user/caigoushang/renwudating'
				})
			},
			getMyData() {
				uni.request({
					url: `${this.$url}/wanlshop/Jiedan/task_list`,
					method: 'POST',
					// header: {
					// 	'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					// },
					data: {
						status: -1,
						page: 1,
						limit: 4,
					},
					success: res => {
						console.log(res.data.data.data)
						this.myNavData = res.data.data.data;
					},
				})
			},
			productSearch(text) {
				this.$wanlshop.to(`/pages/product/search?keywords=${text}`, 'fade-in', 100);
			},
			userUser() {
				uni.switchTab({
					url: '/pages/tabBar/user/user'
				});
			},
			userAuth() {
				this.$wanlshop.to('/pages/user/auth/auth?url=/pages/tabBar/index/index');
			},
			scanCode() {
				// #ifndef H5
				uni.scanCode({
					success: (res) => {
						var QRcode = this.getUrlParam(res.result);
						switch (QRcode.QRtype) {
							case 'goods':
								this.onGoods(QRcode.id);
								break;
							case 'user':
								this.$wanlshop.to(`/pages/user/info?id=${QRcode.id}`);
								break;
							case 'category':
								this.$wanlshop.on('/pages/category/category');
								break;
							case 'notice':
								this.$wanlshop.on('/pages/tabBar/notice/notice');
								break;
							case 'page':
								this.$wanlshop.to(`/pages/page/index?id=${QRcode.id}`);
								break;
							case 'shop':
								this.onShop(QRcode.id);
								break;
							case 'live':
								// #ifdef APP-PLUS || MP-WEIXIN
								this.$wanlshop.auth(`/pages/shop/live/live`);
								// #endif
								// #ifndef APP-PLUS || MP-WEIXIN
								this.$wanlshop.msg('目前只开放App和微信小程序直播')
								// #endif
								break;
							case 'chat':
								this.toChat(QRcode.id);
								break;
						}
					}
				});
				// #endif
				// #ifdef H5
				this.$wanlshop.msg('暂不支持H5扫码');
				// #endif
			},
			// 解析Url
			getUrlParam(url) {
				var obj = {};
				var data = url.split("?")[1].split("&");
				for (var i = 0; i < data.length; i++) {
					var res = data[i].split("=");
					obj[res[0]] = res[1];
				}
				return obj;
			},
			//禁止父元素滑动 1.0.3升级
			moveHandle() {},
			// 滚动底部加载猜你喜欢
			async loadlikeData() {
				this.$api.get({
					url: '/wanlshop/product/likes',
					data: {
						page: this.current_page
					},
					success: res => {
						this.likeData = this.reload ? res.data : this.likeData.concat(res.data); //评论数据 追加
						this.current_page = res.current_page; //当前页码
						this.last_page = res.last_page; //总页码
						this.status = res.total == 0 ? 'noMore' : 'more';
					}
				});
			}
		}
	};
</script>
<style>
	.myNavv {
		width: 702rpx;
		height: 360rpx;
		background: #ffffff;
		border-radius: 20rpx;
		margin-left: 24rpx;
		padding: 24rpx;
	}

	.myNavv .nav1 {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.myNavv .nav1 .tit1 {
		font-size: 28rpx;
		font-weight: 700;
		color: #000000;
	}

	.myNavv .nav1 .tit2 {
		font-size: 28rpx;
		font-weight: 400;
		color: #aeaeae;
	}

	.myNavv .nav1 .tit2 .piccc1 {
		width: 18rpx;
		height: 18rpx;
	}

	.myNavv .navItems {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.myNavv .navItems .navItem {
		margin-top: 20rpx;
		width: 320rpx;
		height: 116rpx;
		background: #f8f8f8;
		border-radius: 10rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
	}

	.myNavv .navItems .navItem .left .txt1 {
		font-size: 28rpx;
		font-weight: 400;
		color: #2e2e2e;
	}

	.myNavv .navItems .navItem .left .txt2 {
		font-size: 24rpx;
		font-weight: 400;
		color: #999999;
		margin-top: 2rpx;
	}

	.myNavv .navItems .navItem .right {
		width: 18rpx;
		height: 18rpx;
	}

	/* .myNavv .navItems .navItem:nth-child(3){
		margin-top: 20rpx;
	}
	.myNavv .navItems .navItem:nth-child(4){
		margin-top: 20rpx;
	} */
	/*  */
	.cu-dialog {
		width: 80%;
		overflow: initial;
		text-align: left;
		border-radius: 25rpx;
	}

	.cu-dialog .hade {
		position: relative;
		width: 100%;
		top: -128rpx;
	}

	.cu-dialog .hade .title {
		position: relative;
		top: -280rpx;
		text-align: right;
		padding-right: 50rpx;
		overflow: hidden;
		height: 110rpx;
		margin-bottom: -110rpx;
	}

	.cu-dialog .hade .title>view {
		font-size: 50rpx;
	}

	.cu-dialog .info {
		position: relative;
		display: block;
		top: -170rpx;
		margin: 0 30rpx -140rpx 30rpx;
		line-height: 1.8;
	}


	.cu-bar .search-form {
		background-color: rgba(242, 242, 242, 0.9);
	}

	/* #ifdef MP */
	.cu-bar .action:last-child {
		margin-right: 0;
	}

	/* #endif */
</style>
