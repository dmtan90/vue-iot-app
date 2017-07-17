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
import deviceInfo from '@/views/device/deviceInfo'
import shareDevice from '@/views/device/shareDevice'
import addMonitor from '@/views/monitor/addMonitor'
import monitorInfo from '@/views/monitor/monitorInfo'
import newFriends from '@/views/friend/newFriends'

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
    			component: monitor,
                children: [
                    {
                        path: '/monitor/infor',
                        name: 'monitorInfo',
                        component: monitorInfo
                    },
                    {
                        path: '/monitor/addmonitor',
                        name: 'addMonitor',
                        component: addMonitor
                    }
                ]
    		},
    		{
    			path: '/warning',
    			component: warning
    		},
    		{
    			path: '/devices',
    			component: devices,
                children: [
                    {
                        path: '/devices/adddevice',
                        name: 'addDevice',
                        component: addDevice
                    },
                    {
                        path: '/devices/infor',
                        name: 'deviceInfo',
                        component: deviceInfo
                    },
                    {
                        path: '/devices/share',
                        name: 'shareDevice',
                        component: shareDevice
                    }
                ]
    		},
    		{
    			path: '/friends',
    			component: friends,
                children: [
                    {
                        path: '/friends/newfriends',
                        name: 'newFriends',
                        component: newFriends
                    }
                ]
    		},
    		{
    			path: '/settings',
    			component: usersetting
    		}
    	]
    }/*,
    {
        path: '/devices/share',
        name: 'shareDevice',
        component: shareDevice
    }*/
  ]
})
