class Player {

    constructor(name) {
    
        this.name = name,
        this.hp = 100,
         this.attacks = [
                        {attack1: 25},
                        {attack2: 50},
                        {attack3: 75}            
                        ]
    
    }


    randomAttack() {
        const randomNum = Math.floor(Math.random() * 3)
        console.log(this.attacks)
        return this.attacks[randomNum]
    }
    
    
    
    }




    module.exports = Player