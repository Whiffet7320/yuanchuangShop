<template>
	<view class="index">
		<view class="cellbox">
			<view class="cell">
				<view class="label">快递公司</view>
				<picker :range='range' mode="selector" range-key='name' :value="form.express_name" @change="bindTimeChange">
					<view class="uni-input">{{form.express_name == '' ? '请选择快递公司' : form.express_name}}</view>
				</picker>
			</view>
			<view class="cell">
				<view class="label">快递单号</view>
				<input type="text" v-model="form.express_no" placeholder="请输入快递单号" class="ipt" />
			</view>
		</view>
		<view class="myfooter">
			<view @click="querenfahuo" class="btn">确认发货</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					express_name: '',
					express_no: '',
					express_code:'',
				},
				id: "",
				range:[],
			}
		},
		onLoad(option) {
			this.id = option.id;
			console.log(option)
		},
		onShow() {
			this.getData();
		},
		methods: {
			getData(){
				uni.request({
					url: `${this.$url}/wanlshop/Jiedan/kd_gongsi`,
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						console.log(res.data)
						this.range = res.data.data;
					}
				})
			},
			bindTimeChange(e){
				console.log(this.range[Number(e.detail.value)])
				this.form.express_name = this.range[Number(e.detail.value)].name;
				this.form.express_code = this.range[Number(e.detail.value)].code;
			},
			querenfahuo() {
				uni.request({
					url: `${this.$url}/wanlshop/Jiedan/deliver_goods`,
					data: {
						id: this.id,
						...this.form,
					},
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						console.log(res.data)
						this.$wanlshop.msg(res.data.msg);
						if (res.data.code == 1) {
							setTimeout(() => {
								uni.navigateBack({
									delta: 2
								})
							}, 2000)
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		position: relative;
	}

	.cellbox {
		.cell {
			padding: 24rpx;
			background-color: #FFFFFF;
			margin-bottom: 2rpx;
			display: flex;
			flex-direction: column;

			&:last-child {
				margin-bottom: 0;
			}

			.label {
				font-size: 28rpx;
				font-family: PingFang SC, PingFang SC-Bold;
				font-weight: 700;
				color: #333333;
				margin-bottom: 12rpx;
			}

			.ipt {
				font-size: 28rpx;
				color: #333333;
			}

			.tag {
				background: #f3f3f3;
				display: flex;
				flex-direction: column;
				justify-content: center;

				.num {
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Bold;
					font-weight: 700;
					text-align: center;
					color: #666666;
				}
			}
		}
	}

	.myfooter {
		z-index: 999;
		position: fixed;
		bottom: 0;
		width: 750rpx;
		height: 140rpx;
		background: #ffffff;
		box-shadow: 0rpx 8rpx 28rpx 0rpx rgba(166, 179, 194, 0.30);
		display: flex;
		align-items: center;
		justify-content: center;

		.btn {
			width: 702rpx;
			height: 76rpx;
			background: #fb6729;
			border-radius: 38rpx;
			font-size: 28rpx;
			font-weight: 700;
			text-align: center;
			color: #ffffff;
			line-height: 76rpx;
		}

		.btn1 {
			width: 344rpx;
			height: 76rpx;
			border: 2rpx solid #fb6729;
			border-radius: 40rpx;
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			text-align: center;
			line-height: 76rpx;
			color: #fb6729;
		}

		.btn2 {
			margin-left: 14rpx;
			width: 344rpx;
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
