class Monster {
    static all = []
    constructor(name) {
    
        this.name = name,
        this.hp = 100,
        this.attacks = {attack: 25}
        Monster.all.push(this)
    
    }
    
    
    
    }


    module.exports = Monster