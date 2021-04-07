import Vue from 'vue'
export default new Vue({
    methods: {
        altAge(age){
            this.$emit('ageChange',age);
        },
        whenAgeChange(callback){
            this.$on('ageChange',callback);
        }
    }
})