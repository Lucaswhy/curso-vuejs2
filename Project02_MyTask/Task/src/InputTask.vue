<template>
  <div>
    <input v-model="task" type="text" placeholder="New Task" @keydown.enter="addTask">
    <button class="btn" @click="addTask">+</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      task: ''
    }
  },
  methods:{
    addTask(){

      if(this.task  != ''){
          this.$emit('taskAdded', this.task);
          this.task = '';
      }

    }
  }
};
</script>

<style>

.btn{
  background-color:#5d60a3;
  color: white;
  border-radius: 2px;
  border: 1px solid;
}
</style>