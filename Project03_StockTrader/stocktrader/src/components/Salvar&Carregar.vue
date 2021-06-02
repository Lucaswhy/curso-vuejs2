<template>
  <div>
      <div class="div__flex">
            <div class="div__card">
            <h1>Salvar</h1>
            <p>Aqui você irá salvar sua instância de ações.</p>
            <button class="btn btn-primary card__btn" @click="salvar()">Salvar</button>
            </div>
            <div class="div__card">
            <h1>Carregar</h1>
            <p>Carrega sua antiga instância de ações.</p>
            <button class="btn btn-primary card__btn" @click="carregar()">Carregar</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      state: this.$store.state.userStock,
      stock: this.$store.state.stock,
      userMoney: this.$store.state.userMoney,
    };
  },
  methods: {
    salvar() {
      const metodo = this.id ? 'patch' : 'put';
      const finalUrl = this.id ? `/${this.id}.json` : '.json';
      const requestState = {
        userMoney: this.userMoney,
        state: this.state,
        stock: this.stock,
      };
      this.$http[metodo](`/userStock${finalUrl}`, requestState);// eslint-disable-line
      alert('Registro salvo com sucesso.'); // eslint-disable-line
    },
    carregar() {
      this.$http.get('userStock.json')
        .then((res) => {
          this.$store.state.userMoney = res.data.userMoney;
          this.$store.state.stock = res.data.stock;
          this.$store.state.userStock = res.data.state;
        });
    },
  },
};
</script>

<style>

.card__btn{
    margin-top: 200px;
}

 .div__card{
     width: 300px;
     height: 400px;
     border: solid 2px whitesmoke;
     background-color: white;
     font-size: 20px;
     text-align: center;
     border-radius: 5px;
     display: inline-block;
     margin-top: 20px;
     margin-left: 20px;
 }

 .div__flex{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);
 }
</style>
