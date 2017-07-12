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
        		<mu-menu-item title='添加设备' to='/devices/adddevice' @click='handleClose' />
        	</mu-menu>
        </mu-popover>
        <mu-list vlaue='selected'>
        	<mu-list-item title="我的设备" :open='false' toggleNested>
        		<mu-icon slot='left' value='view_list'></mu-icon>
        		<!--<mu-list-item slot="nested" title="Starred"></mu-list-item>-->
        		<mu-list-item  v-for='item in deviceList' :key='item.deviceAlias' :title='item.deviceAlias' slot='nested' class='titleStyle'>
        			<mu-icon slot="left" value="cloud_done" color='green'/>
        			<!--<mu-icon slot='right' value='menu'></mu-icon>-->
        			<span slot='describe'>
        				<span slot='left'>设备序列号：{{item.deviceName}}</span></br>
        				<span slot='right'>状态：在线</span>
        			</span>
        			<mu-icon-menu slot="right" icon="menu" tooltip="操作">
        				<mu-menu-item title="查看"  to='/devices/infor'/>
        				<mu-menu-item title="分享" />
        				<mu-menu-item title="删除" />
        			</mu-icon-menu>
        		</mu-list-item>
        	</mu-list-item>
        </mu-list>
        <!-- add device group dialog -->
        <mu-dialog :open='addGroupDialog' title='添加设备分组' @close='closeAddGroup'>
        	<mu-text-field hintText='新增设备分组名称' v-model='group_name'></mu-text-field>
        	<mu-flat-button slot='actions' @click='closeAddGroup' primary label='取消' />
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
			titleStyle: 'titleStyle'
		}
	},
	created () {
		this.$store.dispatch('getDevices')
		//this.fetchData();
	},
	mounted () {
		this.trigger = this.$refs.button.$el;
	},
	computed: {
		deviceList() {
			return this.$store.state.devices.deviceList;
		}
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
<style lang='scss' scoped> 
.title {
	text-align: left;
}
.router-show-enter-active,.router-show-leave-active{
	transition: all .4s;
}
.router-show-enter,.router-show-leave{
	transform:translateX(100%)
}
.titleStyle {
	padding-left: 0px;
	margin-left: 0px;
}
</style>