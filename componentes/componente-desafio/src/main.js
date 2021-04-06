import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import Menu from './components/template/Menu';
import Toolbar from './components/template/Toolbar';
import Footer from './components/template/Footer';

import Carousel from './components/widgets/Carousel';

Vue.config.productionTip = false
//Template
Vue.component('Menu', Menu);
Vue.component('Toolbar', Toolbar);
Vue.component('Footer', Footer);
//Widgets
Vue.component('Carousel', Carousel);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
