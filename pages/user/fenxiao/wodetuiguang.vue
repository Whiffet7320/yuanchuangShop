<template>
	<view class="index" v-if="!und">
		<view class="nav1">
			<view class="tit1">
				<view class="left">
					<image src="/static/images/default/favicon64.ico" class="pic1" mode=""></image>
					<view class="l-tit1">
						<text v-if="isTuiguang == 0" class="l-txt1">{{obj.username}}</text>
						<text v-if="isTuiguang == 1" class="l-txt1">{{obj.user.username}}</text>
						<view class="l-txt2" v-if="isTuiguang == 0">
							<image src="/static/images/img/zu1877.png" class="l-pic1" mode=""></image>
							<view class="l-txt2-1">无推广资格</view>
						</view>
						<view class="l-txt2" v-if="isTuiguang == 1">
							<image src="/static/images/img/zu1878.png" class="l-pic1" mode=""></image>
							<view class="l-txt2-1">推广商</view>
						</view>
					</view>
				</view>
				<view @click="toRuheyaoqin" class="right">如何邀请</view>
			</view>
		</view>
		<view class="nav2">
			<view class="nav2-left">我的邀请码</view>
			<view class="nav2-right">
				<view v-if="isTuiguang == 0" class="txt1">{{obj.invite_code}}</view>
				<view v-if="isTuiguang == 1" class="txt1">{{obj.user.invite_code}}</view>
				<view @click="fuzhi" class="txt2">复制</view>
			</view>
		</view>
		<!-- 无资格 -->
		<view class="nav3" v-if="isTuiguang == 0">
			<view class="item1 item">
				<view class="nav3-txt1">获取推广商资格</view>
				<view class="nav3-txt2">完成任一任务即可获推广商资格，赚取佣金</view>
			</view>
			<view class="item2 item">
				<view class="left">
					<view class="nav3-txt1-i2">消费金额达到{{obj.consume_money}}元</view>
					<view class="nav3-txt2-i2">当前{{obj.count_money}}/{{obj.consume_money}}元</view>
				</view>
				<view class="right">去下单</view>
			</view>
			<view class="item2 item">
				<view class="left">
					<view class="nav3-txt1-i2">邀请{{obj.invite_count}}名用户注册</view>
					<view class="nav3-txt2-i2">当前{{obj.tree}}/{{obj.invite_count}}人</view>
				</view>
				<view class="right">去邀请</view>
			</view>
		</view>
		<!-- 有资格 -->
		<view class="nav4" v-if="isTuiguang == 1">
			<view class="items">
				<view class="item">
					<view class="tit1">
						<view class="txt1-1">我的团队</view>
						<view @click="toWodetuandui" class="txt1-2">团队详情<image class="pic11"
								src="/static/images/img/lujin.png" mode=""></image>
						</view>
					</view>
					<view class="tit2">
						<view class="tit2-left">
							<view class="tl-txt1">已邀请成员</view>
							<view class="tl-txt2">{{obj.i_team.yiji}}</view>
						</view>
						<view class="tit2-left">
							<view class="tl-txt1">二级成员</view>
							<view class="tl-txt2">{{obj.i_team.erji}}</view>
						</view>
					</view>
				</view>
				<view class="item">
					<view class="tit1">
						<view class="txt1-1">佣金订单</view>
						<view @click="toYongjindingdan" class="txt1-2">佣金订单<image class="pic11"
								src="/static/images/img/lujin.png" mode="">
							</image>
						</view>
					</view>
					<view class="tit2">
						<view class="tit2-left">
							<view class="tl-txt1">今日订单</view>
							<view class="tl-txt2">{{obj.commission_order.this_day}}</view>
							<view class="tl-txt3">预计佣金￥{{obj.commission_order.this_day_yongjin}}</view>
						</view>
						<view class="tit2-left">
							<view class="tl-txt1">本月订单</view>
							<view class="tl-txt2">{{obj.commission_order.this_month}}</view>
							<view class="tl-txt3">预计佣金￥{{obj.commission_order.this_month_yongjin}}</view>
						</view>
					</view>
				</view>
				<view class="item">
					<view class="tit1">
						<view class="txt1-1">我的佣金</view>
						<view class="txt1-2">查看钱包<image class="pic11" src="/static/images/img/lujin.png" mode="">
							</image>
						</view>
					</view>
					<view class="tit2">
						<view class="tit2-left">
							<view class="tl-txt1">总佣金收入</view>
							<view class="tl-txt2">{{obj.i_commission.count_yongjin}}</view>
							<view class="tl-txt3">{{obj.i_commission.count_order}}单</view>
						</view>
						<view class="tit2-left">
							<view class="tl-txt1">待结算佣金</view>
							<view class="tl-txt2">{{obj.i_commission.stay_yongjin}}</view>
							<view class="tl-txt3">{{obj.i_commission.stay_order}}单</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="footer">
			<button @click="fenxiangerweima" class="btn1">分享邀请二维码</button>
			<button open-type="share" class='btn2 isHaveDD'>分享邀请链接</button>
		</view>
		<!-- 弹窗 -->
		<pop ref="pop" direction="center" :is_close="true" :is_mask="true" :width="82" height="fit-content"
			:maskFun="true">
			<view class="myPop">
				<view class="pop">
					<image class="popImg2" :src="imgUrl" mode=""></image>
					<image class="popImg1" :src="popImg" mode="">
					</image>
					<view class="txt1">{{myyqm}}</view>
					<view class="txt2">邀请您成为推广商</view>
				</view>
				<view @click="saveImg" class="popBtn">
					保存图片
				</view>
			</view>

		</pop>
		<!-- 合成 -->
		<canvas-drawer :painting="painting" class="canvasdrawer" @getImage="eventGetImage" />
	</view>
</template>

<script>
	import Auth from '@/common/permission/index.js';
	import pop from "@/components/ming-pop/ming-pop.vue";
	import canvasDrawer from '@/components/canvas-drawer.vue'
	export default {
		onLoad() {
			this.getData();
		},
		onReady() {
			//初始化画布
			this.ctx = wx.createCanvasContext('shareCanvas')
		},
		components: {
			pop,
			canvasDrawer
		},
		data() {
			return {
				shareImage: "",
				painting: {},
				// 
				popOpen: true,
				isTuiguang: '',
				obj: {},
				myScene: '',
				popImg: '',
				scene: '',
				und: false,
				myyqm: '',
				imgUrl:'',
			}
		},
		// 用户点击右上角分享转发
		onShareAppMessage: async function() {
			var title = '邀请您成为推广商！'; //data，return 数据title
			return {
				title: title || '',
				imageUrl:'https://scht.gycsc.com/uploads/xcx/a.png',
				// path: `/pages/user/auth/register?invite_code=${this.myScene}`,
				path: `/pages/tabBar/user/user?invite_code=${this.myScene}`,
			}
		},
		//用户点击右上角分享朋友圈
		onShareTimeline: async function() {
			var title = '邀请您成为推广商！'; //data，return 数据title
			return {
				title: title || '',
				imageUrl:'https://scht.gycsc.com/uploads/xcx/a.png',
				// path: `/pages/user/auth/register?invite_code=${this.myScene}`,
				path: `/pages/tabBar/user/user?invite_code=${this.myScene}`,
			}
		},
		methods: {
			getData() {
				this.imgUrl = 'https://scht.gycsc.com/uploads/xcx/b.png?v='+new Date().getTime();
				uni.request({
					url: `${this.$url}/wanlshop/Fenxiao/index`,
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						console.log(res.data)
						this.isTuiguang = res.data.data.tuiguang;
						this.obj = res.data.data;
						if (this.isTuiguang == 0) {
							this.myyqm =
								`${this.obj.invite_code.substring(0,3)}****${this.obj.invite_code.substring(this.obj.invite_code.length-4,this.obj.invite_code.length)}`
						}
						if (this.isTuiguang == 1) {
							this.myyqm =
								`${this.obj.user.invite_code.substring(0,3)}****${this.obj.user.invite_code.substring(this.obj.user.invite_code.length-4,this.obj.user.invite_code.length)}`
						}
						if (res.data.code == 401) {
							this.und = true;
							this.$wanlshop.msg(res.data.msg);
							setTimeout(() => {
								uni.navigateTo({
									url: '/pages/user/auth/auth'
								})
							}, 2000)
						} else {
							this.und = false;
						}
					},
				})
				uni.request({
					url: `${this.$url}/wanlshop/Fenxiao/invite_url`,
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						console.log(res.data.data)
						this.myScene = res.data.data;
						if (res.data.code == 401) {
							uni.navigateTo({
								url: '/pages/user/auth/auth'
							})
						}
					},
				})
			},
			eventDraw() {
				// uni.showLoading({
				// 	title: '绘制分享图片中',
				// 	mask: true
				// })
				this.painting = {
					width: 560,
					height: 996,
					views: [{
							type: 'image',
							url: this.imgUrl,
							top: 0,
							left: 0,
							width: 560,
							height: 996
						},
						{
							type: 'image',
							url: `${this.popImg}`,
							top: 852,
							left: 430,
							width: 108,
							height: 108
						},
						{
							type: 'text',
							content: `${this.myyqm}`,
							fontSize: 32,
							color: '#ffffff',
							textAlign: 'left',
							top: 866,
							left: 38
						},
						{
							type: 'text',
							content: '邀请您成为推广商',
							fontSize: 24,
							color: '#ffffff',
							textAlign: 'left',
							top: 914,
							left: 38
						},
					]
				}
			},
			// getImageInfo(src) {
			// 	return new Promise((resolve, reject) => {
			// 		wx.getImageInfo({
			// 			src,
			// 			success: (res) => resolve(res),
			// 			fail: (res) => reject(res)
			// 		})
			// 	});
			// },
			async saveImg() {
				let authState = await new Auth('writePhotosAlbum').check();
				console.log(this.shareImage)
				if (authState) {
					uni.saveImageToPhotosAlbum({
						filePath: this.shareImage,
						success: (res) => {
							console.log(this.shareImage)
							uni.showToast({
								icon: 'none',
								title: '保存成功'
							})
						},
						fail: err => {
							console.log(err)
						}
					})
				}
			},
			eventGetImage(event) {
				uni.hideLoading();
				// this.shareShow = true;
				const tempFilePath = event.tempFilePath;
				const errMsg = event.errMsg;
				if (errMsg === 'canvasdrawer:ok') {
					this.shareImage = tempFilePath;
					this.painting = {};
				}
			},
			fenxiangerweima() {
				uni.request({
					url: `${this.$url}/wanlshop/Fenxiao/wx_qr`,
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					data: {
						url: 'pages/tabBar/user/user',
					},
					success: res => {
						console.log(res.data.data)
						this.popImg = res.data.data;
						this.$refs.pop.show();
						// this.$refs.pops.show();
						setTimeout(() => {
							this.eventDraw();
						}, 200)
					}
				})
			},
			toYongjindingdan() {
				uni.navigateTo({
					url: '/pages/user/fenxiao/yongjindingdan'
				})
			},
			toRuheyaoqin() {
				uni.navigateTo({
					url: '/pages/user/fenxiao/ruheyaoqin'
				})
			},
			toWodetuandui() {
				uni.navigateTo({
					url: '/pages/user/fenxiao/wodetuandui'
				})
			},
			fuzhi() {
				if (this.isTuiguang == 0) {
					uni.setClipboardData({
						data: this.obj.invite_code,
					});
				} else if (this.isTuiguang == 1) {
					uni.setClipboardData({
						data: this.obj.user.invite_code,
					});
				}

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
		width: 750rpx;
		height: 224rpx;
		background: #fb6729;
		box-shadow: 0rpx 8rpx 12rpx 0rpx rgba(244, 244, 244, 0.50);
		padding: 0 40rpx;

		.tit1 {
			padding-top: 40rpx;
			height: calc(40rpx + 98rpx);
			display: flex;
			justify-content: space-between;
			align-items: center;

			.left {
				height: 98rpx;
				display: flex;
				align-items: center;

				.pic1 {
					width: 98rpx;
					height: 98rpx;
					border-radius: 50%;
					margin-right: 16rpx;
				}

				.l-tit1 {
					height: 98rpx;
					display: flex;
					flex-direction: column;

					.l-txt1 {
						font-size: 32rpx;
						font-family: PingFang SC, PingFang SC-Bold;
						font-weight: 700;
						color: #ffffff;
					}

					.l-txt2 {
						margin-top: 12rpx;
						height: 42rpx;
						padding: 0 12rpx;
						background: #fc9063;
						border-radius: 22rpx;
						display: flex;
						align-items: center;
						justify-content: center;

						.l-pic1 {
							width: 28rpx;
							height: 28rpx;
						}

						.l-txt2-1 {
							margin-left: 8rpx;
							font-size: 24rpx;
							font-family: PingFang SC, PingFang SC-Regular;
							font-weight: 400;
							text-align: center;
							color: #ffffff;
						}
					}
				}
			}

			.right {
				width: 148rpx;
				height: 54rpx;
				border: 2rpx solid #ffffff;
				border-radius: 30rpx;
				font-size: 24rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				text-align: center;
				color: #ffffff;
				line-height: 54rpx;
			}
		}
	}

	.nav2 {
		width: 702rpx;
		height: 88rpx;
		background: #ffffff;
		border-radius: 10rpx;
		box-shadow: 0rpx 8rpx 12rpx 0rpx rgba(244, 244, 244, 0.50);
		margin-left: 24rpx;
		margin-top: -44rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;

		.nav2-left {
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			color: #333333;
		}

		.nav2-right {
			display: flex;
			align-items: center;

			.txt1 {
				font-size: 28rpx;
				font-family: PingFang SC, PingFang SC-Bold;
				font-weight: 700;
				color: #fb6729;
				margin-right: 16rpx;
			}

			.txt2 {
				width: 52rpx;
				height: 28rpx;
				border: 1rpx solid #fb6729;
				border-radius: 6rpx;
				font-size: 20rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				text-align: center;
				line-height: 28rpx;
				color: #fb6729;
			}
		}
	}

	.nav3 {
		margin: 24rpx;
		background: #ffffff;
		border-radius: 10rpx;
		box-shadow: 0rpx 8rpx 12rpx 0rpx rgba(244, 244, 244, 0.50);

		.item {
			padding: 0 24rpx;
			height: 150rpx;
		}

		.item1 {
			display: flex;
			flex-direction: column;
			justify-content: center;

			.nav3-txt1 {
				font-size: 28rpx;
				font-family: PingFang SC, PingFang SC-Bold;
				font-weight: 700;
				color: #2e2e2e;
			}

			.nav3-txt2 {
				font-size: 24rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				color: #999999;
			}
		}

		.item2 {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left {
				display: flex;
				flex-direction: column;

				.nav3-txt1-i2 {
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Bold;
					font-weight: 700;
					color: #fb6729;
				}

				.nav3-txt2-i2 {
					margin-top: 6rpx;
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;
					color: #999999;
				}
			}

			.right {
				width: 158rpx;
				height: 60rpx;
				background: #fb6729;
				border-radius: 30rpx;
				font-size: 24rpx;
				font-family: PingFang SC, PingFang SC-Bold;
				font-weight: 700;
				text-align: center;
				line-height: 60rpx;
				color: #ffffff;
			}
		}

	}

	.nav4 {
		margin: 24rpx;

		.items {
			.item {
				margin-bottom: 24rpx;
				padding: 0 24rpx 24rpx 24rpx;
				width: 702rpx;
				// height: 222rpx;
				background: #ffffff;
				border-radius: 10rpx;
				box-shadow: 0rpx 8rpx 12rpx 0rpx rgba(244, 244, 244, 0.50);

				.tit1 {
					height: 80rpx;
					align-items: center;
					display: flex;
					justify-content: space-between;
					border-bottom: 2rpx solid #f6f6f6;

					.txt1-1 {
						font-size: 24rpx;
						font-family: PingFang SC, PingFang SC-Bold;
						font-weight: 700;
						text-align: left;
						color: #2e2e2e;
					}

					.txt1-2 {
						font-size: 24rpx;
						font-family: PingFang SC, PingFang SC-Regular;
						font-weight: 400;
						text-align: right;
						color: #98999c;

						.pic11 {
							margin-left: 6rpx;
							width: 18rpx;
							height: 18rpx;
						}
					}
				}

				.tit2 {
					// height: 140rpx;
					padding-top: 24rpx;
					display: flex;
					align-items: center;

					.tit2-left {
						width: 50%;
						display: flex;
						flex-direction: column;
						justify-content: center;

						.tl-txt1 {
							font-size: 24rpx;
							font-family: PingFang SC, PingFang SC-Regular;
							font-weight: 400;
							color: #2e2e2e;
						}

						.tl-txt2 {
							margin-top: 20rpx;
							font-size: 32rpx;
							font-weight: 700;
							color: #2e2e2e;
						}

						.tl-txt3 {
							margin-top: 16rpx;
							font-size: 20rpx;
							font-family: PingFang SC, PingFang SC-Regular;
							font-weight: 400;
							color: #6c6c6c;
						}
					}
				}
			}
		}
	}

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

	.pop {
		margin-top: 20rpx;
		position: relative;
		width: 560rpx;
		height: 996rpx;

		.popImg2 {
			position: absolute;
			top: 0rpx;
			left: 0rpx;
			width: 560rpx;
			height: 996rpx;
		}

		.popImg1 {
			position: absolute;
			top: 852rpx;
			left: 430rpx;
			width: 108rpx !important;
			height: 108rpx !important;
		}

		.txt1 {
			position: absolute;
			font-size: 32rpx;
			top: 866rpx;
			left: 38rpx;
			color: #ffffff;
		}

		.txt2 {
			position: absolute;
			font-size: 24rpx;
			top: 914rpx;
			left: 38rpx;
			color: #ffffff;
		}
	}

	.popBtn {
		margin-top: 80rpx;
		width: 158rpx;
		height: 60rpx;
		border: 2rpx solid #fb6729;
		border-radius: 32rpx;
		font-size: 24rpx;
		font-weight: 700;
		text-align: center;
		line-height: 60rpx;
		color: #fb6729;
	}
	.myPop{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
