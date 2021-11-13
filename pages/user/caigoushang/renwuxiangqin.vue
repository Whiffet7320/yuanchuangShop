<template>
	<view class="container">
		<view class="detail_wrap">
			<view class="notice">支付前可修改任务信息，修改需已接单厂家同意修改，仅可选择同意的厂家合作。</view>
			<view class="list">
				<view class="hd flex">
					<view class="stit">{{obj.name}}</view>
					<view class="status">{{obj.myStatus}}</view>
				</view>
				<!-- <view class="desc">压花牛皮 | 猪里 | 喷漆跟 | 猪里垫</view> -->
				<view class="bd flex">
					<view class="left">
						<text class="money">¥{{obj.count_money}}</text>
						<text class="sub">预付款¥{{obj.yfk_money}}</text>
					</view>
					<view v-if="obj.jd_count == 0" class="right">暂无厂家接单</view>
					<view v-else class="right">有{{obj.jd_count}}位厂家接单</view>
				</view>
				<view class="ft flex">
					<view class="left">{{obj.count}}双 | {{obj.ks_count}}款式</view>
					<view class="right flex">
						<view class="time flex">
							<image class="pic1" src="/static/images/img/zu1525.png" mode=""></image>
							<text>{{obj.ctime}}</text>
						</view>
						<view class="eye flex">
							<image class="pic2" src="/static/images/img/view.png" mode=""></image>
							<text>{{obj.views}}</text>
						</view>
					</view>
				</view>
				<view class="cellbox">
					<view class="cell flex">
						<text class="name">产品名称</text>
						<text>{{obj.name}}</text>
					</view>
					<view class="cell flex">
						<text class="name">类型</text>
						<text>{{obj.type}}</text>
					</view>
					<view class="cell flex">
						<text class="name">是否现货</text>
						<text>{{obj.xianhuo == 0?'否':'是'}}</text>
					</view>
					<view class="cell flex">
						<text class="name">最迟发货时间</text>
						<!-- <text>{{formatDate(obj.end_time)}}</text> -->
						<text>{{obj.end_time}}</text>
					</view>
				</view>
				<view class="nav1" v-for="(item,i) in obj.kuanshi" :key='i'>
					<view class="tit1">
						<view class="txt1">款式{{item.paixu}}</view>
						<view class="txt2">{{item.count}}双</view>
					</view>
					<view class="cellbox">
						<view class="cell flex shen">
							<text class="name">颜色</text>
							<text>{{item.color}}</text>
						</view>
						<view class="cell flex">
							<text class="name">面料</text>
							<text>{{item.mianliao}}</text>
						</view>
						<view class="cell flex shen">
							<text class="name">内里</text>
							<text>{{item.neili}}</text>
						</view>
						<view class="cell flex">
							<text class="name">跟工艺</text>
							<text>{{item.xggy}}</text>
						</view>
						<view class="cell flex shen">
							<text class="name">膛底</text>
							<text>{{item.tangdi}}</text>
						</view>
						<view class="cell flex">
							<text class="name">特殊要求</text>
							<text>{{item.txyq}}</text>
						</view>
						<view class="cell flex shen">
							<text class="name">单价（元）</text>
							<text>80.00</text>
						</view>
						<view class="tit2">尺码及数量</view>
						<view class="itemsgg">
							<view class="itemgg" v-for="ele in item.chima_amount">
								<view class="item-tit1">{{ele.chima}}码</view>
								<view class="item-tit1">{{ele.amount}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 已关闭任务 -->
		<view v-if="obj.status == 4" class="footer">
			<view @click="toxiugai('1')" class="btn3">重新发布任务</view>
		</view>
		<!-- 合作中/已完成 -->
		<view v-if="obj.status == 2 || obj.status == 3" class="footer">
			<view @click="toDDxiangqin" class="btn3">点击查看订单</view>
		</view>
		<!-- 暂无/已有接单 -->
		<view v-else class="footer">
			<view @click="toxiugai('2')" class="btn1">修改任务</view>
			<view @click="tochakanjiedanchangjia" :class="{'btn2':true,'isHaveDD':isHaveDD}">查看接单厂家</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isHaveDD: true,
				id: '',
				obj: {},
				canjiedan: false,
			}
		},
		onLoad(options) {
			this.id = options.id;
		},
		onShow() {
			this.getData();
		},
		methods: {
			toDDxiangqin(){
				uni.navigateTo({
					url:`/pages/user/caigoushang/dingdanxiangqin?id=${this.id}`
				})
			},
			getData() {
				uni.request({
					url: `${this.$url}/wanlshop/Jiedan/task_info`,
					data: {
						id: this.id,
					},
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						if(res.data.code == 0){
							this.$wanlshop.msg(res.data.msg);
						}
						this.obj = res.data.data;
						this.isHaveDD = this.obj.jd_count > 0 ? true : false;
						this.obj.myStatus = this.obj.status == 0 ? '未接单' : this.obj.status == 1 ? '已接单' : this
							.obj.status == 2 ? '合作中' : this.obj.status == 3 ? '交易完成' : '交易关闭';
						// if (this.obj.status == 2) {
						// 	if (this.obj.if_jiedan == 1) {
						// 		this.obj.myStatus = '已合作';
						// 	} else {
						// 		this.obj.myStatus = '未合作';
						// 	}
						// }
						this.canjiedan = this.obj.private == 0 ? true : false;
					}
				})
			},
			toxiugai(val) {
				if (val == '1') {
					// 重新发布
					uni.navigateTo({
						url: `/pages/user/caigoushang/faburenwu?id=${this.id}&isXiugai=false`
					})
				} else if (val == '2') {
					uni.navigateTo({
						url: `/pages/user/caigoushang/faburenwu?id=${this.id}&isXiugai=true`
					})
				}

			},
			tochakanjiedanchangjia() {
				if (this.isHaveDD) {
					uni.navigateTo({
						url: `/pages/user/caigoushang/chakanjiedanchangjia?id=${this.id}`
					})
				}else{
					this.$wanlshop.msg('暂无厂家接单');
				}

			},
			formatDate(date1) {
				var date = new Date(Number(date1));
				var YY = date.getFullYear() + '-';
				var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
				var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
				var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
				var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
				return YY + MM + DD + " " + hh + mm + ss;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.shen {
		background: #f3f3f3 !important;
	}

	.container {
		position: relative;
	}

	.detail_wrap {
		padding-bottom: 140rpx;
		margin: 16rpx 24rpx;

		.notice {
			padding: 20rpx 30rpx;
			background-color: #fce2d7;
			border-radius: 10rpx;
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			color: #fb6729;
			margin-bottom: 16rpx;
		}

		.list {
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 40rpx 30rpx;

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
					margin-bottom: 30rpx;
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
				margin-top: 30rpx;
				background-color: #F9F9F9;

				.cell {
					display: flex;
					justify-content: space-between;
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

			.nav1 {
				margin-top: 30rpx;

				.tit1 {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.txt1 {
						font-size: 28rpx;
						font-family: PingFang SC, PingFang SC-Regular;
						font-weight: 400;
						text-align: left;
						color: #333333;
					}

					.txt2 {
						font-size: 28rpx;
						font-family: PingFang SC, PingFang SC-Regular;
						font-weight: 400;
						text-align: right;
						color: #999999;
					}
				}

				.cellbox {
					.tit2 {
						margin: 24rpx 0;
						font-size: 28rpx;
						font-family: PingFang SC, PingFang SC-Bold;
						font-weight: 700;
						text-align: center;
						color: #333333;
					}

					.itemsgg {
						display: flex;
						flex-wrap: wrap;

						.itemgg {
							margin-right: 6rpx;
							margin-bottom: 6rpx;
							width: 120rpx;
							height: 116rpx;
							background: #f3f3f3;
							border-radius: 10rpx;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							font-size: 28rpx;
							font-family: PingFang SC, PingFang SC-Bold;
							font-weight: 700;
							color: #666666;
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
