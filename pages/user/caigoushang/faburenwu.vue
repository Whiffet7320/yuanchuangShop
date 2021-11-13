<template>
	<view class="release_wrap">
		<view class="stit">基本信息</view>
		<view class="cellbox">
			<view class="cell">
				<view class="label">产品名称</view>
				<input type="text" v-model="form.name" placeholder="请输入产品名称" class="ipt" />
			</view>
			<view class="cell">
				<view class="label">类型</view>
				<input type="text" v-model="form.type" placeholder="请输入类型" class="ipt" />
			</view>
			<view class="cell">
				<view class="label">是否现货</view>
				<view class="myRadioGroup">
					<view class="myRadio" @click="changeXianhuo(1)">
						<view class="myRadio-child">
							<view v-if="form.xianhuo == 1" class="choose"></view>
						</view>
						<text class="txtRad">是</text>
					</view>
					<view class="myRadio" @click="changeXianhuo(0)">
						<view class="myRadio-child">
							<view v-if="form.xianhuo == 0" class="choose"></view>
						</view>
						<text class="txtRad">否</text>
					</view>
				</view>
			</view>
			<!-- 添加图片 -->
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(image,index) in imageList" :key="index">
						<image :src="image" @tap="previewImage(imageList, index)" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="close(index)">
							<text class='wlIcon-shanchu2'></text>
						</view>
					</view>
					<view class="solids" @tap="chooseImg" v-if="imageList.length<8">
						<text class="wlIcon-31paishe"></text>
					</view>
				</view>
			</view>
			<view class="cell">
				<view class="label">最迟发货时间</view>
				<uni-section :title="'日期用法：' + single" type="line"></uni-section>
				<view class="example-body">
					<uni-datetime-picker :border='false' type="date" :value="form.end_time" @change="change" />
				</view>
			</view>
		</view>
		<view v-for="(item,i) in form.kuanshi" :key='i'>
			<view class="titbox">
				<view class="hd">
					<text class="tit">款式信息</text>
					<view v-if="i == 0" @click="addGG" class="light">+增加款式</view>
					<view v-else @click="jianGG" class="light">-删除款式</view>
				</view>
				<view class="subtit">款式{{i+1}}</view>
			</view>
			<view class="cellbox">
				<view class="cell">
					<view class="label">产品颜色</view>
					<input type="text" v-model="item.color" placeholder="请输入产品颜色" class="ipt" />
				</view>
				<view class="cell">
					<view class="label">面料</view>
					<input type="text" v-model="item.mianliao" placeholder="请输入面料" class="ipt" />
				</view>
				<view class="cell">
					<view class="label">内里</view>
					<input type="text" v-model="item.neili" placeholder="请输入内里" class="ipt" />
				</view>
				<view class="cell">
					<view class="label">鞋跟工艺</view>
					<input type="text" v-model="item.xggy" placeholder="请输入鞋跟工艺" class="ipt" />
				</view>
				<view class="cell">
					<view class="label">膛底</view>
					<input type="text" v-model="item.tangdi" placeholder="请输入膛底" class="ipt" />
				</view>
				<view class="cell">
					<view class="label">特殊要求</view>
					<input type="text" v-model="item.txyq" placeholder="请输入特殊要求" class="ipt" />
				</view>
				<view class="cell">
					<view class="label">单价（元）</view>
					<input type="number" v-model="item.price" placeholder="请输入单价（元）" class="ipt" />
				</view>
				<view class="cell">
					<view class="flex" style="display: flex;justify-content: space-between;">
						<view class="label">尺码及数量</view>
						<view class="zongshu">总数量:{{ggzongshuList[i]?ggzongshuList[i]:0}}</view>
					</view>

					<view class="ggItems">
						<view class="ggItem" v-for="(ele,index) in item.chima_amount" :key='index'>
							<view class="gg-txt">{{ele.chima}}</view>
							<input type="text" v-model="ele.amount" placeholder="请输入数量" class="ipt" />
						</view>
					</view>

				</view>
			</view>
		</view>

		<view class="stit">备注信息</view>
		<view class="cellbox">
			<view class="cell">
				<view class="label">备注</view>
				<input type="text" v-model="form.beizhu" placeholder="请输入备注" class="ipt" />
			</view>
		</view>
		<view class="stit">联系方式</view>
		<view class="cellbox">
			<view class="cell">
				<view class="label">联系人</view>
				<view class="flex">
					<input type="text" v-model="form.lxname" placeholder="请输入联系人" class="ipt" />
					<view class="myRadioGroup">
						<view class="myRadio" @click="changeSex(1)">
							<view class="myRadio-child">
								<view v-if="form.lxsex == 1" class="choose"></view>
							</view>
							<text class="txtRad">先生</text>
						</view>
						<view class="myRadio" @click="changeSex(2)">
							<view class="myRadio-child">
								<view v-if="form.lxsex == 2" class="choose"></view>
							</view>
							<text class="txtRad">女士</text>
						</view>
					</view>
				</view>

			</view>
			<view class="cell">
				<view class="label">联系电话</view>
				<input type="number" v-model="form.lxphone" placeholder="请输入联系电话，接单厂家可联系您" class="ipt" />
			</view>
		</view>
		<view class="stit">付款方式</view>
		<view class="fkfs">
			<!-- <view @click="changeFktype(1)" class="myRadio-child-fkfs">
				<view v-if="form.fktype == 1" class="choose"></view>
			</view> -->
			<view class="item1">
				<view @click="changeFktype(1)" class="myRadio-child-fkfs">
					<view v-if="form.fktype == 1" class="choose"></view>
				</view>
				<view @click="changeFktype(1)" class="rad-box1">
					<view class="name">全款支付</view>
					<view class="desc">确认厂商后支付全款</view>
					<!-- <view class="light">¥8000.00</view> -->
				</view>
			</view>
			<view class="item1">
				<view @click="changeFktype(2)" class="myRadio-child-fkfs">
					<view v-if="form.fktype == 2" class="choose"></view>
				</view>
				<view @click="changeFktype(2)" class="rad-box1">
					<view class="name">预付款+尾款支付</view>
					<view class="desc">确认厂商后支付预付款，确认收货时支付尾款</view>
					<input type="text" v-model="form.yfk_money" placeholder="请输入预付款金额（元）" class="ipt" />
				</view>
			</view>
		</view>

		<!-- <view class="paylist">
			<view class="pay_item">
				<view class="icon"></view>
				<view class="info">
					<view class="name">全款支付</view>
					<view class="desc">确认厂商后支付全款</view>
					<view class="light">¥8000.00</view>
				</view>
			</view>
			<view class="pay_item">
				<view class="icon"></view>
				<view class="info">
					<view class="name">预付款+尾款支付</view>
					<view class="desc">确认厂商后支付预付款，确认收货时支付尾款</view>
					<input type="text" placeholder="请输入预付款金额（元）" class="ipt" />
				</view>
			</view>
		</view> -->
		<view class="nav3">
			<image @click="iconFlag=false" v-if="iconFlag" class="pic" src="/static/images/img/zu42.png" mode="">
			</image>
			<image @click="iconFlag=true" v-else class="pic" src="/static/images/img/zu7.png" mode=""></image>
			<view class="txt3">
				我已阅读并同意<text class="yellow">《任务发布协议》</text>
			</view>
		</view>
		<!-- 修改发布 -->
		<view v-if="isXiugai == 'true'" class="myfooter">
			<view @click="closeRenwu" class="btn1">关闭任务</view>
			<view @click="lijifabu" class="btn2">确认修改</view>
		</view>
		<!-- 立即发布 -->
		<view v-else class="myfooter">
			<view @click="lijifabu" class="btn">立即发布</view>
		</view>
	</view>
</template>

<script>
	export default {
		watch: {
			'form.kuanshi': {
				handler() {
					this.form.kuanshi.forEach((ele, i) => {
						var ggzongshu = 0;
						ele.chima_amount.forEach(item => {
							if (item.amount != '') {
								ggzongshu += Number(item.amount)
							}
						})
						this.$set(this.ggzongshuList, i, ggzongshu)
					})
				},
				deep: true,
			}
		},
		data() {
			return {
				ggzongshuList: [],
				imageList: [],
				isClose: false,
				iconFlag: false,
				isXiugai: false,
				again: '',
				id: '',
				form: {
					name: '',
					type: '',
					xianhuo: '3',
					end_time: '',
					kuanshi: [{
						color: "",
						mianliao: '',
						neili: '',
						xggy: '',
						tangdi: '',
						txyq: '',
						price: '',
						paixu: 1,
						chima_amount: [{
							"chima": 33, //尺码
							"amount": '' //数量
						}, {
							"chima": 34, //尺码
							"amount": '' //数量
						}, {
							"chima": 35, //尺码
							"amount": '' //数量
						}, {
							"chima": 36, //尺码
							"amount": '' //数量
						}, {
							"chima": 37, //尺码
							"amount": '' //数量
						}, {
							"chima": 38, //尺码
							"amount": '' //数量
						}, {
							"chima": 39, //尺码
							"amount": '' //数量
						}, {
							"chima": 40, //尺码
							"amount": '' //数量
						}, {
							"chima": 41, //尺码
							"amount": '' //数量
						}, {
							"chima": 42, //尺码
							"amount": '' //数量
						}, {
							"chima": 43, //尺码
							"amount": '' //数量
						}, {
							"chima": 44, //尺码
							"amount": '' //数量
						}, ],
					}],
					beizhu: '',
					lxname: '',
					lxsex: '',
					lxphone: '',
					fktype: '',
					yfk_money: '',
				},
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.isXiugai = options.isXiugai;
			if (this.isXiugai == 'false') {
				this.again = '1'
			}
			if (options.id) {
				this.getData();
			}
		},
		methods: {
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
						console.log(res.data.data)
						this.form = res.data.data;
						console.log(this.form.image.split('cyyzs'),111) 
						this.imageList = this.form.image.split('cyyzs');
						this.imageList.pop()
						console.log(this.imageList)
						this.form.myStatus = this.form.status == 0 ? '未接单' : this.form.status == 1 ? '已接单' :
							this
							.obj.status == 2 ? '合作中' : this.form.status == 3 ? '交易完成' : '交易关闭';
						delete this.form.if_jiedan;
						delete this.form.jd_count;
						delete this.form.ks_count;
						delete this.form.views;
						delete this.form.ctime;
						delete this.form.count_money;
						delete this.form.count;
						delete this.form.status;
						delete this.form.myStatus;
						delete this.form.uid;
						delete this.form.update;
						delete this.form.private;
						this.form.kuanshi.forEach(ele => {
							delete ele.count;
						})
					}
				})
			},
			chooseImg() { //选择图片
				uni.chooseImage({
					sourceType: ["camera", "album"],
					sizeType: "compressed",
					count: 8 - this.imageList.length,
					success: res => {
						this.$api.get({
							url: '/wanlshop/common/uploadData',
							success: updata => {
								for (let i = 0; i < res.tempFilePaths.length; i++) {
									// 读取图片宽高
									uni.getImageInfo({
										src: res.tempFilePaths[i],
										success: image => {
											this.$api.upload({
												url: updata.uploadurl,
												filePath: image.path,
												name: 'file',
												formData: updata.storage ==
													'local' ? null : updata
													.multipart,
												success: data => {
													this.imageList.push(
														data.fullurl);
													console.log(data
														.fullurl)
												}
											});
										}
									});
								}
							}
						});
					}
				})
			},
			close(e) {
				this.imageList.splice(e, 1);
			},
			previewImage(image, index) {
				var imgArr = [];
				for (var item of image) {
					imgArr = imgArr.concat(this.$wanlshop.oss(item, 500));
				}
				uni.previewImage({
					urls: imgArr,
					current: imgArr[index],
					indicator: 'number'
				});
			},
			closeRenwu() {
				console.log(this.id)
				uni.request({
					url: `${this.$url}/wanlshop/Jiedan/task_close`,
					data: {
						id: this.id,
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
								if (res.data.code == 1) {
									uni.navigateTo({
										url: ''
									})
								}
							}
						})
					}
				})
			},
			addGG() {
				this.form.kuanshi.push({
					color: "",
					mianliao: '',
					neili: '',
					xggy: '',
					tangdi: '',
					txyq: '',
					price: '',
					paixu: 1,
					chima_amount: [{
						"chima": 33, //尺码
						"amount": '' //数量
					}, {
						"chima": 34, //尺码
						"amount": '' //数量
					}, {
						"chima": 35, //尺码
						"amount": '' //数量
					}, {
						"chima": 36, //尺码
						"amount": '' //数量
					}, {
						"chima": 37, //尺码
						"amount": '' //数量
					}, {
						"chima": 38, //尺码
						"amount": '' //数量
					}, {
						"chima": 39, //尺码
						"amount": '' //数量
					}, {
						"chima": 40, //尺码
						"amount": '' //数量
					}, {
						"chima": 41, //尺码
						"amount": '' //数量
					}, {
						"chima": 42, //尺码
						"amount": '' //数量
					}, {
						"chima": 43, //尺码
						"amount": '' //数量
					}, {
						"chima": 44, //尺码
						"amount": '' //数量
					}, ],
				})
			},
			jianGG() {
				this.ggList.pop()
			},
			// 发布
			lijifabu() {
				delete this.form.if_jiedan;
				delete this.form.jd_count;
				delete this.form.ks_count;
				delete this.form.views;
				delete this.form.ctime;
				delete this.form.count_money;
				delete this.form.count;
				delete this.form.status;
				delete this.form.myStatus;
				delete this.form.uid;
				delete this.form.update;
				delete this.form.private;
				this.form.kuanshi.forEach(ele => {
					delete ele.count;
				})
				this.form.kuanshi.forEach((ele, i) => {
					console.log(i)
					ele.paixu = ele.paixu + i;
					ele.chima_amount.forEach(item => {
						if (item.amount == '') {
							item.amount = 0;
						}
					})
				})
				console.log(this.imageList)
				var myImageList = '';
				this.imageList.forEach(ele => {
					console.log(ele)
					myImageList += `${ele}cyyzs`
				})
				console.log(myImageList)
				uni.request({
					url: `${this.$url}/wanlshop/Jiedan/release_task`,
					data: {
						id: this.id,
						again: this.again,
						...this.form,
						image: myImageList,
					},
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						console.log(res.data, 1111)
						uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 2000,
							success: () => {
								if (res.data.code == 1) {
									setTimeout(() => {
										// uni.navigateTo({
										// 	url: '/pages/user/caigoushang/renwudating'
										// })
										uni.navigateBack({
											delta: 1
										})
									}, 2000)
								}
							}
						})
					}
				})
			},
			changeXianhuo(val) {
				this.form.xianhuo = val;
			},
			changeSex(val) {
				this.form.lxsex = val;
			},
			changeFktype(val) {
				this.form.fktype = val;
			},
			// 时间
			change(e) {
				this.form.end_time = `${e} 00:00:00`;
				console.log(this.form.end_time);
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
	/deep/ .uni-calendar__content {
		z-index: 9999 !important;
	}

	.myRadio-child-fkfs {
		position: absolute;
		top: 32rpx;
		left: 0rpx;
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

	.ggItems {
		display: flex;
		flex-wrap: wrap;
	}

	.ggItem {
		width: 224rpx;
		height: 116rpx;
		background: #f3f3f3;
		border-radius: 10rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 16rpx;

		.ipt {
			text-align: center;
		}

		margin-right: 12rpx;
		margin-bottom: 16rpx;

		&:nth-child(3n) {
			margin-right: 0rpx;
		}
	}

	.flex {
		display: flex;
		align-content: center;
	}

	.fkfs {

		// position:relative;
		.item1 {
			position: relative;
			margin-left: 24rpx;
			padding: 24rpx;
			width: 750rpx;
			height: 180rpx;
			background: #ffffff;
			margin-bottom: 2rpx;
		}

		.radio {
			display: flex;
		}

		.rad-box1 {
			margin-top: 4rpx;
			margin-left: 20rpx;

			.name {
				font-size: 28rpx;
				font-weight: 700;
				text-align: left;
				color: #333333;
			}

			.desc {
				font-size: 28rpx;
				font-weight: 400;
				text-align: left;
				color: #666666;
			}

			.ipt {
				font-size: 28rpx;
			}
		}

		.rad-box1.rad-box2 {}
	}

	.txtRad {
		display: inline-block;
		margin-left: 10rpx;
	}

	.radio {
		margin-right: 60rpx;
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

	.release_wrap {
		position: relative;

		.light {
			color: #fb6729;
		}

		.stit {
			padding: 0 24rpx;
			height: 84rpx;
			line-height: 84rpx;
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			color: #333333;
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

		.titbox {
			padding: 24rpx 24rpx 20rpx 24rpx;
			display: flex;
			flex-direction: column;

			.hd {
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;

				.tit {
					flex: 1;
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Bold;
					font-weight: 700;
					color: #333333;
				}
			}

			.subtit {
				font-size: 28rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				color: #999999;
			}
		}

		.paylist {
			.pay_item {
				background-color: #FFFFFF;
				padding: 30rpx 24rpx;
				margin-bottom: 2rpx;
				display: flex;

				&:last-child {
					margin-bottom: 0;
				}

				.icon {
					width: 30rpx;
					height: 30rpx;
					border: 1rpx solid #a1a1a1;
					border-radius: 50%;
					margin-right: 20rpx;
				}

				.info {
					flex: 1;
					display: flex;
					flex-direction: column;
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Regular;
					font-weight: 400;

					.name {
						font-size: 28rpx;
						font-family: PingFang SC, PingFang SC-Bold;
						font-weight: 700;
						color: #333333;
					}

					.desc {
						margin: 6rpx 0;
						color: #666666;
					}

					.ipt {
						font-size: 28rpx;
						color: #333333;
					}
				}
			}
		}

		.nav3 {
			margin: 24rpx 24rpx 150rpx 24rpx;
			display: flex;
			align-items: center;
			padding-bottom: 150rpx;
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
	}
</style>
