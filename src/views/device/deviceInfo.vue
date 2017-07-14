<template>
	<div class="device-info">
		<!--header-->
		<mu-appbar title='设备信息' class='header'>
			<router-link to='/devices' slot='left'>
				<mu-icon-button icon='keyboard_arrow_left' style='color: #fff'/>
			</router-link>
			<mu-icon-button icon="screen_share" slot="right" ref='button' @click='share'/>
		</mu-appbar>
		<div class="page-part">
			<div>
				<p><span>设备名称：</span> {{ deviceInfo.deviceAlias }}</p>
			</div>
			<div>
				<p><span>设备序列号：</span> {{ deviceInfo.deviceName }} </p>
			</div>
			<div>
				<p><span>产品Key：</span> {{ deviceInfo.productKey }} </p>
			</div>
			<div>
				<p><span>设备商：</span> {{ deviceInfo.providerName }} </p>
			</div>
			<div>
				<p><span>使用商：</span> {{ deviceInfo.userName }} </p>
			</div>
		</div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
	data () {
		return {
			deviceinfo: {
				device_name: '',
				serial: '',
				password: ''
			},
			deviceGroup: 0,
			list: ['我的设备']
		}
	},
	mounted () {
		
	},
	computed:{
			...mapState([
			    "deviceInfo"
			]),
			
		},
	methods: {
		/*back() {
			this.$router.go(-1);
			//this.$router.push({ path: '/devices' });
		},*/
		share() {
			this.$router.push({path: '/devices/share'});
		},
		addDevice() {
			console.log(this.deviceinfo);
			this.$store.dispatch('addDevice', this.deviceinfo).then(() => {
				console.log('添加设备成功！');
				this.$router.push({ path: '/devices' });
			}).catch(err => {
				console.log('添加设备失败!');
			});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped> 
.select {
	text-align: left;
}
.device-info {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 200;
	background-color: #fff;
	.page-part {
		padding-top: 65px;
		padding-left: 15px;
		text-align: left;
		div p{
			padding-left: 10px;
			line-height: 40px;
			span {
				display: inline-block;
				width: 90px;
				text-align: right;
			}
		}
	}
}
</style>