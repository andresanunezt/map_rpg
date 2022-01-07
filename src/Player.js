class Player {

    constructor(name) {
    
        this.name = name,
        this.hp = 100,
         this.attacks = [
                        {value: 25},
                        {value: 50},
                        {value: 75}            
                        ]
    
    }


    randomAttack() {
        const randomNum = Math.floor(Math.random() * 3)
        // console.log(this.attacks)
        return this.attacks[randomNum]
    }
    
    
    
    }




    module.exports = Player