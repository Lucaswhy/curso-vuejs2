<template>
	<div id="app">
		<h1>Tasks</h1>
		<TaskBar :tasks="tasks" :percent="percent"/>
		<InputTask @taskAdded="addTask" />
		<TaskCard :tasks="tasks"/>
	</div>
</template>

<script>
import TaskBar from "./TaskBar"
import InputTask from "./InputTask"
import TaskCard from "./TaskCard"

export default {
  name: "app",
  components: { TaskBar,InputTask,TaskCard },
  data(){
	  return{
		  tasks: []
	  }
	},
	methods:{
		addTask(task){
			var obj = {name: String,color: String};
			obj.name = task;
			obj.color = 'red';
			this.tasks.push(obj);
		},
	},

	mounted() {
		if (localStorage.tasks){
			this.tasks = JSON.parse(localStorage.getItem('tasks'));
		}
  	},

	computed:{
		
		percent: function(){

			if(this.tasks.length == 0) return "0%";

			var greenTask = 0;
			var totalTask = this.tasks.length;

			this.tasks.forEach(element => {
			if (element.color == 'green') greenTask++;
			});	

			return `${((greenTask/totalTask)*100).toFixed(2)}%`; 

		},	
	}
}
</script>

<style>

	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, #4e54c8, #8f94fb);
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
