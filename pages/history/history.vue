<template>
	<view>
		<u-navbar title-color="#fff" :is-fixed="true" :is-back="false"  title="" >
			<view class="slot-wrap">
				<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" bg-color="transparent" bar-width="60" bar-height="4" active-color="#ffffff" inactive-color="#f0c2ca" :bold="false" :gutter="100"></u-tabs>
			</view>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '小说'
				}, {
					name: '漫画'
				}],
				current: 0
			};
		},
		methods:{
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slot-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		flex: 1;
		/* 如果您想让slot内容与导航栏左右有空隙 */
		padding: 0 60rpx;
	}
</style>
