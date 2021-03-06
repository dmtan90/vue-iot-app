import { login, register, getUserinfo } from '@/api/main';
import Cookies from 'js-cookie';

const user = {
	state: {
		name: '',
		status: '',
		email: '',
		user_id: '',
		tel: '',
		country: '',
		province: '',
		company: '',
		userType: '',
		token: '',
		devices: [],
		login: 0
	},
	mutations: {
		SET_USERNAME: (state, name) => {
			state.name = name;
		},
		SET_USERID: (state, user_id) => {
			state.user_id = user_id;
		},
		SET_EMAIL: (state, email) => {
			state.email = email;
		},
		SET_PHONE_NUMBER: (state, phone_num) => {
			state.tel = phone_num;
		},
		SET_TOKEN: (state, token) => {
			state.token = token;
		},
		SET_DEVICES: (state, devices) => {
			state.devices = devices;
		},
		SET_LOGIN: (state, login) => {
			state.login = login;
		},
		SET_COUNTRY: (state, country) => {
			state.country = country;
		},
		SET_PROVINCE: (state, province) => {
			state.province = province;
		},
		SET_COMPANY: (state, company) => {
			state.company = company;
		},
		SET_USERTYPE: (state, usertype) => {
			state.usertype = usertype;
		}
	},

	actions: {
		//用户注册
		userRegister({ commit }, userinfo) {
			return new Promise((resolve, reject) => {
				register(userinfo).then(response => {
					console.log(response);
					const data = response.data;
					console.log(data);
					resolve();
				}).catch(error => {
					console.log(error);
					reject(error);
				})
			})
		},
		//用户登录
		userLogin({ commit }, userinfo) {
			//const email = userinfo.email.trim();
			//commit('SET_LOGIN', 1);
			console.log(userinfo.name + ' ' +  userinfo.password);
			return new Promise((resolve, reject) => {
				login(userinfo.userType, userinfo.name, userinfo.password).then(response => {
					console.log(response);
					const data = response.data;
					console.log(response.data);
					Cookies.set('username', userinfo.name, { expires: 365 });
					Cookies.set('password', userinfo.password, { expires: 365 });
					Cookies.set('usertype', userinfo.userType, { expires: 365 });
					const token = 'username=' + Cookies.get('username') + ';password=' + Cookies.get('password') + ';usertype=' + Cookies.get('usertype');
					console.log(token);
					commit('SET_USERNAME', userinfo.name);
					commit('SET_TOKEN', token);
					
					resolve();
				}).catch(error => {
					console.log(error);
					reject(error);
				})
			})
		},
		//获取用户信息
		getUserinfo({ commit }) {
			return new Promise((resolve, reject) => {
				getUserinfo().then(response => {
					const data = response.data;
					console.log(data);
					commit('SET_EMAIL', data.email);
					commit('SET_USERID', data.user_id);
					commit('SET_COMPANY', data.company);
					commit('SET_PHONE_NUMBER', data.tel);
					commit('SET_COUNTRY', data.country);
					commit('SET_PROVINCE', data.province);
					commit('SET_USERTYPE', data.userType);
					resolve();
				}).catch(error => {
					console.log(error);
					reject(error);
				})
			})
		}
	}
};

export default user;