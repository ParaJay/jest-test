const numbers = require("../scripts/numbers.js");

describe("check numbers functions", () => {
    test("expect mult(3, 5) to be 15", () => {
        expect(numbers.mult(3, 5)).toBe(15);
    });
    
    test("add(3 + 5) = 8", () => {
        expect(numbers.add(3, 5)).toBe(8);
    });

    test("random() >= 0 and <= 10", () => {
        let r = numbers.random();
    
        expect(r).toBeGreaterThanOrEqual(0);
        expect(r).toBeLessThanOrEqual(10);
    });
});

describe("check numbers.isEven", () => {
    test("expect isEven(2) to be true", () => {
        expect(numbers.isEven(2)).toBeTruthy();
    });

    test("expect isEven(5) to be false", () => {
        expect(numbers.isEven(5)).toBeFalsy();
    });
});

describe("check numbers.getCentury", () => {
    test("expect getCentury(1701) to be 17", () => {
        expect(numbers.getCentury(1701)).toBe(17);
    });

    test("expect getCentury(1999) to be 19", () => {
        expect(numbers.getCentury(1999)).toBe(19);
    });
});

describe("check concatenateSquare fully works", () => {
    test("expect concatenateSquare(34) to be 916", () => {
        expect(numbers.concatenateSquare(34)).toBe(916);
    });

    test("expect concatenateSquare(12) to be 14", () => {
        expect(numbers.concatenateSquare(12)).toBe(14);
    });
});