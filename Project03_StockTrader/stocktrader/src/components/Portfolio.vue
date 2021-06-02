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
        <input class="w-50" type="number" v-model="quantity"/>
        <button class="btn btn-secondary btn-sm float-end" @click="sell(u)">Vender</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    userStock() {
      return this.$store.state.userStock;
    },
  },
  methods: {
    sell(item) {
      const total = item.price * (this.quantity);
      let id = 0;
      this.$store.state.userStock.forEach((i, index) => { // eslint-disable-line
        if (item.name === i.name) {
          id = index;
        }
      });

      if (this.$store.state.userStock[id].quantity < this.quantity) {
        alert('Você não possui essa quantidade de ações.');
        return 0;
      }
      if (this.$store.state.userStock[id].quantity > this.quantity) {
        this.$store.state.userStock[id].quantity = parseInt(this.$store.state.userStock[id].quantity, 10) - parseInt(this.quantity, 10); // eslint-disable-line
        this.$store.state.userStock[id].totalPrice = parseFloat(total);
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
