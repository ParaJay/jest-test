const planets = [
    "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"
]

function getOrderOf(planet) {
    return planets.indexOf(planet) + 1;
}

function getPlanetFromOrder(orderNum) {
    return planets[orderNum - 1];
}

module.exports = {
    getOrderOf, getPlanetFromOrder
}