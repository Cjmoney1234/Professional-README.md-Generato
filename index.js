const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require('fs');

const questions = require('./questions');

const Manager = require('./positions/manager');
const Engineer = require('./positions/engineer');
const Intern = require('./positions/intern');

const { generateManagerCard, generateEngineerCards, generateInternCards } = require("./template/cards");
const generateHtml = require('./template/html')

inquirer.prompt(questions)
.then((answers) => {
  const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  const employees = answers.employees;
  const engineers = [];
  const interns = [];

  for(let i = 0; i < employees.length; i++) {
      const newEmployee = employees[i]
      if (newEmployee.type === "Engineer") {
          const engineer = new Engineer(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.github)
          engineers.push(engineer)
      } else if (e.type === "Intern") {
          const intern = new Intern(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.school)
          interns.push(intern)
      }
  }

  const managerCard = generateManagerCard(manager);
  const engineerCards = generateEngineerCards(engineers);
  const internCards = generateInternCards(interns);
  const htmlGenerator = generateHtml(managerCard, engineerCards, internCards);


  fs.writeFile('index.html', htmlGenerator, (err) =>
      err ? console.error(err) : console.log('Your dev team has successfully been created!')
  );
})
  
  
  

