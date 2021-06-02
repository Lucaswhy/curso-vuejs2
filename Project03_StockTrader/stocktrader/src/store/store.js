import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userMoney: 10000.00,
    userStock: [],
    stock: [
      {
        id: 0, name: 'Magalu', initial: 'MGLU3', quantity: 0, price: 23.76, profit: null,
      },
      {
        id: 1, name: 'Banco Inter', initial: 'BIDI4', quantity: 0, price: 59.1, profit: null,
      },
      {
        id: 2, name: 'Petrobrás', initial: 'PETR4', quantity: 0, price: 20.0, profit: null,
      },
    ],
  },
});
