/**
 * by: lee
 * 数据请求
 */
import prompt from './prompt.js'
import config from './config.js'
import utils from './util.js'

export var request = async (url = "", data = {}, success, fail, complete, showLoading = false) => {

	// 拼接配置url
	url = config.domain.OPTION.SERVICE + url;

	//弹窗标记
	let flag = undefined;

	//拼接用户信息
	let fu = utils.getData('user');
	if (fu) {
		data['user'] = fu;
	}

	//显示 loading
	if (showLoading) {
		prompt.showLoading();
	}

	//请求
	uni.request({
		url: url,
		data: data,
		method: 'POST',
		header: {
			"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
		},
		success: (res) => {
			switch (res.statusCode) {
				case 0:
					prompt.showDefaultAlert('提示', '暂无网络');
					break;
				case 200:
					if (res.data.success) {
						success && success(res.data);
					} else {
						prompt.showDefaultAlert('提示', res.data.msg);
					}
					break;
				case 400:
					prompt.showDefaultAlert('提示', '请求参数有误');
					break;
				case 404:
					flag = utils.getData('showPrompt');
					if (!flag) {
						prompt.showDefaultAlert('提示', '请求未找到');
						utils.setData('showPrompt', true);
					}
					setTimeout(() => {
						utils.delData('showPrompt')
					}, 1000);
					break;
				case 500:
					flag = utils.getData('showPrompt');
					if (!flag) {
						prompt.showDefaultAlert('提示', '后台请求报错, 请联系管理员');
						utils.setData('showPrompt', true);
					}
					setTimeout(() => {
						utils.delData('showPrompt')
					}, 1000);
					break;
			}
		},
		fail: (e) => {
			flag = utils.getData('showPrompt');
			if (!flag) {
				prompt.showDefaultAlert('提示', '请求失败');
				utils.setData('showPrompt', true);
			}
			setTimeout(() => {
				utils.delData('showPrompt')
			}, 1000);
			fail && fail(e)
		},
		complete: () => {
			prompt.hideLoading();
			complete && complete();
		}
	})
}
