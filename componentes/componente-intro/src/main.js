import Vue from 'vue'
import App from './App.vue'
import Count from './counter.vue'

Vue.config.productionTip = false
Vue.component('app-count', Count);

new Vue({
  render: h => h(App),
}).$mount('#app')
