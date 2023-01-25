const Engineer = require('../positions/engineer');

test("setting up engineer's constructor", () => {
    const testValue = "cjmoney1234";
    const employee = new Engineer("John", 1, "John@yahoo.com", testValue);
    expect(employee.github).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("John", 1, "John@yahoo.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("Get engineer's gitHub", () => {
    const testValue = "cjmoney1234";
    const employee = new Engineer("John", 1, "John@yahoo.com", testValue);
    expect(employee.github).toBe(testValue);
});