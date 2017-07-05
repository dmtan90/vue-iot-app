
const devices = {
	state: [
		{
			serial: '',
			device_name: '',
			password: ''
		}
	],
	mutations: {
		SET_SERIAL: (state, serial) => {
			state.serial = serial;
		},
		SET_DEVICENAME: (state, device_name) => {
			state.device_name = device_name;
		},
		SET_PASSWORD: (state, password) => {
			state.password = password;
		}
	},

	actions: {
		//注册设备
		addDevice({ commit }, deviceinfo) {
			return new Promise((resolve, reject) => {
				register(userinfo).then(response => {
					console.log(response);
					const data = response.data;
					console.log(data);
					commit('SET_SERIAL', data.serial);
					commit('SET_DEVICENAME', data.device_name);
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