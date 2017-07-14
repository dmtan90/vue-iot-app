import { addDevice, getDevices } from '@/api/main';

const devices = {
	state: {
		deviceinfo: {},
		deviceLists: [
			{
				deviceGroup: '',
				deviceInformation: [
					{
						deviceId: '',		//设备ID
						deviceName: '',		//设备序列号
						deviceAlias: '',	//设备别名（设备名）
						deviceSecret: '',	//设备绑定密码
						providerName: '',	//设备商名称
						userName: '',		//使用商名称
						productKey: '',		//产品key
					}
				]
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
		SET_DEVICEINFO: (state, info) => {
			state.deviceinfo = info;
		},
		SET_DEVICELIST: (state, list) => {
			state.deviceLists = list;
		}
	},

	actions: {
		//注册设备
		addDevice({ commit }, deviceinfo) {
			console.log(deviceinfo);
			return new Promise((resolve, reject) => {
				const addData = '{ "productKey": "", "deviceLists":[  {"deviceName": "' + deviceinfo.serial + '", "deviceAlias": "' + deviceinfo.device_name + '"}]}';  
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
					const data = response.data.deviceLists;
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