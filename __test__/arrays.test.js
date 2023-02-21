const arrays = require("../scripts/arrays");

describe("check array", () => {
    test("expect array not to be null", () => {
        expect(arrays.array).not.toBeNull();
    });

    test("expect getLengthSix(array) not to be null", () => {
        expect(arrays.getLengthSix(arrays.array)).not.toBeNull();
    });

    test("expect length of elements in getLengthSix(arrays.array) to be >= 6", () => {
        let array = arrays.getLengthSix(arrays.array);

        array.forEach(e => {
            expect(e.length).toBeGreaterThanOrEqual(6);
        })
    });

    test("expect length of elements in ['program', 'testing', 'jesting'] to be >= 6", () => {
        let array = ['program', 'testing', 'jesting'];

        array.forEach(e => {
            expect(e.length).toBeGreaterThanOrEqual(6);
        })
    });
});