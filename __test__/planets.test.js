const planets = require("../scripts/planets");

describe("check plants.getOrderOf and planets.getPlanetFromOrder", () => {
    test("expect getOrderOf('Earth') to be 3", () => {
        expect(planets.getOrderOf("Earth")).toBe(3);
    });
    
    test("expect getOrderOf('Neptune') to be 8", () => {
        expect(planets.getOrderOf("Neptune")).toBe(8);
    });
    
    test("expect getPlanetFromOrder(2) to be Venus", () => {
        expect(planets.getPlanetFromOrder(2)).toBe("Venus");
    });
    
    test("expect getPlanetFromOrder(3) to be Earth", () => {
        expect(planets.getPlanetFromOrder(3)).toBe("Earth");
    });
});