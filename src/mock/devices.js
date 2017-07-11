import Mock from 'mockjs'

const List = [];
const count = 20;

for(let i=0; i< count; i++) {
	List.push(Mock.mock({
		deviceName: '@ctitle()',
		deviceAlias: '@word(4,10)',
		status: '0'
	}));
}

export default {
	addDevice: () => {
		return 'success';
	},
	getDevices: () => {
		return {
			deviceName: List
		}
	}
}
