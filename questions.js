const questions = [
  {
      type: 'input',
      message: 'What is the managers name?',
      name: 'name',
  },
  {
      type: 'input',
      message: 'What is the managers ID number?',
      name: 'id',
  },
  {
      type: 'input',
      message: 'What is the managers email address?',
      name: 'email',
  },
  {
    type: 'input',
    message: 'What is the managers office number?',
    name: 'officeNumber',
},
  {
      type: 'loop',
      name: "employees",
      message: "add another employee?",
      questions: [
          {
              type: 'list',
              message: 'What type of employee are you adding?',
              name: 'type',
              choices: ['Engineer', 'Intern']
          },
          {
              type: 'input',
              message: 'What is the employees name?',
              name: 'name',
          },
          {
              type: 'input',
              message: 'What is the employees ID number?',
              name: 'id',
          },
          {
              type: 'input',
              message: 'What is the employees email address?',
              name: 'email',
          },
          {
              type: 'input',
              message: 'What is the employees github username?',
              name: 'github',
              when: (employee) => employee.type === 'Engineer'
          },
          {
              type: 'input',
              message: 'What is the name of the employees school?',
              name: 'school',
              when: (employee) => employee.type === 'Intern'
          },
      ]
  }
]


module.exports = questions