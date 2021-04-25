<template>
  <div class="bar">
      <div :style="[barProgress]">
        <span>{{percent}}</span>
      </div>
  </div>
</template>

<script>

export default {
    props: {
        percent: String
    },
    computed: {
        barProgress(){
            return{
                backgroundColor: "rgb(61, 189, 61)",
                width: `${this.percent}`,
                height: "30px",
            }
        }
    }
}
</script>

<style>
.bar {
  border: 1px solid white;
  width: 500px;
  height: 30px;
  position: relative;
  margin-top: 10px;
}

span {
  font-size: 18px;
  text-align: center;
  display: inline-block;
  margin-top: 2px;
  position: absolute;
  left: 50%;
  transform: translate(-50%,0px);
}
</style>