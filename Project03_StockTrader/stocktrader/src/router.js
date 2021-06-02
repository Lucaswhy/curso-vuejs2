import Vue from 'vue';
import Router from 'vue-router';
//  import Menu from './template/Menu.vue';

Vue.use(Router);

const Stocks = () => import(/* webpackChunkName: "stocks" */'./components/Stocks.vue');
const Portfolio = () => import(/* webpackChunkName: "stocks" */'./components/Portfolio.vue');
const Save = () => import('./components/Salvar&Carregar.vue');

const router = new Router({
  mode: 'history',
  routes: [{
    name: 'Home',
    path: '/',
  }, {
    path: '/stocks',
    component: Stocks,
  }, {
    path: '/portfolio',
    component: Portfolio,
  }, {
    path: '/save',
    component: Save,
  },
  {
    path: '*',
    redirect: '/',
  }],

});

export default router;
