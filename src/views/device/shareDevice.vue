<template>
	<div class="share-device">
		<!--header-->
		<mu-appbar title='分享设备' class='header'>
			<mu-icon-button icon='clear' style='color: #fff' @click='back' slot='left'/>
			<mu-flat-button label="确定" slot='right'@click='showShare'/>
		</mu-appbar>
		<p>分享设备 HMI1 给好友：{{ friend_id }}</p>
		<div class="page-part">
			
			<!--<mu-list v-for='item in groups'>
				<mu-sub-header :key='item.group_id'>{{ item.group }}</mu-sub-header>
				<mu-list-item v-for='sub in item.sub' :title='sub.user_name' disableRipple >
					<mu-checkbox v-model="friend_id" slot="left"/>
				</mu-list-item>
			</mu-list>-->
			<div v-for='item in groups' :key='item.group_id'>
				<mu-sub-header>{{ item.group }}</mu-sub-header>
				<div v-for='sub in item.sub' :key='sub.user_name'>
					<mu-checkbox :name="item.group" :nativeValue="sub.user_name" v-model="friend_id" :label="sub.user_name" class="demo-checkbox"/> <br/>
				</div>
			</div>
		</div>
		 <!-- ensure share dialog -->
        <mu-dialog :open='shareDialog' title='分享给' @close='cancelShare' scrollable>
        	</br>
        	<p>设备：{{deviceInfo.deviceAlias}}</p>
        	<mu-menu>
        		<mu-menu-item :title="item" v-for="item, index in friend_id" :key="index"/>
        	</mu-menu>
        	<mu-flat-button slot='actions' @click='cancelShare' primary label='取消' />
        	<mu-flat-button slot='actions' @click='shareDevice' primary label='发送' />
        </mu-dialog>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	data () {
		return {
			deviceinfo: {
				device_name: '',
				serial: '',
				password: ''
			},
			deviceGroup: 0,
			list: ['我的设备'],
			friend_id: [],
			shareDialog: false

		}
	},
	created () {
		this.$store.dispatch('getFriends')
		//this.fetchData();
	},
	mounted () {
		
	},
	computed: {
		...mapState([
			"deviceInfo"
		]),
		groups() {
			return this.$store.state.friends.groups;
		}
	},
	methods: {
		back() {
			this.$router.go(-1);
			//this.$router.push({ path: '/devices' });
		},
		handleToggle (key) {
			this[key] = !this[key]
		},
		addDevice() {
			console.log(this.deviceinfo);
			this.$store.dispatch('addDevice', this.deviceinfo).then(() => {
				console.log('添加设备成功！');
				this.$router.push({ path: '/devices' });
			}).catch(err => {
				console.log('添加设备失败!');
			});
		},
		showShare() {
			this.shareDialog = true;
		},
		cancelShare() {
			this.shareDialog = false;
		},
		shareDevice() {
			this.shareDevice = false;
			this.$router.go(-1);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped> 
.select {
	text-align: left;
}
.share-device {
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 200;
	background-color: #fff;
	p {
		position: absolute;
		top: 50px;
		left: 0;
		width: 100%;
		line-height: 40px;
		z-index: 300;
		background-color: #fff;
		border-bottom: 1px solid lightgray;
		text-align: left;
		padding-left: 14px;
	}
	.page-part {
		position: absolute;
		padding-top: 10px;
		top: 10px;
		left: 0;
		right: 0;
		bottom: 0;
		text-align: left;
		padding-left: 15px;
		padding-bottom: 2px;
		margin-bottom: 1px;
		overflow: scroll;
		//border: 1px solid red;
	}
}
</style>