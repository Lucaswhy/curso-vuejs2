<template>
  <div class="counters">
      <h1>Counters:</h1>
      <app-counter v-for="c in 5" :key="c"/>
  </div>
</template>

<script>
import counter from './counter.vue'
export default {
    components: {'app-counter': counter}
}
</script>

<style>

</style>