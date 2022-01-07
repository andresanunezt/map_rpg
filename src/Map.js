
const Monster = require("./Monster")
const Player = require("./Player")

class Map {




constructor() {

this.map = []
this.characters = []

this.createMonsters()
this.createPlayer()


console.log("")
console.log("Map has been generated.")
console.log("")
// console.log("Monsters:", Monster.all)

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

// this.spawn()

}


spawn(){

console.log("Spawned")
console.log("")




        
            let characters = this.characters
            let array = this.map

                for (let j = 0; j < characters.length; j++) {
               
                
                const randomNumber = Math.floor(Math.random() * 4)
                const randomNumber2 = Math.floor(Math.random() * 4)

                
                let randomChar = characters[j].name
                // let randomChar = characters[j]

                if (array[randomNumber][randomNumber2] === "M" && randomChar.name === "P"){
                    
                    console.log("index:",array[randomNumber][randomNumber2])
                    console.log("character:", randomChar)
                    console.log("")
                    array[randomNumber][randomNumber2] = "collided"
                    
                } else {
                // console.log(array[randomNumber][randomNumber2])
                array[randomNumber][randomNumber2] = randomChar
                
                }
            
            }   
        

// this.map.forEach((array) =>{

//     const randomNumber = Math.floor(Math.random() * 4)
//     const randomNumber2 = Math.floor(Math.random() * 4)


//     array[randomNumber] = Map.characters[randomNumber2].name
//     console.log(array)

// })

 this.map.forEach((array) => {
                     
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
            console.log(monsters[i])
            this.characters.push(monsters[i])
        }



}

createPlayer(){

    
       const player = new Player("P");
        this.characters.push(player)
            
        



}


battle(player,monster) {



}

}




const map = new Map()

map.generateMap()
map.spawn()
// map.reset()


// map.spawn()

module.exports = Map