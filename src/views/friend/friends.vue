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
        		<mu-menu-item title='添加好友' />
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
        	<mu-list-item v-for='item in groups' :key='item.group_id' :title='item.group' :open='false' class='group' toggleNested>
        		<mu-list-item  v-for='sub in item.sub' :key='sub.user_id' :title='sub.user_name' slot='nested'></mu-list-item>
        	</mu-list-item>
        </mu-list>
        <!-- add friend group dialog -->
        <mu-dialog :open='addGroupDialog' title='添加好友列表' @close='closeAddGroup'>
        	<mu-text-field hintText='新增好友分组名称' v-model='group_name'></mu-text-field>
        	<mu-flat-button slot='actions' @click='closeAddGroup' primary label='取消' />
        	<mu-flat-button slot='actions' @click='addGroupName' primary label='添加' />
        </mu-dialog>
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
			addGroupDialog: false,
			group_name: '',
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
			this.addGroupDialog = true;
			this.group_name = '';
		},
		//关闭添加好友分组对话框
		closeAddGroup () {
			this.addGroupDialog = false;
		},
		//添加好友分组
		addGroupName () {
			this.addGroupDialog = false;
			console.log(this.group_name);
			if(this.group_name) {
				let groups = this.$store.state.friends.groups;
				for(let i=0, len = groups.length; i < len; i++) {
					console.log(groups[i].group);
				}
			}
		}

	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
/*.group {
	background: #e1f5fe;
}*/
</style>