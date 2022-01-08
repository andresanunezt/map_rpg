
const Monster = require("./Monster")
const Player = require("./Player")

class Map {
    
    constructor() {
        
        this.map = []
        this.characters = []
        this.collisionStatus = false

        this.createMonsters()
        this.createPlayer()


        console.log("")
        console.log("Map has been generated.")
        console.log("")


}




    generateMap() {

        const mapBlueprint = [
                                [0, 0, 0, 0 ],
                                [0, 0, 0, 0 ], 
                                [0, 0, 0, 0 ], 
                                [0, 0, 0, 0 ] 
                            ]
           

            mapBlueprint.forEach((array) => {
            this.map.push(array)   
    
            });

            console.log('')

            this.map.forEach((array) => {
            
                console.log(array)
            
            })

            console.log('')

    }


    spawn(){

        console.log("Spawned")
        console.log("")


            let characters = this.characters
            let array = this.map



            for (let j = 0; j < characters.length; j++) {
                const randomNumber  = Math.floor(Math.random() * 4)
                const randomNumber2 = Math.floor(Math.random() * 4)

                let randomChar = characters[j]

                if (array[randomNumber][randomNumber2].name === "M" && randomChar.name === "M") {
                    if (array[randomNumber].indexOf(0) !== -1){
                        let indexNum = array[randomNumber].indexOf(0)
                        
                       array[randomNumber][indexNum] = randomChar      
                    }

                } if (array[randomNumber][randomNumber2].name === "M" && randomChar.name === "P"){
                    this.collisionStatus = true
                    const monster = array[randomNumber][randomNumber2]
                    const player  = randomChar
                    const result  = this.battle(player, monster)
                    
                     array[randomNumber][randomNumber2] = result   
                    
                    }  else {array[randomNumber][randomNumber2] = randomChar
                    
                        }
            }
               
        console.log("")
        
        this.map.forEach((array) => {
                     for (let i = 0; i < array.length; i++) {
                        
                        if (typeof array[i] === "object"){
                            // console.log("INSIDE LOOP:", array[i].name)
                                array[i] = array[i].name
                }

                    
            }
            
            
            console.log(array)
        })

    }

    reset(){
    
        console.log("")
        console.log("!!!MAP HAS BEEN RESET!!!")
        console.log("")

            for (let i = 0; i < this.map.length; i++){
                    let array = this.map
                    for (let j = 0; j < array[i].length; j++) {
                        array[i][j] = 0
                    }   
            }
        
        
        this.map.forEach((array) => {
                     
            console.log(array)
        })

        
    }



    printMap() {

        this.map.forEach((array) => {
            console.log(array)
        })
    }

    createMonsters(){
        let monsters = []

        for(let i = 0; i < 6; i++) {
            monsters[i] = new Monster(`M`)
            this.characters.push(monsters[i])
        }
    }


    createPlayer(){
        const player = new Player("P");
        this.characters.push(player)        
    }


    battle(player,monster) {

        this.collisionStatus = true
        console.log("")
        console.log("THERE IS A COLLITION!")
        console.log("")
        console.log(`${player.name} and ${monster.name} are battling`)
       

        const pAttack = player.randomAttack()
        const mAttack = monster.randomAttack()


        if(pAttack.value > mAttack.value){
            console.log("")
            console.log(`PLAYER WON THE BATTLE`)
           
            return player
        }

        if(mAttack.value > pAttack.value){
            console.log("")
            console.log(`MONSTER WON THE BATTLE`)
            console.log("")
            return monster
        }

        if (mAttack.value === pAttack.value){
            console.log("")
            console.log("DRAW. BOTH PARTIES HAVE BEEN DESTORYED")
            let zero = {name: 0}
            return zero
            // return 0
            console.log("")

        }

    }

}




const map = new Map()

map.generateMap()
map.spawn()
map.reset()




module.exports = Map