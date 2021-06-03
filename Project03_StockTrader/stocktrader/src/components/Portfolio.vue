<template>
  <div>
    <div class="card ms-2 mt-2" style="width: 18rem" v-for="u in userStock" :key="u.id">
      <div class="card-body text-center">
        <h5 class="card-title">{{u.initial}}</h5>
        <hr/>
        <h6 class="card-subtitle mb-2 text-muted">{{u.name}}</h6>
        <p class="div--card">
          {{u.totalPrice | money}}
        </p>
        <p>
          Total: {{u.quantity}} Comprado por: {{u.price | money}}
        </p>
        <input class="w-50" type="number" v-model="quantity[u.id]"/>
        <button class="btn btn-secondary btn-sm float-end" @click="sell(u)">Vender</button>
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
    userStock() {
      return this.$store.state.userStock;
    },
  },
  methods: {
    sell(item) {
      let id = 0;
      this.$store.state.userStock.forEach((i, index) => { // eslint-disable-line
        if (item.name === i.name) {
          id = index;
        }
      });
      const total = parseFloat(this.$store.state.stock[item.id].price) * (this.quantity[item.id]);
      const userQuantity = parseInt(this.$store.state.userStock[id].quantity, 10);
      if (this.quantity[item.id] <= 0) {
        alert('Por favor informe uma quantidade de ações maior que 0.');
        return 0;
      }

      if (userQuantity < parseInt(this.quantity[item.id], 10)) {
        alert('Você não possui essa quantidade de ações.');
        return 0;
      }
      if (userQuantity > parseInt(this.quantity[item.id], 10)) {
        this.$store.state.userStock[id].quantity = parseInt(userQuantity, 10) - parseInt(this.quantity[item.id], 10); // eslint-disable-line
        this.$store.state.userStock[id].totalPrice -= parseFloat(total);
      } else {
        let count = 0;
        this.$store.state.userStock = this.$store.state.userStock.filter((i) => i !== item);
        this.$store.state.userStock.forEach((i) => {
          i.id = count; // eslint-disable-line
          count += 1;
        });
      }
      this.addMoney(total);
      return 0;
    },
    addMoney(value) {
      this.$store.state.userMoney += value;
      return 0;
    },
  },
};
</script>

<style>
.div--card{
  font-size: 25px;
  font-family: Montserrat;
}

</style>
