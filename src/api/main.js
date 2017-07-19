import axios from '@/utils/http'

//用户注册
export function register(userinfo) {
	console.log('register');
	console.log(userinfo);
	const data = userinfo;
	console.log(data);
	return axios({
		url: '/v1/register',
		method: 'post',
		data
	})
}

//用户登录
export function login(userType, name, password) {
	console.log('api+login');
	const data = {
		userType,
		name,
		password
	};
	return axios({
		url: '/v1/login',
		method: 'post',
		data
	});
}

//获取用户信息
export function getUserinfo() {
	return axios({
		url: '/v1/user_information',
		method: 'get'
	})

}

//用户退出
export function logout() {
	return axios({
		url: '/v1/logout',
		method: 'post'
	});
}

/* 获取用户所有设备列表 */
//注册设备
export function addDevice(data) {
	return axios({
		url: '/v1/register_devices',
		method: 'post',
		data
	})
}

//获取所有设备信息
export function getDevices(token) {
	return axios({
		url: '/v1/devices',
		method: 'get',
		params: { token }
	});
}
//分享设备
export function shareDevice(data) {
	return axios({
		url: '/v1/sharedevice',
		method: 'post',
		data
	})
}

/* 获取好友列表信息 */
export function getFriends() {
	return axios({
		url: '/v1/friendlist',
		method: 'get'
	})
}

//添加好友
export function addFriend(data) {
	return axios({
		url: '/v1/addfriend',
		method: 'post',
		data
	})
}

//获取待接受好友列表
export function getUnreceivedList() {
	return axios({
		url: '/v1/unreceived_friendlist',
		method: 'get'
	})
}

//获取待对方确认的好友列表
export function getUnconfirmedList() {
	return axios({
		url: '/v1/unconfirmed_friendlist',
		method: 'get'
	})
}
//接受好友请求
export function receiveFriend(data) {
	return axios({
		url: '/v1/receivefriend',
		method: 'post',
		data
	})
}