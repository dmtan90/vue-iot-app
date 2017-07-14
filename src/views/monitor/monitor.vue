<template>
	<div class="monitor">
		<mu-appbar title="监控" class='header' >
        	<mu-icon-button icon="add" slot="right" ref='button' @click='toggle'/>
        </mu-appbar>
        <!-- popmenu -->
        <mu-popover :open='openMenu' :autoPosition='false' :trigger='trigger' :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" @close="handleClose">
        	<mu-menu>
        		<mu-menu-item title='添加监控点' to='/monitor/addmonitor' @click='handleClose'/>
        	</mu-menu>
        </mu-popover>
        <mu-table  :showCheckbox='false'>
        	<mu-thead slot='header'>
        		<mu-tr>
        			<mu-th tooltip='名称'>名称</mu-th>
        			<mu-th tooltip='数值'>数值</mu-th>
        			<mu-th tooltip='单位'>单位</mu-th>
        			<mu-th tooltip='操作'>操作</mu-th>
        		</mu-tr>
        	</mu-thead>
        	<mu-tbody id='sortable'>
        		<mu-tr v-for='item,index in tableData' :key='index'>
        			<mu-td class='drag-handler'><p style='color: green'> {{item.monitor}} </p><p class="small"> {{item.device_name}} </p></mu-td>
        			<mu-td><mu-switch v-model="item.flag" class="demo-switch" /></mu-td>
        			<mu-td> {{item.unit}} </mu-td>
        			<mu-td class='last'>
        				<!--<mu-flat-button label="查看详情" class="demo-flat-button" primary/>-->
        				<mu-icon-menu icon="menu" tooltip="操作" :anchorOrigin="targetOrigin" :targetOrigin="targetOrigin">
        					<mu-menu-item title="查看" @click='getMonitorInfo(item)'/>
        					<mu-menu-item title="删除" @click='handleDelete(item)'/>
        				</mu-icon-menu>
        			</mu-td>
        		</mu-tr>
        	</mu-tbody>
        </mu-table>
        <!-- add device group dialog -->
        <mu-dialog :open='dialogVisible' title='删除' @close='closeDelDialog'>
        	<p>确定删除监控点: {{temp.monitor}} ?</p>
        	<mu-flat-button slot='actions' @click='closeDelDialog' primary label='取消' />
        	<mu-flat-button slot='actions' @click='delMonitor' primary label='确定' />
        </mu-dialog>
        <transition name='router-show'>
        	<router-view></router-view>
        </transition>
    </div>
</template>

<script>
import Sortable from 'sortablejs'
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
			tableData: [],
			newList: [],
			fixedHeader: true,
			dialogVisible: false,
			temp: {
				id: -1,
				monitor: '',
				device_name: ''
			}
		}
	},
	created() {
		this.getMonitorList();
		this.$store.state.selected = 'monitor';
	},
	mounted () {
		this.trigger = this.$refs.button.$el;
	},
	methods: {
		//右上角菜单
		toggle () {
			this.openMenu = !this.openMenu;
		},
		handleClose () {
			this.openMenu = false;
		},
		getMonitorList() {
			this.$store.dispatch('getMonitorList').then(() => {
				console.log('获取监控数据列表成功！');
				this.tableData = this.$store.state.monitors.list;
				this.$nextTick(() => {
					this.setSort()
				})
			}).catch(err => {
				console.log('获取监控数据列表失败！');
			});
		},
		setSort() {
			const el = document.getElementById('sortable');
			this.sortable = Sortable.create(el, {
				handle: '.drag-handler',
				onEnd: evt => {
					console.log('oldIndex: ' + evt.oldIndex + '; newIndex: ' + evt.newIndex);
					const tempIndex = this.newList.splice(evt.oldIndex, 1)[0];
					console.log(tempIndex);
					this.newList.splice(evt.newIndex, 0, tempIndex);
					console.log(this.tableData);
				}
			});
		},
		getMonitorInfo(value) {
			this.temp.id = value.id;
			this.temp.monitor = value.monitor;
			this.temp.device_name = value.device_name;
			this.$router.push('/monitor/infor');
			//this.$router.go(1);
		},
		handleDelete(value) {
			this.dialogVisible = true;
			this.temp.monitor = value.monitor;
			this.temp.device_name = value.device_name;
		},
		closeDelDialog() {
			this.dialogVisible = false;
		},
		delMonitor() {
			this.dialogVisible = false;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
.mu-th,.mu-td {
	/*border: 1px solid orange;*/
	height: 60px;
	padding: 2px;
	text-align: center;
}
.small {
	/*overflow: hidden;*/
	color: lightgray;
	font-size: 10px;
	width: 100px;
	/*border: 1px solid red;*/
}
.router-show-enter-active,.router-show-leave-active{
	transition: all .4s;
}
.router-show-enter,.router-show-leave{
	transform:translateX(100%)
}
</style>
