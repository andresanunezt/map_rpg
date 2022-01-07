const Map = require("../src/Map")

describe('Map Properties', () => {
    
    test("Map has a map property", () => {
		
        const map = new Map();
        expect(map).toHaveProperty('map')
    })


    test("Map has an array", () => {
		
        const map = new Map();
        map.generateMap()
        expect(map.map.length).toBe(4)
                    
    })


   
})