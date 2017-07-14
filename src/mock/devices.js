import Mock from 'mockjs'

const List = [];
const List1 = [];
const count = 20;

for(let i=0; i< count; i++) {
	List.push(Mock.mock({
		deviceId: '@natural(0)',
		deviceName: '@string("upper", 10,16)',
		deviceAlias: '@ctitle(4,10)',
		deviceSecret: '@string(10)',
		providerName: '@cname()',
		userName: '@first()',
		productKey: '@string("upper", 8)',
		status: '0'
	}));
	List1.push(Mock.mock({
		deviceId: '@natural(0)',
		deviceName: '@string("upper", 10,16)',
		deviceAlias: '@ctitle(4,10)',
		deviceSecret: '@string(10)',
		providerName: '@cname()',
		userName: '@first()',
		productKey: '@string("upper", 8)',
		status: '0'
	}));
}

export default {
	addDevice: () => {
		return 'success';
	},
	getDevices: () => {
		return {
			deviceLists: [
				{
					deviceGroup: '我的设备',
					deviceInformation: List
				},
				{
					deviceGroup: '好友分享设备',
					deviceInformation: List1
				}
			]
		}
	}
}
