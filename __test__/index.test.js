const index = require("../scripts/index.js");

test("capitalize('hello') = 'Hello'", () => {
    expect(index.capitalize("hello")).toBe("Hello");
});

test("typeof intToString(3) = string", () => {
    expect(typeof index.intToString(3)).toBe("string");
});

describe("check object", () => {
    test("expect createObject to have properties/(keys) name and value", () => {
        let obj = index.createObject();
    
        expect(obj.name).toBeDefined();
        expect(obj.value).toBeDefined();
    });

    test("expect createObject.name to be 'object'", () => {
        let obj = index.createObject();

        expect(obj.name).toBe("object");
    });

    test("expect createObject.val to be 'none'", () => {
        let obj = index.createObject();

        expect(obj.value).toBe("none");
    });
});