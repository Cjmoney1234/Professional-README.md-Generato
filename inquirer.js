const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');
const createHtml = require("./dist/templates/html")


inquirer.prompt([questions])
.then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNum)
    const employees = data.employees
    const engineers = []
    const interns = []

    for(let i = 0; i < employees.length; i++) {
        const e = employees[i]
        if (e.type === "Engineer") {
            const engineer = new Engineer(e.name, e.id, e.email, e.github)
            engineers.push(engineer)
        } else if (e.type === "Intern") {
            const intern = new Intern(e.name, e.id, e.email, e.school)
            interns.push(intern)
        }
    }
    const managerCard = generateManagerCard(manager)
    const engineerCards = generateEngineerCards(engineers)
    const internCards = generateInternCards(interns)
    const html = generateHtml(managerCard, engineerCards, internCards)


    fs.writeFile('index.html', html, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
})