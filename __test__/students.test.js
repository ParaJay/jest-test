const students = require("../scripts/students.js");

describe("test countPresent", () => {
    test("expect countPresent(students) to be 4", () => {
        expect(students.countPresent(students.students)).toBe(4);
    });

    test("expect countPresent([true, true, false, false, false]) to be 2", () => {
        expect(students.countPresent([true, true, false, false, false])).toBe(2);
    });
});