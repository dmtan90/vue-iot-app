import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/register'

import main from '@/components/main'
import monitor from '@/views/monitor/monitor'
import devices from '@/views/device/devices'
import warning from '@/components/warning'
import friends from '@/views/friend/friends'
import usersetting from '@/views/user/settings'

import addDevice from '@/views/device/addDevice'
import addMonitor from '@/views/monitor/addMonitor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
    	path:'/main',
    	component: main,
    	children:[
    		{
    			path: '/main',
    			component: main
    		},
    		{
    			path: '/monitor',
    			component: monitor
    		},
    		{
    			path: '/warning',
    			component: warning
    		},
    		{
    			path: '/devices',
    			component: devices
    		},
    		{
    			path: '/friends',
    			component: friends
    		},
    		{
    			path: '/settings',
    			component: usersetting
    		}
    	]
    },
    {
        path: '/adddevice',
        name: 'addDevice',
        component: addDevice
    },
    {
        path: '/addmonitor',
        name: 'addMonitor',
        component: addMonitor
    }
  ]
})
