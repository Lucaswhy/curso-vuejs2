new Vue({
    el: '#desafio',
    data:{
        name: "Lucas Herculano",
        age: "21",
        img: "https://upload.wikimedia.org/wikipedia/en/6/6a/BTS_WORLD_LOGO.jpg"
    },
    methods:{
        ageMultiply : function(){
            return ("Minha idade multiplcada por 3 é: " + this.age * 3);
        },
        randomNumber: function(){
            n = Math.random();
            n = n >= 0.5?1:0; 
            return n;
        }
    }
})