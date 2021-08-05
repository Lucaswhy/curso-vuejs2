<template>
  <div>
    <ul class="nav">
        <li><img class="ul__img" src="@/assets/stocktrader.png">
        </li>
      <router-link to="/" tag="li" active-class="active">
        <a class="nav-link">Início</a>
      </router-link>
      <router-link to="./portfolio" tag="li" active-class="active">
        <a class="nav-link">Portfólio</a>
      </router-link>
      <router-link to="./stocks" tag="li" class="nav-item" active-class="active" >
        <a class="nav-link">Ações</a>
      </router-link>
      <router-link to="./stocks" tag="li" class="nav-item" active-class="active" >
        <a class="nav-link" @click.prevent="endDay()">Finalizar Dia</a>
      </router-link>
      <router-link to="./save" tag="li" class="nav-item" active-class="active" >
        <a class="nav-link">Salvar & Carregar</a>
      </router-link>
      <li class="nav-item ul__li">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
          >{{Money | money}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    endDay() {
      this.$store.state.stock.forEach((i) => {
        const n1 = this.getRandom(1, 9);
        const n2 = this.getRandom(1, 9);
        const n = `0.${n1}${n2}`;
        const op = (this.getRandom(1, 3) === 1);
        i.price = op === true ? i.price + parseFloat(n) : i.price - parseFloat(n); //eslint-disable-line
        i.profit = op; // eslint-disable-line
      });
    },
    getRandom(minimum, maximum) {
      const min = Math.ceil(minimum);
      const max = Math.floor(maximum);
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },
  computed: {
    Money() {
      return this.$store.state.userMoney;
    },
  },
};
</script>

<style>
.nav{
    background-color: ghostwhite;
    padding: 5px;
    font-family: Montserrat;
    align-items:center;
    border-radius: 5px;
}
.ul__li{
    margin-left: auto;
}
.ul__img{
    width: 200px;
    height: auto;
}
</style>
