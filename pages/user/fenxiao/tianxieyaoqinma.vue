<template>
	<view class="index">
		<view class="txt1">请输入邀请码</view>
		<view class="txt2">您可输入邀请人的邀请码（即邀请人手机号）</view>
		<input class="inp1" v-model="invite_code" type="text" placeholder="请输入邀请码" />
		<view @click="onSubmit" class="btn1">确认填写</view>
		<view @click="toLogin" class="btn2">跳过</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				mobile:'',
				captcha:'',
				invite_code:'',
			}
		},
		onLoad(options) {
			console.log(options)
			this.captcha = options.captcha;
			this.mobile = options.mobile;
			if(options.invite_code){
				this.invite_code = options.invite_code
			}
		},
		methods:{
			toLogin(){
				uni.navigateTo({
					url:'/pages/user/auth/auth'
				})
			},
			onSubmit(){
				this.$api.post({
				    url: '/wanlshop/user/register', 
					data:{
						invite_code:this.invite_code,
						mobile: this.mobile,
						captcha: this.captcha,
						client_id: uni.getStorageSync("wanlshop:chat_client_id")?uni.getStorageSync("wanlshop:chat_client_id") : null
					},
				    success: res => {
						// uni.hideLoading();
						// 中央控制总线
						this.$store.dispatch('user/login', res);
						this.$store.dispatch('cart/login');
						this.$store.dispatch('chat/get');
				        // uni.reLaunch({url: decodeURIComponent(this.pageroute)});
						uni.reLaunch({url:'/pages/user/auth/auth'});
				    }
				});
			},
		}
	}
</script>

<style>
	page {
		background: #ffffff;
		height: 100%;
	}
</style>
<style lang="scss" scoped>
	.index{
		padding: 0 24rpx;
	}
	.txt1{
		margin-top: 80rpx;
		font-size: 44rpx;
		font-family: PingFang SC, PingFang SC-Heavy;
		font-weight: 800;
		color: #333333;
		margin-bottom: 10rpx;
	}
	.txt2{
		font-size: 24rpx;
		font-family: PingFang SC, PingFang SC-Regular;
		font-weight: 400;
		color: #999999;
	}
	.inp1{
		margin-top: 80rpx;
		width: 702rpx;
		height: 84rpx;
		background: #f7f7f7;
		border-radius: 42rpx;
		padding: 0 30rpx;
	}
	/deep/ .uni-input-placeholder{
		font-size: 28rpx;
		font-weight: 400;
		color: #cecece;
	}
	.btn1{
		margin-top: 20rpx;
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
	.btn2{
		border: 2rpx solid #fb6729;
		border-radius: 40rpx;
		margin-top: 20rpx;
		width: 702rpx;
		height: 76rpx;
		background: #ffffff;
		border-radius: 38rpx;
		font-size: 28rpx;
		font-weight: 700;
		text-align: center;
		color: #fb6729;
		line-height: 76rpx;
	}
</style>
