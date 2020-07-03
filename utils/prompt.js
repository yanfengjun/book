/**
 * by: lee
 * 提示语对象
 */
export default {

	/**
	 *  1. 默认提示语
	 */
	showDefaultAlert: function(title = ' 提示', msg = '异常', confirmText = '我知道了') {
		uni.showModal({
			title: title,
			showCancel: false,
			content: msg,
			confirmText: confirmText,
			success: function(res) {
				if (res.confirm) {
					// console.log('用户点击确定');
				}
			}
		});
	},

	/**
	 * 2. 默认提示语-确定按钮颜色
	 */
	showDefaultAlertConfirmColor: function(title = ' 提示', msg = '异常', confirmText = '我知道了', confirmColor = '#007aff') {
		uni.showModal({
			title: title,
			showCancel: false,
			content: msg,
			confirmText: confirmText,
			confirmColor: confirmColor,
			success: function(res) {
				if (res.confirm) {
					// console.log('用户点击确定');
				}
			}
		});
	},

	/**
	 * 3. 默认提示语- 成功点击事件
	 */
	showDefaultAlertConfirmEvent: function(title = ' 提示', msg = '异常', confirmText = '我知道了', success) {
		uni.showModal({
			title: title,
			showCancel: false,
			content: msg,
			confirmText: confirmText,
			success: function(res) {
				if (res.confirm) {
					success && success()
				}
			}
		});
	},

	/**
	 * 4. 默认提示语- 成功点击事件
	 */
	showDefaultAlertConfirmFail: function(title = ' 提示', msg = '异常', confirmText = '我知道了', success) {
		uni.showModal({
			title: title,
			showCancel: true,
			content: msg,
			confirmText: confirmText,
			success: function(res) {
				if (res.confirm) {
					success && success()
				} else if (res.cancel) {
					// console.log('用户点击取消');
				}
			}
		});
	},

	/**
	 * 5. 默认提示语- 失败点击事件
	 */
	showDefaultAlertConfirmCanFail: function(title = ' 提示', msg = '异常', confirmText = '我知道了', success, fail) {
		uni.showModal({
			title: title,
			showCancel: true,
			content: msg,
			confirmText: confirmText,
			success: function(res) {
				if (res.confirm) {
					success && success()
				} else if (res.cancel) {
					fail && fail()
				}
			}
		});
	},

	/**
	 * app原生弹窗
	 * @param {Object} options
	 */
	showAppPlusModal(options) {
		let params = {
			title: '', //标题
			content: '', //内容
			showCancel: false, //是否显示取消按钮
			align: "center", // 对齐方式 left/center/right
			cancelText: "取消", // 取消按钮的文字
			cancelColor: "#8F8F8F", // 取消按钮颜色
			confirmText: "确定", // 确认按钮颜色
			confirmColor: "#3181ee", // 确认按钮颜色 
		}
		Object.assign(params, options)
		let list = []
		Object.keys(params).forEach(ele => {
			list.push(ele + "=" + params[ele])
		})
		let paramsStr = list.join('&')
		uni.navigateTo({
			url: "/pages/modal/modal?" + paramsStr
		})
		return new Promise((resolve, reject) => {
			uni.$once("AppModalCancel", () => {
				reject()
			})
			uni.$once("AppModalConfirm", () => {
				resolve()
			})
		});
	},

	/**
	 * 6. 默认土司
	 */
	showToast: function(msg = 'toast', duration = 1500) {
		uni.showToast({
			title: msg,
			mask: true,
			duration: 10000,
			icon: 'none'
		});

		setTimeout(() => {
			uni.hideToast();
		}, duration);

	},

	/**
	 * 7. 带图标土司
	 * icon: none/loading/success
	 */
	showToastIcon: function(msg = 'toast', icon, duration = 1500) {
		uni.showToast({
			title: msg,
			mask: true,
			icon: icon,
			duration: duration,
		});
	},

	/**
	 * 8. 带图片土司
	 * image: ../../static/logo.png
	 */
	showToastImage: function(msg = 'toast', image, duration = 1500) {
		uni.showToast({
			title: msg,
			mask: true,
			image: image,
			duration: duration,
		});
	},

	/**
	 * 9.  关闭土司
	 */
	hideToast: function() {
		uni.hideToast();
	},

	/**
	 * 10.  loading
	 */
	showLoading: function(msg = ' 加载中') {
		uni.showLoading({
			title: msg,
			mask: true
		});
	},

	/**
	 * 11.   关闭loading
	 */
	hideLoading: function() {
		uni.hideLoading();
	}
}
