const questions = [
  {
      type: 'input',
      message: "What is the Manager's name?",
      name: 'name',
  },
  {
      type: 'input',
      message: "What is the Manager's ID number?",
      name: 'id',
  },
  {
      type: 'input',
      message: "What is the Manager's email?",
      name: 'email',
  },
  {
    type: 'input',
    message: "What is the Manager's Office number?",
    name: 'officeNumber',
},
  {
      type: 'loop',
      name: "employees",
      message: "Do you want to add another employee to finish your team?",
      questions: [
          {
              type: 'list',
              message: "What is the employee's title?",
              name: 'type',
              choices: ['Engineer', 'Intern']
          },
          {
              type: 'input',
              message: "What is the employee's name?",
              name: 'name',
          },
          {
              type: 'input',
              message: "What is the employee's ID number?",
              name: 'id',
          },
          {
              type: 'input',
              message: "What is the employee's email?",
              name: 'email',
          },
          {
              type: 'input',
              message: "What is the employee's github username?",
              name: 'github',
              when: (employee) => employee.type === 'Engineer'
          },
          {
              type: 'input',
              message: "What school do the Intern attend?",
              name: 'school',
              when: (employee) => employee.type === 'Intern'
          },
      ]
  }
]


module.exports = questions