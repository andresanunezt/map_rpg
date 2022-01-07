const Player = require("../src/Player")

describe('Player Properties', () => {
    
    test("Player  has a name, hp and attacks array", () => {
		
        const player = new Player("M");
        expect(player).toHaveProperty('name')
         expect(player).toHaveProperty('hp')
         expect(player).toHaveProperty('attacks')
    })


   


   
})