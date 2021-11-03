const Engineer = require("../lib/Engineer.js");
const Employee = require("../lib/Employee.js");
// const { TestWatcher } = require("@jest/core");

jest.mock('../lib/Employee.js');

test('creates an engineer object'), () => {
    const engineer = new Engineer("Lauren", 2, 'legroh@uwm.edu', 'github.com/grohTech');

    // Checks that name is a string
    expect(engineer.getName()).toEqual(expect.any(String));

    // Chcecks that ID is a number
    expect(engineer.getId()).toEqual(expect.any(Number));

    // Checks that email is a string
    expect(engineer.getEmail()).toEqual(expect.any(String));

    // Checks that github is a string
    expect(engineer.getGithub()).toEqual(expect.any(String));
}

