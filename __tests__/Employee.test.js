const Employee = require("../lib/Employee.js");
// const { TestWatcher } = require("@jest/core");

test('creates an employee object', () => {
    const employee = new Employee("Lauren",1, 'legroh@uwm.edu');

    // Checks that name is a string
    expect(employee.name).toEqual(expect.any(String));

    // Chcecks that ID is a number
    expect(employee.id).toEqual(expect.any(Number));

    // Checks that email is a string
    expect(employee.email).toEqual(expect.any(String));

});