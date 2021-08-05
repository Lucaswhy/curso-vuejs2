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
      {
        id: 3, name: 'Ambev', initial: 'AMBEV3', quantity: 0, price: 17.5, profit: null,
      },
      {
        id: 4, name: 'Agro Negócios', initial: 'AGRO3', quantity: 0, price: 28.40, profit: null,
      },
      {
        id: 5, name: 'The Coca-Cola Company', initial: 'COCA34', quantity: 0, price: 48.07, profit: null,
      },
      {
        id: 6, name: 'Vale S.A.', initial: 'VAL3', quantity: 0, price: 110.2, profit: null,
      },
      {
        id: 7, name: 'Apple', initial: 'AAPL34', quantity: 0, price: 75.55, profit: null,
      },
    ],
  },
});
