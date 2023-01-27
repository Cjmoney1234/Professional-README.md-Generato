const Engineer = require('../positions/engineer');


test("Set the Engineer's Name", () => {
    const eName = "John";
    const employee = new Engineer(eName);
    expect(employee.name).toBe( eName);
});

test("Get engineer's gitHub", () => {
    const eGithub = "john2020";
    const employee = new Engineer("John", 1, "John@yahoo.com", eGithub);
    expect(employee.github).toBe(eGithub);
});

test("getRole function", () => {
    const role = "Engineer";
    const employee = new Engineer("John", 1, "John@yahoo.com", role);
    expect(employee.getRole()).toBe(role);
});