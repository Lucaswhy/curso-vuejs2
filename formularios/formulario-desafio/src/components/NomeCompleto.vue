<template>
  <div style="margin-top: 10px;">
    <span>
      <label for="name"> Name:
        <input id="name" type="text" v-model="user.name">
      </label>
    </span>
    <span>
      <label for="name"> Last name:
    <input type="text" v-model="user.lastName">
    </label>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style>
</style>