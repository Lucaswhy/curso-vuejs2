/* eslint-disable */
import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://stocktrader-vue-estudo-default-rtdb.firebaseio.com/';

Vue.use({
  install(Vue) { 
    Vue.prototype.$http = axios;
  },

});
