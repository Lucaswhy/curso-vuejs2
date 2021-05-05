<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'teste'"></p>
    <p v-html="'usando diretiva <strong>v-html</strong>'"></p>
    <hr />
    <p v-destaque:fundo.atrasar="'lightgreen'">Usando diretiva personalizada</p>
    <p v-destaque.atrasar="color">Usando diretiva personalizada com data </p>
    <hr />
	<p v-destaque:fundo.atrasar.alternar="{color1: 'green', color2: 'red', atraso: 2000, intervalo: 200}">Usando diretiva personalizada</p>
    <p v-destaque.atrasar="{color1: 'lightgreen',atraso: 5000}">Alterando cores</p>
  </div>
</template>

<script>
export default {
  directives: {
    'destaque': {
      bind(el, binding) {
        //el.style.backgroundColor= 'lightgreen';
        const aplicarCor = (color) => {
          if (binding.arg === "fundo") el.style.backgroundColor = color;
          else el.style.color = color;
        };

        let atraso = 0;
        if (binding.modifiers["atrasar"]) atraso = binding.value.atraso;

        const color1 = binding.value.color1;
        const color2 = binding.value.color2;
        let corAtual =  color1;
		
		setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
				corAtual = corAtual === color1 ? color2 : color1;
				aplicarCor(corAtual);
			}, binding.value.intervalo);
          }else{
          	aplicarCor(binding.value.color1);
		  }
        }, atraso);
      }
    }
  },
  data() {
    return {
      color: "lightblue",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
