
function generateHtml(team) {
    function createManager(manager){
        return `
        <div>
        <p>${manager.getName()}</p>
        </div>
        <div>
        <p>${manager.getRole()}</p>
        </div>
        <div>
        <p>${manager.getId()}</p>
        </div>
        <div>
        <p>${manager.getEmail()}</p>
        </div>
        <div>
        <p>${manager.getOfficeNum()}</p>
        </div>
        `
    }    
    const cards = [];
    cards.push(team.filter(employee =>
        employee.getRole() == "Manager"
    ).map(manager => createManager(manager)))
    // cards.push(team.filter(employee =>{
    //     employee.getRole() = "Manager";

    // }).map(manager => createManager(manager)))
    return cards.join("");
}


module.exports = team =>{
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