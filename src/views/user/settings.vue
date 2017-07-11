<template>
	<div class="settings">
		<!--header-->
		<mu-appbar title="个人设置" class='header'></mu-appbar>
		<mu-list>
			<mu-list-item :title='userinfo.name' disabled>
				<mu-avatar slot='leftAvatar' src="../../assets/logo.png" :iconSize='40'/>
			</mu-list-item>
		</mu-list>
		<ul class='userinfo'>
			<li>
				<p>用户名：</p>
				<p> {{userinfo.name}} </p>
			</li>
			<li>
				<p>邮箱：</p>
				<p> {{userinfo.email}} </p>
			</li>
			<li>
				<p>手机号码：</p>
				<p> {{userinfo.tel}} </p>
			</li>
			<li>
				<p>公司名称：</p>
				<p> {{userinfo.company}} </p>
			</li>
			<li>
				<p>地址：</p>
				<p> {{userinfo.country}}, {{userinfo.province}} </p>
			</li>
			<li>
				<p>用户类型：</p>
				<p> {{userinfo.userType}} </p>
			</li>
		</ul>
		<br/>
		<mu-raised-button label="退出登录" class="demo-raised-button" primary  @click="showlogout"/>
		<mu-bottom-sheet :open='open' @close='close'>
			<mu-list @itemClick='close'>
				<mu-list-item titleClass='logout' title='退出当前账号' @click='userlogout' />
				<mu-list-item title='取消' />
			</mu-list>
		</mu-bottom-sheet>
		<!--<mu-dialog :open='open' title='退出' @close='close'>
        	<p>确定退出当前账号?</p>
        	<mu-flat-button slot='actions' @click='close' primary label='取消' />
        	<mu-flat-button slot='actions' @click='userlogout' primary label='确定' />
        </mu-dialog>-->
    </div>
</template>

<script>
export default {
	created() {
		this.$store.dispatch('getUserinfo')
	},
	data () {
		return {
			/*userinfo: {
				name: '',
				email: '',
				tel: '',
				company: '',
				country: '',
				province: ''
			},*/
			open: false
		}
	},
	computed: {
		userinfo() {
			return {
				name: this.$store.state.user.name,
				email: this.$store.state.user.email,
				tel: this.$store.state.user.tel,
				company: this.$store.state.user.company,
				country: this.$store.state.user.country,
				province: this.$store.state.user.province,
				userType: this.$store.state.user.userType
			}
		}
	},
	methods: {
		userlogout() {
			this.$router.push({ path: '/' });
			console.log(this.$store.state.user.name)
		},
		close () {
			this.open = false;
		},
		showlogout() {
			this.open = true;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped> 
.userinfo {
	list-style: none;
	li {
		width: 100%;
		height: 50px;
		border-bottom: 1px solid lightgray;
		line-height: 50px;
		text-align: left;
		margin-left: 0;
		padding-left: 10px;
		:first-child {
			//border: 1px solid red;
			display: inline-block;
			width: 75px;
			text-align: right;
		}
		:last-child {
			//border: 1px solid red;
			display: inline-block;
			width: 200px;
			margin-left: 5px;
		}
	}
}
.logout {
	color: #f44336;
}
</style>
