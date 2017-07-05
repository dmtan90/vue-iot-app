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
export function addDevices() {
	return axios({
		url: '/v1/register_devices',
		method: 'post'
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

/* 获取好友列表信息 */
export function getFriends() {
	return axios({
		url: '/v1/friends',
		method: 'get'
	})
}