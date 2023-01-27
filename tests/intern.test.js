const Intern = require("../positions/intern");


test("Set the Intern's Name", () => {
    const iName = "Candice";
    const employee = new Intern(iName);
    expect(employee.name).toBe( iName);
});

test("Get Intern's School", () => {
    const iSchool = "Florida Atlantic University";
    const employee = new Intern("Candice", 1, "candice@yahoo.com", iSchool);
    expect(employee.getSchool()).toBe(iSchool);
});

test("getRole function", () => {
    const role = "Intern";
    const employee = new Intern("Candice", 1, "candice@yahoo.com", role);
    expect(employee.getRole()).toBe(role);
});