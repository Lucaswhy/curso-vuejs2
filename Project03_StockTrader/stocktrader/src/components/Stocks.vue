<template>
  <div class="div__card">
    <div class="card ms-2 mt-2" style="width: 18rem" v-for="s in stock" :key="s.id">
      <div class="card-body text-center">
        <h5 class="card-title">{{s.initial}}</h5>
        <hr/>
        <h6 class="card-subtitle mb-2 text-muted">{{s.name}}</h6>
        <p v-if="s.profit == null" class="div--card">
          {{s.price | money}}
        </p>
        <p v-if="s.profit == true " class="div--card text-success">
          {{s.price | money}}
        </p>
        <p v-if="s.profit == false" class="div--card text-danger">
          {{s.price | money}}
        </p>
        <input class="w-50" type="number" v-model="quantity[s.id]"/>
        <button class="btn btn-secondary btn-sm float-end" @click="buy(s)">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: [],
    };
  },
  computed: {
    stock() {
      return this.$store.state.stock;
    },
  },
  methods: {
    calcMoney(value) {
      this.$store.state.userMoney -= value;
      return 0;
    },
    verifyStock(item) {
      let bool = false;
      this.$store.state.userStock.forEach((i) => {
        if (item.name === i.name) {
          bool = true;
          i.quantity = parseInt(item.quantity, 10) + parseInt(i.quantity, 10); // eslint-disable-line
          i.totalPrice = parseFloat(item.totalPrice) + parseFloat(i.totalPrice); // eslint-disable-line
        }
      });
      return bool;
    },
    buy(item) {
      const total = item.price * (this.quantity[item.id]);

      if (this.$store.state.userMoney < total) return alert('Você não tem dinheiro o suficiente para comprar essa quantidade de ações.'); // eslint-disable-line
      if (this.quantity[item.id] <= 0) return alert('Por favor informe uma quantidade de ações maior que 0.'); // eslint-disable-line

      this.calcMoney(total);
      const uStock = {
        id: item.id,
        name: item.name,
        initial: item.initial,
        quantity: this.quantity[item.id],
        price: item.price,
        totalPrice: total,
      };
      if (this.verifyStock(uStock)) return 0;
      return this.$store.state.userStock.push(uStock);
    },
  },
};
</script>

<style>
.div__card{
  display: flex;
  flex-wrap: wrap;
}
</style>
