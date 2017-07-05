<template>
	<div class="devices">
		<!--header-->
		<mu-appbar title="设备" class='header'>
        	<mu-icon-button icon="add" slot="right" ref='button' @click='toggle'/>
        </mu-appbar>
        <!-- popmenu -->
        <mu-popover :open='openDialog' :autoPosition='false' :trigger='trigger' :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" @close="handleClose">
        	<mu-menu>
        		<mu-menu-item title='添加设备组' @click='openAddGroup' />
        		<mu-menu-item title='添加设备' to='/adddevice' />
        	</mu-menu>
        </mu-popover>
        <mu-list vlaue='selected'>
        	<mu-list-item title="收藏列表" titleClass='title' solt='left' toggleNested>
        		<mu-list-item slot="nested" title="Starred">
        		</mu-list-item>
        	</mu-list-item>
        	<mu-list-item title="好友分享列表" toggleNested>
        		<mu-list-item slot="nested" title="Starred" vlaue='selected'>
        		</mu-list-item>
        	</mu-list-item>
        	<mu-list-item title="我的设备" toggleNested>
        		<mu-list-item slot="nested" title="Starred">
              		</mu-list-item>
        	</mu-list-item>
        </mu-list>
        <!-- add device group dialog -->
        <mu-dialog :open='addGroupDialog' title='添加设备分组' @close='closeAddGroup'>
        	<mu-text-field hintText='新增设备分组名称' v-model='group_name'></mu-text-field>
        	<mu-flat-button slot='actions' @click='closeAddGroup' primary label='取消' />
        	<mu-flat-button slot='actions' @click='addGroupName' primary label='添加' />
        </mu-dialog>
    </div>
</template>

<script>
export default {
	data () {
		return {
			openDialog: false,
			trigger: null,
			anchorOrigin: {
				vertical: 'bottom',
				horizontal: 'right'
			},
			targetOrigin: {
				vertical: 'top',
				horizontal: 'right'
			},
			addGroupDialog: false,
			group_name: '',
		}
	},
	mounted () {
		this.trigger = this.$refs.button.$el;
	},
	methods: {
		toggle () {
			this.openDialog = !this.openDialog;
		},
		handleClose () {
			this.openDialog = false;
		},
		//打开设备分组对话框
		openAddGroup () {
			this.openDialog = false;
			this.addGroupDialog = true;
			this.group_name = '';
		},
		//关闭添加设备分组对话框
		closeAddGroup () {
			this.addGroupDialog = false;
		},
		//添加设备分组
		addGroupName () {
			this.addGroupDialog = false;
			console.log(this.group_name);
			if(this.group_name) {
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
.title {
	text-align: left;
}
</style>