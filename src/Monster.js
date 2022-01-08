class Monster {
    static all = []
    constructor(name) {
    
        this.name = name,
        this.hp = 100,
        this.attacks = [
                        {name:"KICK",value: 25},
                        {name:"BITE",value: 50},
                        {name:"DESTROY",value: 75}            
                        ]
        Monster.all.push(this)
    
    }


    randomAttack() {
    const randomNum = Math.floor(Math.random() * 3)
    // console.log(this.attacks)
    return this.attacks[randomNum]
  }
    
    
    
    }


    module.exports = Monster