<template>
	<view class="page">
		<view class="form-box">
			<view class="form-box-inr">
				<view class="avatar-border">
					<view class="ava">
						<image src="../../static/img/login-ava.png" mode="widthFix" class="ava-img"></image>
					</view>
				</view>
				<view class="lg-title">
					登录
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.page {
		background: url('~@/static/img/login-bg.png') no-repeat center;
		background-size: 100% 100%;
		height: 100vh;
		padding: 24rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.form-box {
		width: 590rpx;		
	}
	.avatar-border {
		width: 220rpx;
		height: 220rpx;
		border-radius: 50%;
		border: 3px solid #FFFFFF;
		margin: -110px auto 0;
		padding: 18rpx;
	}
	.form-box-inr {
		background-color: #FFFFFF;
		border-radius: 10px;
		padding: 110rpx 50rpx 50rpx;
		position: relative;
	}
	.form-box-inr::before {
		content: "";
		width: 94%;
		background-color: #FFF0F0;
		height: 10rpx;
		position: absolute;
		left: 3%;
		bottom: -10rpx;
		border-radius: 0 0 20px 20px;
	}
	.ava {
		width: 170rpx;
		height: 170rpx;
		border-radius: 50%;
		border: 1px solid #ffffff;
		box-shadow: 0px 7px 15px 3px rgba(230,42,81,0.32);
	}
	.ava-img {
		width: 100%;
		height: 100%;
	}
	.lg-title {
		color: #F85E6B;
		font-size: 32rpx;
		text-align: center;
		padding: 5px 0;
		position: relative;
	}
	.lg-title:before {
		content: "";
		position: absolute;
		bottom: 0;
		width: 40px;
		height: 2px;
		left: 50%;
		background-color: #F85E6B;
		transform: translateX(-50%);
	}
</style>
