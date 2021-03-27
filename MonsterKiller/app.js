new Vue({
    el: '#app',
    data: {
        pLife: 100,
        mLife: 100,
        endGame: false,
        statusGame: null,  //0 = Player has surrender, 1 = Game is active, 2 = Player has won the game, 3 = Player has lost the game.
        countHeal: 0,
        countSpA: 0,
        logList: [
            {

            }
        ]
    },
    methods:{
        playerAttack(){
            this.mLife = this.mLife - Math.round(Math.random() * (10 - 3) + 3);
        },
        playerSpAttack(){
            this.mLife = this.mLife - Math.round(Math.random() * (16 - 8) + 8);
        },
        playerHeal(){
            this.pLife = this.pLife + Math.round(Math.random() * (10 - 5) + 5);
        },
        surrender(){
            this.endGame = true;
            this.statusGame = 0;
            this.countHeal = 0;
            this.countSpA = 0;
            this.logList = [];
            this.pLife = 100;
            this.mLife = 100;

        },
        startGame(){
            this.endGame = false;
            this.statusGame = 1;
            this.countHeal = 0;
            this.countSpA = 0;
            this.logList = [];
            this.pLife = 100;
            this.mLife = 100;
        },
        monsterAttack(){
            this.pLife = this.pLife - Math.round(Math.random() * (13 - 7) + 3);
        }
    },
    watch:{
        pLife(newVar,oldVar){
            this.logList.push("The monster has given " + (oldVar - newVar) + " damage in player life!");
        },
        mLife(newVar,oldVar){
            
            if (newVar <= 0){
                this.endGame = true;
                this.startGame = 2;
            } 
            this.monsterAttack();
            this.logList.push("The player has given " + (oldVar - newVar) + " damage in monster life!");
        }
    }
})