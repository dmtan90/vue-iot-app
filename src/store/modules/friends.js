import { addFriend, getFriends } from '@/api/main';


const friends = {
	state: {
		groups: [
		{
			group_id: 0,
			group: '',
			sub: [
			{
				user_name: '',
				user_id: 0,
			}]
		}]
	},
	mutations: {
		SET_GROUPS: (state, groups) => {
			state.groups = groups;
		}
	},

	actions: {
		//添加好友
		addFriend({ commit }, friendInfo) {
			console.log('addFriend');
			return new Promise((resolve, reject) => {
				addFriend(friendInfo).then(response => {
					console.log(response);
					resolve();
				}).catch(error => {
					console.log(error);
					reject(error);
				})
			})
		},
		//获取用户好友列表
		getFriends({ commit }) {
			console.log('getFriends');
			return new Promise((resolve, reject) => {
				getFriends().then(response => {
					console.log(response);
					const data = response.data.friends;
					//const data = Object.keys(response.data).map(key=> response.data[key]);
					console.log(data);
					commit('SET_GROUPS', data);
					resolve();
				}).catch(error => {
					console.log(error);
					reject(error);
				})
			})
		}
	}
};

export default friends;