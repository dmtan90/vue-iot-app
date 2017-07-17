<template>
	<div class="friends">
		<!--header-->
		<mu-appbar title="好友" class='header'>
        	<mu-icon-button icon="add" slot="right" ref='button' @click='toggle'/>
        </mu-appbar>
        <!-- popmenu -->
        <mu-popover :open='openMenu' :autoPosition='false' :trigger='trigger' :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" @close="handleClose">
        	<mu-menu>
        		<mu-menu-item title='添加好友列表' @click='openAddGroup'/>
        		<mu-menu-item title='添加好友' @click='openAddFriend'/>
        	</mu-menu>
        </mu-popover>
        <!--<mu-list>
        	<mu-list-item title="我的好友" titleClass='title' toggleNested>
        		<mu-list-item slot="nested" title="Starred">
        		</mu-list-item>
        	</mu-list-item>
        	<mu-list-item title="默认分组1" toggleNested>
        		<mu-list-item slot="nested" title="Starred">
        		</mu-list-item>
        	</mu-list-item>
        </mu-list>-->
        <mu-list>
        	<mu-list-item title="新的好友" to='/friends/newfriends' class='list-item'>
        		<mu-icon slot="left" value="person_add"/>
        	</mu-list-item>
        	<mu-list-item v-for='item in groups' :key='item.group_id' :title='item.group' :open='false' class='group' toggleNested>
        		<mu-icon slot="left" value="people"/>
        		<mu-list-item  v-for='sub in item.sub' :key='sub.user_id' :title='sub.user_name' slot='nested'>
        			<mu-icon slot="left" value="person"/>
        		</mu-list-item>
        	</mu-list-item>
        </mu-list>
        <!-- add friend group dialog -->
        <mu-dialog :open='showAddFriend' title='添加好友' @close='closeDialog'>
        	<mu-text-field hintText='请输入好友用户名' v-model='friendInfo.friendName'></mu-text-field>
        	<mu-select-field v-model='friendInfo.userType' label='请选择好友用户类型' >
        		<mu-menu-item value='producter' title='生产设备厂商'/>
        		<mu-menu-item value='user' title='用户'/>
        	</mu-select-field><br/>
        	<mu-flat-button slot='actions' @click='closeDialog' primary label='取消' />
        	<mu-flat-button slot='actions' @click='addFriend' primary label='添加' />
        </mu-dialog>
        <mu-dialog :open='showAddGroup' title='添加好友列表' @close='closeDialog'>
        	<mu-text-field hintText='新增好友分组名称' v-model='group_name'></mu-text-field>
        	<mu-flat-button slot='actions' @click='closeDialog' primary label='取消' />
        	<mu-flat-button slot='actions' @click='addGroupName' primary label='添加' />
        </mu-dialog>
        <transition name='router-show'>
        	<router-view></router-view>
        </transition>
    </div>
</template>

<script>

export default {
    data () {
		return {
			//menu
			openMenu: false,
			trigger: null,
			anchorOrigin: {
				vertical: 'bottom',
				horizontal: 'right'
			},
			targetOrigin: {
				vertical: 'top',
				horizontal: 'right'
			},
			//groups:[]
			//add friend group
			friendInfo: {
				friendName: '',
				userType: 'user'
			},
			group_name: '',
			showAddGroup: false,
			showAddFriend: false
		}
	},
	created () {
		this.$store.dispatch('getFriends')
		//this.fetchData();
	},
	mounted () {
		this.trigger = this.$refs.button.$el;
	},
	computed: {
		/*fetchData () {
			this.$store.dispatch('getFriends').then(() => {
				console.log('getFriends');
				this.groups = this.$store.state.friends.groups;
			}).catch(err => {
				console.log('error');
			});
		}*/
		groups() {
			return this.$store.state.friends.groups;
		}
	},
	methods: {
		//右上角菜单
		toggle () {
			this.openMenu = !this.openMenu;
		},
		handleClose () {
			this.openMenu = false;
		},
		//打开好友分组对话框
		openAddGroup () {
			this.showAddGroup = true;
			this.group_name = '';
		},
		//添加好友分组
		addGroupName () {
			this.showAddGroup = false;
			console.log(this.group_name);
			if(this.group_name) {
				let groups = this.$store.state.friends.groups;
				for(let i=0, len = groups.length; i < len; i++) {
					console.log(groups[i].group);
				}
			}
		},
		closeDialog() {
			this.showAddGroup = false;
			this.showAddFriend = false;
		},
		//添加好友
		openAddFriend() {
			this.showAddFriend = true;
		},
		addFriend() {
			this.showAddFriend = false;
			console.log(this.friendInfo);
			this.$store.dispatch('addFriend', this.friendInfo).then(() => {
				console.log('添加好友成功！');
				this.$store.dispatch('getFriends')
				this.$router.push({ path: '/friends' });
			}).catch(err => {
				console.log('添加好友失败!');
			});
		}

	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped> 
/*.group {
	background: #e1f5fe;
}*/
.router-show-enter-active,.router-show-leave-active{
	transition: all .4s;
}
.router-show-enter,.router-show-leave{
	transform:translateX(100%)
}
.friends {
	margin: 0 5px;
	.list-item {
		border-bottom: 1px solid lightgray;
	}
}
</style>