
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
               
                const randomNumber = Math.floor(Math.random() * 4)
                const randomNumber2 = Math.floor(Math.random() * 4)

                 
                 let randomChar = characters[j]

                if (array[randomNumber][randomNumber2].name === "M" && randomChar.name === "P"){
                    const monster = array[randomNumber][randomNumber2]
                    const player = randomChar

                    const result = this.battle(player, monster)
               
                    array[randomNumber][randomNumber2] = result
                    
                   
                    
                    
                } else {
               
                array[randomNumber][randomNumber2] = randomChar
                
                }
            
            }   
        

// this.map.forEach((array) =>{

//     const randomNumber = Math.floor(Math.random() * 4)
//     const randomNumber2 = Math.floor(Math.random() * 4)


//     array[randomNumber] = Map.characters[randomNumber2].name
//     console.log(array)

// })
        console.log("")
            console.log("")
            console.log("MAP:")

        this.map.forEach((array) => {
                     
            for (let i = 0; i < array.length; i++) {


                if (typeof array[i] === "object"){

                        array[i] = array[i].name

                }
                    
            }
            
            
            console.log(array)
        })

    }

    reset(){
    
        console.log("")
        console.log("reset")
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

        console.log("")
        console.log("Map has been reset")


    
    }



    printMap() {

        this.map.forEach((array) => {
            console.log(array)
        })
    }

    createMonsters(){
        let monsters = []

        for(let i = 0; i < 6; i++) {

            // monsters[i] = new Monster(`M${[i + 1]}`)
            monsters[i] = new Monster(`M`)
            // console.log(monsters[i])
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
        console.log("There's a colllision!")
        console.log("")
        console.log(`${player.name} and ${monster.name} are battling`)
        console.log("")

        const pAttack = player.randomAttack()
        const mAttack = monster.randomAttack()


        if(pAttack.value > mAttack.value){
            console.log("")
            console.log(`Player won the battle`)
            console.log("")
            return player
        }

        if(mAttack.value > pAttack.value){
            console.log("")
            console.log(`Monster won the battle`)
            console.log("")
            return monster
        }

        if (mAttack.value === pAttack.value){
            console.log("")
            console.log("it's a draw")
            return 0
            console.log("")

        }

    }

}




const map = new Map()

map.generateMap()
map.spawn()
// map.reset()


// map.spawn()

module.exports = Map