function isEven(int) {
    return int % 2 == 0;
}

function random() {
    return Math.round(Math.random() * 10); //10 non inclusive
}

function mult(a, b) {
    return a * b;
}

function add(a, b) {
    return a + b;
}

function getCentury(year) {
    return parseInt(year / 100);
}

function concatenateSquare(int) {
    let res = "";
    let str = int.toString();

    for(let i = 0; i < str.length; i++) {
        res += (parseInt(str[i]) ** 2);
    }

    return parseInt(res);
}

module.exports = {
    isEven, random, mult, add, getCentury, concatenateSquare
}