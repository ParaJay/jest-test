function intToString(int) {
    return int.toString();
}

function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
}

function createObject() {
    return {
        name: "object",
        value: "none"
    }
}

module.exports = {
    intToString, capitalize, createObject
}