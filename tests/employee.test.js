const Employee = require('../positions/employee');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Set the Employee's Name", () => {
    const name = "Jeff";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Set the Employee's ID", () => {
    const testId = 23;
    const employee = new Employee("Jeff", testId);
    expect(employee.id).toBe(testId);
});

test("Set the Employee's email", () => {
    const testEmail = "zulma.jeff@yahoo.com";
    const employee = new Employee("Jeff", 1, testEmail);
    expect(employee.email).toBe(testEmail);
});

test("get Employee's name from getName function", () => {
    const testName = "Jeff";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

test("get Employee's ID from getId", () => {
    const testId = "23";
    const employee = new Employee("Jeff", testId);
    expect(employee.getId()).toBe(testId);
});

test("get Employee's email from email", () => {
    const testEmail = "zulma.jeff@yahoo.com";
    const employee = new Employee("Jeff", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test('getRole function returning Employee', () => {
    const testRole = "Employee";
    const employee = new Employee("Jeff", 1, "zulma.jeff@yahoo.com");
    expect(employee.getRole()).toBe(testRole);
});