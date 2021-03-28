new Vue({
    el: '#app',
    data: {
        pLife: 100,
        mLife: 100,
        endGame: false,
        statusGame: null,  //0 = Player has surrender, 1 = Game is active, 2 = Player has won the game, 3 = Player has lost the game.
        countSpA: 0,
        countHeal: 0,
        wasHealed: false,
        wasStarted: false,
        firstGame: true,
        logList: [
            {

            }
        ]
    },
    methods: {
        playerAttack() {
            this.mLife = this.mLife - Math.round(Math.random() * (10 - 3) + 3);
            if(this.countSpA > 0) this.countSpA--;
            if(this.countHeal > 0) this.countHeal--;
        },
        playerSpAttack() {
            if(this.countSpA == 0){
                this.mLife = this.mLife - Math.round(Math.random() * (17 - 11) + 11);
                this.countSpA = 3;
                if(this.countHeal > 0) this.countHeal--;
            }
            else this.logList.push("Your Special Attack is on cooldown.");
        },
        playerHeal() {
            if(this.countHeal != 0) this.logList.push("Your Heal is on cooldown.");
            else if (this.pLife < 100) {
                var healed = Math.round(Math.random() * (12 - 4) + 4);
                this.pLife += healed;
                if (this.pLife >= 100) this.pLife = 100;
                this.logList.push("The player has healed " + healed + " points of his life!");
                this.wasHealed = true;
                this.countHeal = 3;
                if(this.countSpA > 0) this.countSpA--;
            } else {
                this.pLife = 100;
                this.logList.push("You're full of life, cannot heal now.");
            }
        },
        surrender() {
            this.endGame = true;
            this.statusGame = 0;
            this.pLife = 100;
            this.mLife = 100;
        },
        startGame() {

            if(this.firstGame == true){
                this.firstGame = false;
                this.wasStarted = false;
            }else{
                this.wasStarted = true;
            }
            this.endGame = false;
            this.statusGame = 1;
            this.pLife = 100;
            this.mLife = 100;
            this.logList = [];
            this.countHeal = 0;
            this.countSpA = 0;
            this.wasHealed = false;
        },
        monsterAttack() {
            this.pLife = this.pLife - Math.round(Math.random() * (20 - 7) + 7);
        }
    },
    watch: {
        pLife(newVar, oldVar) {
            if(this.wasStarted == true) {this.wasStarted = null;}
            else if (newVar <= 0) {
                this.endGame = true;
                this.statusGame = 3;
                this.pLife = 0;
            }
            else if(this.wasHealed == true){
                this.wasHealed = false;
            }
            else{
                var damage = oldVar - newVar;
                if(damage == 20) this.logList.push("DEAR GOD! The monster has deals 20 DAMAGE in the Player!");
                else this.logList.push("The monster has given " + damage + " damage in player life!");
            }
        },
        mLife(newVar, oldVar) {
            if(this.wasStarted == true || this.wasStarted == null) this.wasStarted = false;
            else if (newVar <= 0) {
                this.endGame = true;
                this.statusGame = 2;
                this.mLife = 0;
                this.logList.push("The player has given " + (oldVar - newVar) + " damage in monster life!");
            }
            else {
                this.monsterAttack();
                this.logList.push("The player has given " + (oldVar - newVar) + " damage in monster life!");
            }
        }
    },
    computed: {
        playerBarStyle() {

            var color = this.pLife > 30 ? 'rgb(61, 180, 61)' : 'red';

            return {
                backgroundColor: color,
                width: `${this.pLife}%`,
                height: "30px",
            }
        },
        monsterBarStyle() {

            var color = this.mLife > 30 ? 'rgb(61, 180, 61)' : 'red';

            return {
                backgroundColor: color,
                width: `${this.mLife}%`,
                height: "30px",
            }
        }
    }
})