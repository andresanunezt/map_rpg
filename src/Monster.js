class Monster {
    static all = []
    constructor(name) {
    
        this.name = name,
        this.hp = 100,
        this.attacks = {attack1: 25,
                        attack2: 50,
                        attack3: 75            
                        }
        Monster.all.push(this)
    
    }
    
    
    
    }


    module.exports = Monster