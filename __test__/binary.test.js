const binary = require("../scripts/binary");

describe("testing binary.toNumber", () => {
    test("expect toNumber [0, 0, 0, 1] to be 1", () => {
        expect(binary.toNumber([0, 0, 0, 1])).toBe(1);
    });

    test("expect toNumber [0, 1, 0, 1] to be 5", () => {
        expect(binary.toNumber([0, 1, 0, 1])).toBe(5);
    });
});