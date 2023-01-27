const Employee = require('../positions/employee');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Set the Employee's Name", () => {
    const eName = "Jeff";
    const employee = new Employee(eName);
    expect(employee.name).toBe(eName);
});

test("Set the Employee's ID", () => {
    const Eid = 23;
    const employee = new Employee("Jeff", Eid);
    expect(employee.id).toBe(Eid);
});

test("Set the Employee's email", () => {
    const eEmail = "zulma.jeff@yahoo.com";
    const employee = new Employee("Jeff", 1, eEmail);
    expect(employee.email).toBe(eEmail);
});

test("getRole function returns Employee's role", () => {
    const testRole = "Employee";
    const employee = new Employee("Jeff", 1, "zulma.jeff@yahoo.com");
    expect(employee.getRole()).toBe(testRole);
});