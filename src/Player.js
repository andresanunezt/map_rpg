class Player {

    constructor(name) {
    
        this.name = name,
        this.hp = 100,
         this.attacks = [
                        {name: "PUNCH",value: 25},
                        {name: "SLAY", value: 50},
                        {name: "DESTROY", value: 75}            
                        ]
    
    }


    randomAttack() {
        const randomNum = Math.floor(Math.random() * 3)
        // console.log(this.attacks)
        return this.attacks[randomNum]
    }
    
    
    
    }




    module.exports = Player