import Mock from 'mockjs'

const List1 = [];
const List2 = [];
const List = [];
const unreceivedList = [];
const unconfirmedList = [];
const count = 20;
const count1 = 5;

for(let i=0; i< count; i++) {
	List1.push(Mock.mock({
		user_id: '@id',
		user_name: '@cname',
	}));
	List2.push(Mock.mock({
		user_id: '@id',
		user_name: '@cname',
	}));
	List.push(Mock.mock({
		friendName: '@cname',
		userType: 'user',
	}));
}
for(let i=0; i< count1; i++) {
	unreceivedList.push(Mock.mock({
		friendName: '@cname',
		userType: 'user',
	}));
	unconfirmedList.push(Mock.mock({
		friendName: '@cname',
		userType: 'user',
	}));
}

export default {
	addFriend: () => {
		return 'success';
	},
	/*getFriends: () => {
		return {
			friends: [
			{
				id: 1,
				group: '我的好友',
				group_id: 0,
				sub: List1
			},
			{
				id: 2,
				group: '特殊好友',
				group_id: 1,
				sub: List2
			}
			]
		}
	}*/
	getFriends: () => {
		return {
			friendList: List
		}
	},
	getUnreceivedList: () => {
		return {
			unreceivedFriendlist: unreceivedList
		}
	},
	getUnconfirmedList: () => {
		return {
			unconfirmedFriendlist: unconfirmedList
		}
	},
	receiveFriend: () => {
		return 'success';
	}
}
