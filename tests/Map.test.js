const Map = require("../src/Map")

describe('Map Properties', () => {
    
    test("Map has a map property", () => {
		
        const map = new Map();
        expect(map).toHaveProperty('map')
    })


   
})