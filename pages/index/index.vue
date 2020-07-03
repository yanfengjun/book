<template>
	<view class="content">
		<u-navbar title-color="#fff" back-icon-color="#ffffff" :is-fixed="isFixed" :is-back="isBack" :background="background" :back-text-style="{color: '#fff'}" :title="title" :back-icon-name="backIconName" :back-text="backText">
		</u-navbar>
		<u-swiper :list="list" height="300"></u-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				title: '新闻',
				backText: '返回',
				backIconName: 'arrow-left',
				right: false,
				showAction: false,
				rightSlot: false,
				useSlot: false,
				background: {
					'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				isBack: true,
				search: false,
				custom: false,
				isFixed: true,
				keyword: '',
				// #ifdef MP
				slotRight: false,
				// #endif
				// #ifndef MP
				slotRight: true
				// #endif
			}
		},
		onLoad() {

		},
		methods: {
titleChange(index) {
				this.title = index == 0 ? true : false;
			},
			modeChange(index) {
				this.mode = index == 0 ? 'round' : index == 1 ? 'rect' : index == 2 ? 'number' : 'none';
			},
			indicatorPosChange(index) {
				this.indicatorPos = index == 0 ? 'topLeft' : index == 1 ? 'topRight' : index == 2 ? 'bottomLeft' : index == 3 ? 'bottomCenter'  : 'bottomRight';
			},
			effect3dChange(index) {
				this.effect3d = index == 0 ? true : false;
			},
			click(index) {
				this.$refs.uToast.show({
					title: `点击了第${index + 1}张图片`,
					type: 'success'
				})
			},
			change(index) {
				// console.log(index);
			}
		}
	}
</script>

<style>
	.item {
		margin: 30rpx 0;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
