const array = [
    "hello", "memory", "alphas", "div"
]

function getLengthSix(array) {
    let res = [];

    array.forEach(e => {
        if(e.length >= 6) {
            res.push(e);
        }
    });

    return res;
}

module.exports = {
    array, getLengthSix
}