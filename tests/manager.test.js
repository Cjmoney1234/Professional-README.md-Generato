const Manager = require('../positions/manager');


test("setting Manager's office number", () => {
    const testValue = "202";
    const employee = new Manager("Jeff", 1, "zulma.jeff@yahoo.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
});

test("get Role function", () => {
    const testValue = "Manager";
    const employee = new Manager("Jeff", 1, "zulma.jeff@yahoo.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});