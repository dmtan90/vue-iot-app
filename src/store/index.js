import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import friends from './modules/friends';
import monitors from './modules/monitor';
import devices from './modules/device';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    friends,
    monitors,
    devices
  },
  getters
});

export default store