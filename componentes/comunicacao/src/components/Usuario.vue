<template>
    <div class="container">
        <h1>Componente Usuário {{name}} na idade {{age}}</h1>
        <p>Esse é um componente muito legal!</p>
        <button @click="altName">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info :name="name" :age="age" @nameChange="name = $event.new" :restartFn="restartName"/>
            <app-usuario-editar :age="age" :altAgeCallback="altAgeCallback" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return{
            name:'Pedro Silva',
            age: 22
        }
    },
    methods: {
        altName(){
            this.name = 'Ana';
        },
        restartName(){
            this.name = 'Pedro';
        },
        altAgeCallback(){
            this.age = 40;
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
