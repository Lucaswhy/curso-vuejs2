<template>
  <div>
    <v-navigation-drawer app>
      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-item v-for="item in itensMenu" :key="item.titulo">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.titulo }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Desafio</span>
        <span class="font-weight-light">Componente</span>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itensMenu: [
        { titulo: "Início", icon: "mdi-view-dashboard" },
        { titulo: "Sobre", icon: "mdi-forum" },
      ],
    };
  },
};
</script>

<style>
</style>