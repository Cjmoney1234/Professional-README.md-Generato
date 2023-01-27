const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require('fs');

const questions = require('./template/questions');

const Manager = require('./positions/manager');
const Engineer = require('./positions/engineer');
const Intern = require('./positions/intern');

const { addManager, addEngineer, addIntern } = require("./template/cards");
const generateHtml = require('./template/html');

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
      } else if (newEmployee.type === "Intern") {
          const intern = new Intern(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.school)
          interns.push(intern)
      }
  }

  const generateManager = addManager(manager);
  const generateEngineer = addEngineer(engineers);
  const generateIntern = addIntern(interns);
  const htmlGenerator = generateHtml(generateManager, generateEngineer, generateIntern);


  fs.writeFile('index.html', htmlGenerator, (err) =>
      err ? console.error(err) : console.log('Your dev team has successfully been created!')
  );
})
  
  
  

