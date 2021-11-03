const Engineer = require("../lib/Engineer.js");

test('creates an engineer object', () => {
    const engineer = new Engineer("Lauren", 2, 'legroh@uwm.edu', 'github.com/grohTech');

    // Checks that name is a string
    expect(engineer.name).toEqual(expect.any(String));

    // Chcecks that ID is a number
    expect(engineer.id).toEqual(expect.any(Number));

    // Checks that email is a string
    expect(engineer.email).toEqual(expect.any(String));

    // Checks that github is a string
    expect(engineer.github).toEqual(expect.any(String));
});

