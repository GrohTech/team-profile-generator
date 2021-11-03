
// Creates div for team data
function generateHtml(team) {
    // Creates div for manager
    function createManager(manager) {
        return `
        <div>
        <h2>${manager.getName()}</h2>
        </div>
        <div>
        <h3>${manager.getRole()}</h3>
        </div>
        <div>
        <p><b>Employee ID:</b> ${manager.getId()}</p>
        </div>
        <div>
        <p><b>Email:</b> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
        </div>
        <div>
        <p><b>Office Number:</b> ${manager.getOfficeNum()}</p>
        </div>
        `
    }
    // Creates div for Engineer
    function createEngineer(engineer) {
        return `
        <div>
        <h2>${engineer.getName()}</h2>
        </div>
        <div>
        <h3>${engineer.getRole()}</h3>
        </div>
        <div>
        <p><b>Employee ID:</b> ${engineer.getId()}</p>
        </div>
        <div>
        <p><b>Email:</b> ${engineer.getEmail()}</p>
        </div>
        <div>
        <p><b>Github:</b> <a href="${engineer.getGithub()}">${engineer.getGithub()}</a></p>
        </div>
        `
    }
    // Creates div for Intern
    function createIntern(intern) {
        return `
        <div>
        <h2>${intern.getName()}</h2>
        </div>
        <div>
        <h3>${intern.getRole()}</h3>
        </div>
        <div>
        <p><b>Employee ID:</b> ${intern.getId()}</p>
        </div>
        <div>
        <p><b>School:</b> ${intern.getSchool()}</p>
        </div>
        `
    }
    const cards = [];
    cards.push(team.filter(employee =>
        employee.getRole() == "Manager"
    ).map(manager => createManager(manager)))

    cards.push(team.filter(employee =>
        employee.getRole() == "Engineer"
    ).map(engineer => createEngineer(engineer)))

    cards.push(team.filter(employee =>
        employee.getRole() == "Intern"
    ).map(intern => createIntern(intern)))

    return cards.join("");
}

// Adds divs to HTML
module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="Index.css" />
        <title>Title</title>
    </head>
    <body>

        <header>
            <div>${generateHtml(team)}</div>
        </header>
    </body>
</html>
`
};