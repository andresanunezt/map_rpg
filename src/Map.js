
// const Monster = require("./Monster")
// const Monster = require("./Player")

class Map {

constructor() {

this.map = []



console.log("")
console.log("")
console.log("Map has been generated.")
console.log("")


}




generateMap(){


const mapBlueprint = [
                        [0, 0, 0, 0 ],
                        [0, 0, 0, 0 ], 
                        [0, 0, 0, 0 ], 
                        [0, 0, 0, 0 ] 
                    ]


                    

mapBlueprint.forEach((array) => {
    this.map.push(array)
    // console.log(array)
    
});

console.log('')
this.spawn()

}


spawn(){



this.map.forEach((array) =>{

    const randomNumber = Math.floor(Math.random() * 4)


    array[randomNumber] = "[M]"
    console.log(array)

})

}

reset(){
    
    console.log("")
    console.log("reset")
    console.log("")

    this.map.forEach((array) => {

        
            for (var i = 0; i < array.length; ++i) {
              array[i] = 0
              
            
            }    

        })
        
        
        
        this.map.forEach((array) => {

            console.log(array)
        })



    
}



printMap() {

    this.map.forEach((array) => {

        console.log(array)
    })


}

}


// [0, 0, 0, 0 ]
// [0, 0, 0, 0 ]
// [0, 0, 0, 0 ]
// [0, 0, 0, 0 ]

const map = new Map()

map.generateMap()
map.reset()
// map.spawn()

module.exports = Map