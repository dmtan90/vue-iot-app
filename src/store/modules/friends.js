import { addFriend, getFriends, getUnreceivedList, getUnconfirmedList, receiveFriend } from '@/api/main';


const friends = {
	state: {
		/*groups: [
		{
			group_id: 0,
			group: '',
			sub: [
			{
				user_name: '',
				user_id: 0,
			}]
		}]*/
		friendList: [
			{
				friendName: '',
				userType: '',
			}
		],
		unreceivedList: [],	//待接受好友
		unconfirmedList: [] //待对方确认好友请求
	},
	mutations: {
		SET_GROUPS: (state, groups) => {
			state.groups = groups;
		},
		SET_FRIENDLIST: (state, list) => {
			state.friendList = list;
		},
		SET_UNRECEIVED: (state, list) => {
			state.unreceivedList = list;
		},
		SET_UNCONFIRMED: (state, list) => {
			state.unconfirmedList = list;
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
		/*getFriends({ commit }) {
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
		}*/
		getFriends({ commit }) {
			console.log('getFriends');
			return new Promise((resolve, reject) => {
				getFriends().then(response => {
					console.log(response);
					const data = response.data.friendList;
					//const data = Object.keys(response.data).map(key=> response.data[key]);
					console.log(data);
					commit('SET_FRIENDLIST', data);
					resolve();
				}).catch(error => {
					console.log(error);
					reject(error);
				})
			})
		},
		getUnreceivedList({ commit }) {
			return new Promise((resolve, reject) => {
				getUnreceivedList().then(response => {
					const data = response.data.unreceivedFriendlist;
					console.log(data);
					commit('SET_UNRECEIVED', data);
					resolve();
				}).catch(error => {
					console.log(error);
					reject(error);
				})
			})
		},
		getUnconfirmedList({ commit }) {
			return new Promise((resolve, reject) => {
				getUnconfirmedList().then(response => {
					const data = response.data.unconfirmedFriendlist;
					console.log(data);
					commit('SET_UNCONFIRMED', data);
					resolve();
				}).catch(error => {
					console.log(error);
					reject(error);
				})
			})
		},
		//接受好友请求
		receiveFriend({ commit }, data) {
			return new Promise((resolve, reject) => {
				receiveFriend(data).then(response => {
					console.log(response);
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