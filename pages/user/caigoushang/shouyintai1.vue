<template>
	<view>
		<!-- 收银台 -->
		<view class="edgeInsetTop"></view>
		<view class="wanl-pay">
			<view class="price-box">
				<text class="wanl-pip text-price margin-top-sm">{{money}}</text>
			</view>
			<view class="list-box">
				<view class="item">
					<text class="wlIcon-balance-pay"></text>
					<view class="action">
						<text class="title wanl-pip">余额支付</text>
						<view>
							<text v-if="Number(yuEMoeny)>Number(money)">可用余额 ￥{{yuEMoeny}}</text>
							<text v-else>余额不足，可用余额 ￥{{yuEMoeny}}</text>
						</view>
					</view>
					<view v-if="Number(yuEMoeny)>Number(money)" class="radio text-xxl">
						<text class="wlIcon-xuanze-danxuan wanl-orange"></text>
					</view>
					<view v-else class="radio text-xxl">
						<text class="wlIcon-xuanze-danxuan wanl-gray-light"></text>
					</view>
				</view>
			</view>
			<button class="mix-btn wanl-bg-redorange" @tap="pay" :loading="loading"> 确认支付</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				money:'',
				yuEMoeny:'',
				type:'',
				// 
				loading: false,
				disabled: false,
				price:'0.00',
				isbalance: false,
				order_no: '',
				order_pay_no: '',
				payNum: 1, // 支付方式 独立支付-合并支付
				payList: []
			}
		},
		onLoad(option) {
			console.log(option)
			this.id = option.id;
			this.money = option.money;
			this.type = option.type;
		},
		onShow() {
			this.getData();
		},
		methods: {
			getData(){
				uni.request({
					url: `${this.$url}/wanlshop/Jiedan/userInfo`,
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						console.log(res.data.data)
						this.yuEMoeny = Number(res.data.data.money);
						console.log(this.yuEMoeny)
					},
				})
			},
			pay(){
				uni.request({
					url: `${this.$url}/wanlshop/Jiedan/pay`,
					data: {
						id: this.id,
						money: this.money,
						type:this.type,
					},
					method: 'POST',
					header: {
						'token': uni.getStorageSync("wanlshop:user").token //自定义请求头信息
					},
					success: res => {
						console.log(res.data, 1111)
						if(res.data.code == 1){
							uni.navigateTo({
								url:'/pages/user/caigoushang/zhifuchenggou'
							})
						}else{
							this.$wanlshop.msg(res.data.msg);
						}
						// uni.showToast({
						// 	icon: 'none',
						// 	title: res.data.msg,
						// 	duration: 2000,
						// 	success: () => {
						// 		if (res.data.code == 1) {
						// 			setTimeout(() => {
						// 				uni.navigateTo({
						// 					url: '/pages/user/caigoushang/renwudating'
						// 				})
						// 			}, 2000)
						// 		}
						// 	}
						// })
					}
				})
			},
		}
	}
</script>

<style>
	page{
		background-color: white;
	}
	radio-group {
	    display: block;
	}
</style>
