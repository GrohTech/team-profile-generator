const Intern = require("../lib/Intern.js");

test('creates n intern object', () => {
    const intern = new Intern("Lauren", 2, 'legroh@uwm.edu', 5);

    // Checks that name is a string
    expect(intern.name).toEqual(expect.any(String));

    // Chcecks that ID is a number
    expect(intern.id).toEqual(expect.any(Number));

    // Checks that school is a string
    expect(intern.school).toEqual(expect.any(String));
});