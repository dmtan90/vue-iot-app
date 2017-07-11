import { addDevice, getDevices } from '@/api/main';

const devices = {
	state: {
		deviceList: [
			{
				deviceName: '',
				deviceAlias: '',
				password: ''
			}
		]
	},
	mutations: {
		/*SET_SERIAL: (state, serial) => {
			state.serial = serial;
		},
		SET_DEVICENAME: (state, device_name) => {
			state.device_name = device_name;
		},
		SET_PASSWORD: (state, password) => {
			state.password = password;
		},*/
		SET_DEVICELIST: (state, list) => {
			state.deviceList = list;
		}
	},

	actions: {
		//注册设备
		addDevice({ commit }, deviceinfo) {
			return new Promise((resolve, reject) => {
				const addData = '{ "productKey": "", "deviceLists":[  {"deviceName": "' + deviceinfo.deviceName + '", "deviceAlias": "' + deviceinfo.deviceAlias + '"}]}';  
				console.log(addData);
				addDevice(addData).then(response => {
					console.log(response);
					const data = response.data;
					console.log(data);
					//commit('SET_SERIAL', deviceinfo.serial);
					//commit('SET_DEVICENAME', deviceinfo.device_name);
					resolve();
				}).catch(error => {
					console.log(error);
					reject(error);
				})
			})
		},
		//查看用户拥有设备
		getDevices({commit}) {
			return new Promise((resolve, reject) => {
				getDevices().then(response => {
					console.log(response);
					const data = response.data.deviceName;
					console.log(data);
					commit('SET_DEVICELIST', data);
				}).catch(error => {
					console.log(error);
					reject(error);
				})
			})
		}

	}
};

export default devices;