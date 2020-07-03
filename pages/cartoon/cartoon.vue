<template>
	<view>
		<u-navbar title-color="#fff" :background="navBgColor" :is-fixed="navFixed" :is-back="false" title="漫画" :borderBottom="false"></u-navbar>
		<view class="swiper-wrap">
			<u-swiper :list="list" mode="rect" :effect3d = "true" height="300" title="true" :title-style="swiperTitStyle"></u-swiper>
		</view>
		<view class="">
			<u-row gutter="48" justify="center">
				<u-col span="4">
					<image src="../../static/img/adv-1.png" mode="widthFix" style="width: 100%;"></image>
				</u-col>
				<u-col span="4">
					<image src="../../static/img/adv-2.png" mode="widthFix" style="width: 100%;"></image>
				</u-col>
				<u-col span="4">
					<image src="../../static/img/adv-3.png" mode="widthFix" style="width: 100%;"></image>
				</u-col>
			</u-row>
		</view>
		<view class="">
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
			<view class="">1</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navFixed: true,
				navBgColor: {
					backgroundColor: 'transparent'
				},
				list: [{
						image: '/static/img/banner.png',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: '/static/img/banner.png',
						title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
					},
					{
						image: '/static/img/banner.png',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					}
				],
				swiperTitStyle: {
					backgroundColor: 'transparent',
					color:"red"
				}
			};
		},
		methods: {
			onPageScroll(e) {
				if (e.scrollTop > 0) {
					this.navBgColor = {
						backgroundColor: '#CD334C'
					};
				} else {
					this.navBgColor = {
						backgroundColor: 'transparent'
					};
				}

			}
		}
	}
</script>

<style lang="scss">
	.swiper-wrap {
		height: 350rpx;
		background: url('~@/static/img/banner-bg.png') no-repeat center -10px;
		background-size: 100% auto;
		margin-top: -44px;
		padding-top: 49px;
	}
</style>
