<template>
  <div class="count">
      <h1>Counter</h1>
      <span>{{count}}</span>
      <button @click="add">+</button>
      <button @click="subtract">-</button>
  </div>
</template>

<script>
export default {
    data(){
      return{
        count: 0
      }
    },
      methods:{
          add(){
              this.count++;
          },
          subtract(){
              this.count--;
          }
      }
}
</script>

<style scoped>
    .count span{
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px;
    }
    .count button{
        height: 30px;
        widows: 30px;
        border-radius: 15px;
        background-color: coral;
        margin-left: 10px;
        outline: none;
    }
</style>