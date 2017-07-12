import Mock from 'mockjs'

const List = [];
const count = 20;

for(let i=0; i< count; i++) {
	List.push(Mock.mock({
		deviceName: '@string("upper", 10,16)',
		deviceAlias: '@ctitle(4,10)',
		status: '0'
	}));
}

export default {
	addDevice: () => {
		return 'success';
	},
	getDevices: () => {
		return {
			deviceLists: List
		}
	}
}
