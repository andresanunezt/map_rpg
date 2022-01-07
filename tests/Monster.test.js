const Monster = require("../src/Monster")

describe('Monster Properties', () => {
    
    test("Monster  has a name, hp and attacks array", () => {
		
        const mons = new Monster("M");
        expect(mons).toHaveProperty('name')
         expect(mons).toHaveProperty('hp')
         expect(mons).toHaveProperty('attacks')
    })


   


   
})