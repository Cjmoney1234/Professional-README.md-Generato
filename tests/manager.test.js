const Manager = require('../positions/manager');

test("Set the Manager's Name", () => {
    const mName = "Jeff";
    const employee = new Manager(mName);
    expect(employee.name).toBe( mName);
});

test("setting Manager's office number", () => {
    const officeNum = "202";
    const employee = new Manager("Jeff", 1, "zulma.jeff@yahoo.com", officeNum);
    expect(employee.officeNumber).toBe(officeNum);
});

test("get Role function", () => {
    const role = "Manager";
    const employee = new Manager("Jeff", 1, "zulma.jeff@yahoo.com", role);
    expect(employee.getRole()).toBe(role);
});