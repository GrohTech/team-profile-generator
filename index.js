// App packages
const inquirer = require('inquirer');
const fs = require('fs');
// const generateHtml = require('./lib/generateHtml.js');

// Manager questions
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your team manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of your manager!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your team manager's employee id? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter the employee id of your team manager!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your team manager's email address? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter the email address of your team manager!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNum',
        message: "What is your team manager's office number? (Required)",
        validate: officeNumInput => {
            if (officeNumInput) {
                return true;
            } else {
                console.log('Please enter the office number of your team manager!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'menu',
        message: "What's next?",
        choices: ['Add an engineer', 'Add an intern', 'Show me the team profile!']
    }
];

// Engineer Questions
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of your engineer!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's employee id? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter the employee id of your engineer!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email address? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter the email address of your engineer!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your engineer's GitHub username? (Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter the GitHub username of your engineer!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'menu',
        message: "What's next?",
        choices: ['Add an engineer', 'Add an intern', 'Show me the team profile!']
    }
];

// Intern Questions
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of your intern!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's employee id? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter the employee id of your intern!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Where does your intern go to school? (Required)",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please share your intern's school name!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'menu',
        message: "What's next?",
        choices: ['Add an engineer', 'Add an intern', 'Show me the team profile!']
    }
]

// Write HTML file
function writeToFile(answers) {

    fs.writeFile('./dist/readme.md', generateMarkdown(answers)
        , err => {
            if (err) {
                console.error(err)
                return
            }
        }
    )
};

// Initialize app
function init() {
    inquirer.prompt(managerQuestions)
        .then((answers) => {
            writeToFile(answers)
            console.log(answers);
        })
}
init();