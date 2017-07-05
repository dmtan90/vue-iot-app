//import { param2Obj } from 'utils';


const user = {
	admin: {
		token: 'admin',
		user_id: 1000001,
		email: 'admin@kinco.cn',
		phone_num: '15836924591'
	}
}


export default {
	register: () => {
		return 'success';
	},
	login: config => {
		console.log('mock');
		const { name } = JSON.parse(config.body);
		console.log(name);
		return user[name];
	},
	getUserinfo: () => ({
		name: 'admin',
		status: '',
		email: 'admin@kinco.cn',
		user_id: '100001',
		tel: '18612569874',
		country: '中国',
		province: '上海',
		company: '步科',
		userType: 'producter',
		token: 'admin'
	})
};