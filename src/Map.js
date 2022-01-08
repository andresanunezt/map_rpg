
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

            console.log('--------------')

            this.map.forEach((array) => {
                console.log(array)
            })
            console.log('--------------')

    }


    spawn(){
        
        console.log("")
        console.log('--------------')
        console.log("")
        // console.log("")
  


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
               
        // console.log("")
        
        // console.log("")
    
        
        this.map.forEach((array) => {
                     for (let i = 0; i < array.length; i++) {
                        if (typeof array[i] === "object"){
                            // console.log("INSIDE LOOP:", array[i].name)
                            array[i] = array[i].name
                     }

                }
            console.log(array)
        })
     
        console.log("")
        console.log('--------------')
        console.log("")
        console.log("")

    }

    reset(){
        console.log("")
        console.log("")
        console.log("!!!MAP HAS BEEN RESET!!!")
        

            for (let i = 0; i < this.map.length; i++){
                    let array = this.map
                    for (let j = 0; j < array[i].length; j++) {
                        array[i][j] = 0
                    }   
            }
        
            console.log("")
        this.map.forEach((array) => {
                     
            console.log(array)
        })

        
    }



    printMap() {
       console.log( '--------------')
        this.map.forEach((array) => {
            console.log(array)
        })
        console.log( '--------------')
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
        
        console.log("THERE IS A COLLITION!")
        console.log("")
        console.log(`${player.name} AND ${monster.name} ARE BATTLING!!!`)
       

        const pAttack = player.randomAttack()
        const mAttack = monster.randomAttack()

        console.log(`${player.name} USED ${pAttack.name}`) 
        
        console.log(`${monster.name} USED ${mAttack.name}`)


        if(pAttack.value > mAttack.value){
            console.log("")
            console.log(`PLAYER WON THE BATTLE`)
            console.log("")

            player.hp -= mAttack.value

            console.log(`PLAYER HP = ${player.hp}`)

            // this.characters.splice(this.characters.findIndex(monster),1)
          
           
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
            console.log("")
            let zero = {name: 0}
            return zero
            // return 0
            

        }

    }

}




const map = new Map()

map.generateMap()
map.spawn()
map.reset()




module.exports = Map