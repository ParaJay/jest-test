function toNumber(array) {
    let amount = 0;
    let x = 8;

    for(let i = 0; i < array.length; i++) {
        amount += array[i] * x;

        x /= 2;
    }

    return amount;
}

module.exports = {
    toNumber
}