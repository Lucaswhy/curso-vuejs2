<template>
  <div>
    <div class="container">
      <button
        class="container__card"
        v-for="(item, index) in tasks"
        :key="index"
        @click="item.color == 'red' ? (item.color = 'green') : (item.color = 'red');storageColor()"
        :style="cardColor(item)">
        <button class="card__close" @click="delTask(item)">X</button>
        <p class="card--font">{{item.name}}</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
  methods: {
    cardColor(task) {
      return {
        backgroundColor: task.color,
      }
    },
    delTask(task){
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1); 
    },
    storageColor(){
      localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }
  },
	watch: {
    	tasks(newTasks){
      		localStorage.setItem('tasks',JSON.stringify(newTasks));
    	}
	}
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 20%;
  max-width: 1000px;
}

.container__card {
  border: solid 1px white;
  min-height: 80px;
  min-width: 200px;
  margin-top: 20px;
  margin-left: 10px;
  border-radius: 10px;
}

.card--font{
  color: white;
  font-size: 20px;
  word-break: break-all;
}

.card__close{
    border: 0px;
    background-color: transparent;
    font-size: 14px;
    float: right;
    color: whitesmoke;
}

</style>