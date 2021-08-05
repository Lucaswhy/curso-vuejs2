<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from './template/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,
  },
};
</script>

<style>
body {
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  height: 100vh;
}
</style>
