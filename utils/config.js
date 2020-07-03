/**
 * by: lee
 * 数据请求配置
 */

//域名配置
const domain_prod = "https://admin.51xps.ltd";
const domain_dev = "http://192.168.200.72";

//生产环境（可在对象里继续添加其他配置项）
const production = {
	SERVICE: domain_prod + "/insproject-web-app/app", //项目路径
	RESOURCES: domain_prod + "" //静态资源路径
};


//开发环境
const development = {
	SERVICE: domain_dev + "/insproject-web-app/app", //项目路径
	RESOURCES: domain_dev + "" //静态资源路径
};

const d = {
	//配置对象
	OPTION: {},
	//当前环境
	environment: "",
	//获取当前域名
	domain: ""
}

import Vue from 'vue'

export default {
	domain: d,
	//设置环境
	setEnvironment: (type) => {
		if (type == "dev") { //开发
			//取消 vue 的所有日志与警告
			Vue.config.silent = false;
			d.OPTION = development;
			d.environment = "DEV";
			d.domain = domain_dev;
		} else { //生产
			//取消 vue 的所有日志与警告
			Vue.config.silent = true;
			d.OPTION = production;
			d.environment = "PROD";
			d.domain = domain_prod;
		}
	}
}
