<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Na idade: {{age}}</p>
        <p>Edite as informações</p>
        <button @click="altAge()">Alterar idade</button>
        <button @click="altAgeCallback">Alterar idade(Callback)</button>
    </div>
</template>

<script>

import barramento from './barramento.js'

export default {
     props: {
        age: Number,
        altAgeCallback: Function
    },
    methods: {
        altAge(){
            this.age += 30;
            barramento.altAge(this.age);
        },
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
