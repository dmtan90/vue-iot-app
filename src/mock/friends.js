import Mock from 'mockjs'

const List1 = [];
const List2 = [];
const count = 10;

for(let i=0; i< count; i++) {
	List1.push(Mock.mock({
		user_id: '@id',
		user_name: '@cname',
	}));
	List2.push(Mock.mock({
		user_id: '@id',
		user_name: '@cname',
	}));
}

export default {
	getFriends: () => {
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
	}
}
