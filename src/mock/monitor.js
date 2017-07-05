import Mock from 'mockjs'

const List = [];
const count = 20;

for(let i=0; i< count; i++) {
	List.push(Mock.mock({
		id: '@id',
		device_name: '@cword(4,10)',
		monitor: '@ctitle(2,4)',
		data: '@id',
		unit: 'h',
		status: '0'
	}));
}

export default {
	getMonitorList: () => List
}

