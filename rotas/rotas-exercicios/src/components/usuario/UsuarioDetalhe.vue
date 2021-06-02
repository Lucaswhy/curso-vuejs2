<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr />
    <p><strong>Código: </strong> {{ id }}</p>
    <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`"> -->
    <router-link
      tag="button"
      primario
      :to="{
        name: 'editarUsuario',
        params: { id: $route.params.id },
        query: { completo: true, lingua: 'pt' },
        hash: '#rodape',
      }"
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to,from,next){
    //o props id ainda não foi criado
    console.log('dentro do componente -> antes do detalhe');
    next(vm =>{
      //Aqui eu posso acessar o props id dentro da instância do next.
      console.log(vm.id);
    });
  }
  // Por parâmetro
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
  //
  //   watch: {
  //     $route(to, from) {
  //       this.id = to.params.id;
  //     },
  //   },
  //
};
</script>

<style>
</style>