const Intern = require("../positions/intern");

test("setting up Intern school constructor", () => {
    const testValue = "University of Central Florida";
    const employee = new Intern("John", 1, "John@yahoo.com", testValue);
    expect(employee.school).toBe(testValue);
});

test("Get Intern's School", () => {
    const testValue = "University of Central Florida";
    const employee = new Intern("John", 1, "John@cheese.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("John", 1, "John@yahoo.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});