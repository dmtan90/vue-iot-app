<template>
	<div class="new-friends">
		<!--header-->
        <mu-appbar title='新的好友' class='header'>
			<router-link to='/friends' slot='left'>
				<mu-icon-button icon='keyboard_arrow_left' style='color: #fff'/>
			</router-link>
			<mu-icon-button icon="add" slot="right" />
		</mu-appbar>
		<div class="page-part">
			<mu-tabs :value="activeTab" @change="handleTabChange" class='tabs' >
				<mu-tab value="tab1" title="好友请求" />
				<mu-tab value="tab2" title="待好友确认" />
			</mu-tabs>
			<div v-if="activeTab === 'tab1'">
				<h2>Tab One</h2>
				<p>这是第一个 tab</p>
			</div>
			<div v-if="activeTab === 'tab2'">
				<h2>Tab Two</h2>
				<p>这是第二个 tab</p>
			</div>
		</div>
    </div>
</template>

<script>

export default {
    data () {
		return {
			//add friend group
			addGroupDialog: false,
			group_name: '',
			activeTab: 'tab1'
		}
	},
	created () {
		this.$store.dispatch('getFriends')
		//this.fetchData();
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
		handleTabChange(val) {
			this.activeTab = val;
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped> 
/*.group {
	background: #e1f5fe;
}*/
.new-friends {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 200;
	background-color: #fff;
	.page-part {
		padding-top: 60px;
		.tabs {
			background-color: #fff;
		}
	}
}

.mu-tab-link {
	color: #000;
}
.mu-tab-active {
	color: #2196f3;
}
</style>