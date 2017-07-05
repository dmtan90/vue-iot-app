import { getMonitorList } from '@/api/monitor';


const monitors = {
	state: {
		list: [
		{
			id: 0,
			device_name: '',
			monitor: '',
			unit: '',
			status: 0,
			data: 0 
		}]
	},
	mutations: {
		SET_MONITORLIST: (state, list) => {
			state.list = list;
		}
	},

	actions: {
		//获取监控数据列表
		getMonitorList({ commit }) {
			return new Promise((resolve, reject) => {
				getMonitorList().then(response => {
					console.log(response);
					const data = Object.keys(response.data).map(key=> response.data[key]);
					console.log(data);
					commit('SET_MONITORLIST', data);
					resolve();
				}).catch(error => {
					console.log(error);
					reject(error);
				})
			})
		}
	}
};

export default monitors;