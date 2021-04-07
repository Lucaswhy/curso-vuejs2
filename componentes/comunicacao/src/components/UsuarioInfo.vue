<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <b>{{revName()}}</b> na idade {{age}}</p>
        <button @click="restartName">Reiniciar Nome</button>
        <button @click="restartFn">Reiniciar Nome(Callback)</button>
    </div>
</template>

<script>
import barramento from './barramento.js'
export default {

    props: {
        name: {
            type: String,
            default: 'Anon'
            /*            default: function(){
                return Array(10).fill(0).join(',');
            } */
            //required: true  
        },
        restartFn: Function,
        age: Number
    },
    methods: {
        revName(){
            return this.name.split('').reverse().join('');
        },
        restartName(){
            const oldVar = this.name;
            this.name= "Pedro";
            this.$emit('nameChange', {
                new: this.name,
                old: oldVar
            });
        }
    },
    created(){
            console.log("Here");
            barramento.whenAgeChange(age =>{
                this.age = age;
            })
        }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
