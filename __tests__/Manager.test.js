const Manager = require("../lib/Manager.js");

test('creates a manager object', () => {
    const manager = new Manager("Lauren", 2, 'legroh@uwm.edu', 5);

    // Checks that name is a string
    expect(manager.name).toEqual(expect.any(String));

    // Chcecks that ID is a number
    expect(manager.id).toEqual(expect.any(Number));

    // Checks that email is a string
    expect(manager.email).toEqual(expect.any(String));

    // Checks that office number is a string
    expect(manager.officeNum).toEqual(expect.any(Number));
});