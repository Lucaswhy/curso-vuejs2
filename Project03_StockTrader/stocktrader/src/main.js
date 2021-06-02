import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './plugins/axios';

Vue.config.productionTip = false;

Vue.filter('money', (p) => {
  let str = p.toFixed(2).toString().replace('.', ',');
  str = `R$${str}`;
  return str;
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
