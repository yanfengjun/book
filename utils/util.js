/**
 * by: lee
 * 工具类
 */
export default {

	/** 
	 * @desc 验证姓名格式是否正确，包括少数名族（不能有字母和汉字）
	 * @author hrc
	 * @date 2018-08-27 17:55:36 
	 * @param str
	 */
	notNumberAndLetter: function(str) {
		return (/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(str));
	},

	/**
	 * 验证手机号格式
	 * @param phone
	 * @constructor
	 */
	verificationPhone: function(phone) {
		return (/^1[3|4|5|7|8][0-9]\d{8}$/.test(phone))
	},

	/**
	 * 验证身份证号码格式是否正确
	 * @param code
	 * @returns {{success: boolean; message: string}}
	 * @constructor
	 */
	identityCodeValid: function(code) {
		let reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
		return reg.test(code.trim());
	},

	/**
	 * 获取对象,数组,字符串长度---length
	 * @param obj
	 * @returns {number}
	 */
	getTheObjectCount: function(obj) {
		let objType = typeof obj;
		if (objType == "string") {
			return obj.length;
		} else if (objType == "object") {
			return Object.keys(obj).length;
		}
		return -1;
	},

	/**
	 * 格式化字符串占位符
	 */
	formatStringArg: function(str, ...rest) {
		return str.replace(/\{(\d+)\}/g, function(m, i) {
			return rest[i];
		});
	},

	/** 
	 * @desc 封装本地存储  
	 * @param isTransformJson 是否要转为JSON字符串
	 */
	setData: function(k, v, isTransformJson = false) {
		if (k && (v != 'undifined' || v != null)) {
			let val = v;
			if (isTransformJson) {
				val = JSON.stringify(v)
			}
			try {
				uni.setStorageSync(k, val);
			} catch (e) {
				// error
			}
		}
	},
	getData: function(k, isTransformObject = false) {
		let value = '';
		try {
			value = uni.getStorageSync(k);
			if (value) {
				// console.log(value);
			}
		} catch (e) {
			// error
		}
		if (isTransformObject) {
			return JSON.parse(value);
		}
		return value;
	},
	delData(k) { //传入k值只清除对应存储，不传全部清除
		if (k) {
			try {
				uni.removeStorageSync(key);
			} catch (e) {
				// error
			}
		} else {
			try {
				uni.clearStorageSync();
			} catch (e) {
				// error
			}
		}
	},
	hasData(k) {
		let value = '';
		try {
			value = uni.getStorageSync(k);
			if (value) {
				// console.log(value);
			}
		} catch (e) {
			// error
		}
		if (isTransformObject) {
			return JSON.parse(value);
		}
		return value != '' && value != undefined && value != null;
	},

	/**
	 * @desc 将日期格式化成指定格式的字符串  
	 * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
	 * @returns 返回格式化后的日期字符串
	 */
	formatDate: function(date, fmt) {
		date = date == undefined ? new Date() : date;
		date = typeof date == 'number' ? new Date(date) : date;
		fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
		let obj = {
			'y': date.getFullYear(), // 年份，注意必须用getFullYear
			'M': date.getMonth() + 1, // 月份，注意是从0-11
			'd': date.getDate(), // 日期
			'q': Math.floor((date.getMonth() + 3) / 3), // 季度
			'w': date.getDay(), // 星期，注意是0-6
			'H': date.getHours(), // 24小时制
			'h': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
			'm': date.getMinutes(), // 分钟
			's': date.getSeconds(), // 秒
			'S': date.getMilliseconds() // 毫秒
		};
		let week = ['天', '一', '二', '三', '四', '五', '六'];
		for (let i in obj) {
			fmt = fmt.replace(new RegExp(i + '+', 'g'), function(m) {
				let val = obj[i] + '';
				if (i == 'w') return (m.length > 2 ? '星期' : '周') + week[val];
				for (let j = 0, len = val.length; j < m.length - len; j++) val = '0' + val;
				return m.length == 1 ? val : val.substring(val.length - m.length);
			});
		}
		return fmt;
	},

	/** 
	 * @Desc: 日期格式化为ISO标准日期 
	 * @param: 
	 */
	formatToISODate: function(data) {
		if (!data) return;
		//如果是字符串就直接返回
		if (isNaN(data)) return data;

		const d = new Date(data + 8 * 3600 * 1000);
		return d.toISOString();
	},

	/** 
	 * @Desc: 日期格式化并拼接当前时间转为字符串
	 * @param: data 日期
	 */
	formatDataToString: function(data) {
		if (!data) return;
		const d = new Date();
		let res = data;

		if (res.indexOf('Z') > 0) {
			res = res.replace(/T|Z/g, ' ');
			return res;
		}

		if (res.indexOf('T') > 0) {
			res = res.substring(0, res.indexOf('T'));
		};
		let hour = d.getHours(); //小时
		if (hour < 10) hour = '0' + hour;
		let minute = d.getMinutes(); //分钟
		if (minute < 10) minute = '0' + minute;
		let second = new Date().getSeconds(); //秒
		if (second < 10) second = '0' + second;
		return res + " " + hour + ":" + minute + ":" + second;
	},

	/** 
	 * @desc 计算两个日期的时间间隔 
	 * @param start 传入日期格式的字符串
	 * @param end  传入日期格式的字符串
	 */
	getDateDiff: function(start, end) {
		const stime = new Date(start).getTime();
		const etime = new Date(end).getTime();
		const usedTime = etime - stime; //两个时间戳相差的毫秒数
		let days = Math.floor(usedTime / (24 * 3600 * 1000));
		//计算出小时数
		let leave1 = usedTime % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
		let hours = Math.floor(leave1 / (3600 * 1000));
		//计算相差分钟数
		let leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
		let minutes = Math.floor(leave2 / (60 * 1000));
		//计算相差秒数
		// let leave3 = leave2%(60*1000)      //计算分钟数后剩余的毫秒数
		// let seconds = Math.round(leave3/1000)
		// console.log(" 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
		let time = "";
		if (days > 0) {
			time = days + "天";
		}
		if (hours > 0) {
			time += hours + "小时";
		}
		if (minutes > 0) {
			time += (minutes + "分钟");
		}
		return time;
	},

	/** 
	 * @desc 根据公共字段分组 
	 * @param arr 数组
	 * @param key 通过什么key分组。
	 * @retrun {field: "", group: []}
	 */
	getGroupArray: function(arr, key) {
		let map = {},
			dest = [];
		for (let i = 0; i < arr.length; i++) {
			let ai = arr[i];
			if (!map[ai[key]]) {
				dest.push({
					field: ai[key],
					group: [ai]
				});
				map[ai[key]] = ai;
			} else {
				for (let j = 0; j < dest.length; j++) {
					let dj = dest[j];
					if (dj.field == ai[key]) {
						dj.group.push(ai);
						break;
					}
				}
			}
		}
		return dest;
	},

	/**
	 * get 请求拼接参数
	 * 用法, 直接传 obj 进来
	 * obj = {
			  name: '天心天地生',
			  age: '24',
			  msg: ''
			}
		返回则为?name=天心天地生&age=24
	 * @param {Object} obj
	 */
	params: function(obj) {
		let result = '';
		let item;
		for (item in obj) {
			if (obj[item] && String(obj[item])) {
				result += `&${item}=${obj[item]}`;
			}
		}
		if (result) {
			result = '?' + result.slice(1);
		}
		return result;
	}
}
