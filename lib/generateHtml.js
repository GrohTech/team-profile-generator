
// Creates div for team data
function generateHtml(team) {
    // Creates div for manager
    function createManager(manager) {
        return `
            <div class="card flex-item">
                <div class="card-header">
                    <h2>${manager.getName()}</h2>
                    <h3>${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <p><b>Employee ID:</b> ${manager.getId()}</p>
                    <p><b>Email:</b> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                    <p><b>Office Number:</b> ${manager.getOfficeNum()}</p>
                </div>
            </div>
        `
    }
    // Creates div for Engineer
    function createEngineer(engineer) {
        return `
            <div class="card flex-item">
                <div class="card-header">
                    <h2>${engineer.getName()}</h2>
                    <h3>${engineer.getRole()}</h3>
                </div>
                    <div class="card-body">
                    <p><b>Employee ID:</b> ${engineer.getId()}</p>
                    <p><b>Email:</b> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                    <p><b>Github:</b> <a href="${engineer.getGithub()}">${engineer.getGithub()}</a></p>
                </div>
            </div>
        `
    }
    // Creates div for Intern
    function createIntern(intern) {
        return `
        <div class="card flex-item">
            <div class="card-header">
                <h2>${intern.getName()}</h2>
                <h3>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <p><b>Employee ID:</b> ${intern.getId()}</p>
                <p><b>School:</b> ${intern.getSchool()}</p>
            </div>
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css" />
        <title>Team Profile</title>
    </head>
    <body>
        <header>
        <h1>My Team</h1>
        </header>
        <main>
            <div class="flex-container">${generateHtml(team)}</div>
        </main>
    </body>
</html>
`
};