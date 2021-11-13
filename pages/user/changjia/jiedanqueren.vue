<template>
	<view class="index">
		<view class="nav1">
			<view class="tit1">
				<view class="txt1">厂家名称</view>
				<view class="txt2">不可修改</view>
			</view>
			<view class="tit2">{{form.shopname}}</view>
		</view>
		<view class="nav2">
			<view class="tit1">厂家所属地区</view>
			<input class="inp" type="text" v-model='form.city' placeholder="请输入厂家所属地区" />
		</view>
		<view class="nav2">
			<view class="tit1">详细地址</view>
			<input class="inp" type="text" v-model='form.address' placeholder="请输入详细地址" />
		</view>
		<view class="nav2">
			<view class="tit1">联系人姓名</view>
			<view class="flex">
				<input class="inp" type="text" v-model='form.nickname' placeholder="请输入联系人姓名" />
				<view class="myRadioGroup">
					<view class="myRadio" @click="changeXianhuo(1)">
						<view class="myRadio-child">
							<view v-if="form.sex == 1" class="choose"></view>
						</view>
						<text class="txtRad">男</text>
					</view>
					<view class="myRadio" @click="changeXianhuo(0)">
						<view class="myRadio-child">
							<view v-if="form.sex == 0" class="choose"></view>
						</view>
						<text class="txtRad">女</text>
					</view>
				</view>
			</view>

		</view>
		<view class="nav2">
			<view class="tit1">联系电话</view>
			<input class="inp" type="number" v-model='form.mobile' placeholder="请输入联系电话" />
		</view>
		<view class="nav3">
			<image @click="iconFlag=false" v-if="iconFlag" class="pic" src="/static/images/img/zu42.png" mode="">
			</image>
			<image @click="iconFlag=true" v-else class="pic" src="/static/images/img/zu7.png" mode=""></image>
			<view class="txt3">
				我已阅读并同意<text class="yellow">《接单协议》</text>
			</view>
		</view>
		<view class="footer">
			<view @click="queren" class="btn-footer">确认接单</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconFlag: false,
				form: {
					xianhuo: ''
				},
				id:'',
			}
		},
		onLoad(option) {
			console.log(option.data)
			this.form = JSON.parse(option.data);
			this.id = option.id;
			console.log(this.form)
		},
		methods: {
			changeXianhuo(val) {
				this.form.sex = val;
			},
			queren(){
				uni.request({
					url: `${this.$url}/wanlshop/Jiedan/affirm_task`,
					data: {
						...this.form,
						task_id:this.id,
					},
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						console.log(res.data)
						uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000,
							success: () => {
								console.log(res.data.code)
								if(res.data.code == 1){
									setTimeout(()=>{
										console.log(res.data.code)
										uni.navigateTo({
											url:`/pages/user/changjia/jiedanchenggong?nickname=${this.form.nickname}&mobile=${this.form.mobile}`
										})
										console.log(res.data.code)
									},2000)
								}
							}
						})
					},
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		position: relative;
	}

	.myRadioGroup {
		display: flex;
		align-items: center;

		.myRadio {
			margin-right: 60rpx;
			display: flex;
			align-items: center;

			.myRadio-child {
				width: 30rpx;
				height: 30rpx;
				border: 1rpx solid #a1a1a1;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;

				.choose {
					width: 18rpx;
					height: 18rpx;
					background: #fb6729;
					border-radius: 50%;
				}
			}



			.txtRad {
				font-size: 28rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				color: #333333;
				margin-left: 10rpx;
			}
		}

	}

	/deep/ .uni-radio-wrapper .uni-radio-input {
		background-color: transparent;
		width: 30rpx;
		height: 30rpx;
		border: 1rpx solid #a1a1a1 !important;
	}

	/deep/ uni-radio::before,
	uni-checkbox::before {
		display: none;
		content: '';
	}

	/deep/ .uni-radio-wrapper .uni-radio-input.uni-radio-input-checked {
		background-color: rgba($color: #000000, $alpha: 0) !important;
		position: relative;

		&::before {
			display: inline-block;
			content: '';
			width: 18rpx;
			height: 18rpx;
			background: #fb6729;
			border-radius: 50%;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.nav1 {
		&:nth-child(1) {
			margin-top: 20rpx;
		}

		background: #ffffff;
		padding: 24rpx;
		border-bottom: 2rpx solid #f8f8f8;

		.tit1 {
			display: flex;
			align-items: center;
			margin-bottom: 12rpx;

			.txt1 {
				font-size: 28rpx;
				font-family: PingFang SC, PingFang SC-Bold;
				font-weight: 700;
				color: #333333;
			}

			.txt2 {
				margin-left: 12rpx;
				font-size: 28rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				color: #999999;
			}
		}

		.tit2 {
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			color: #333333;
		}
	}

	.nav2 {
		background: #ffffff;
		padding: 24rpx;
		border-bottom: 2rpx solid #f8f8f8;

		.tit1 {
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			color: #333333;
		}

		.myradio {
			margin-right: 30rpx;

			uni-radio {
				transform: translateY(-4rpx);
			}

			.txtRad {
				font-size: 28rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				color: #333333;
				margin-left: 16rpx;
			}
		}

		.inp {
			margin-top: 12rpx;
			font-size: 28rpx;
		}
	}

	.nav3 {
		margin: 24rpx;
		display: flex;
		align-items: center;

		.pic {
			width: 24rpx;
			height: 24rpx;
			margin-right: 8rpx;
		}

		.txt3 {
			font-size: 20rpx;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			text-align: left;
			color: #999999;

			.yellow {
				color: #FB6729;
			}
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		width: 750rpx;
		height: 140rpx;
		background: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0rpx 8rpx 28rpx 0rpx rgba(166, 179, 194, 0.30);

		.btn-footer {
			width: 702rpx;
			height: 76rpx;
			background: #fb6729;
			border-radius: 38rpx;
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			text-align: center;
			color: #ffffff;
			line-height: 76rpx;
		}
	}
</style>
