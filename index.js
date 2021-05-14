// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description of your project explaining the what, why, and how of your project. Click enter and use the following questions as a guide:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What was your motivation to build this project?',
        name: 'descriptionMotivation',
    },
    {
        type: 'input',
        message: 'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")',
        name: 'descriptionWhy',
    },
    {
        type: 'input',
        message: 'What problem does your project solve?',
        name: 'descriptionProblem',
    },
    {
        type: 'input',
        message: 'What did you learn after making this project?',
        name: 'descriptionLesson',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        name: 'tests',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a licence for your project:',
        choices: ['MIT LICENCE', 'APACHE LICENCE', 'GPL LICENSE', 'NONE'],
    },
    {
        type: 'input',
        message: 'What is your Github username',
        name: 'githubQuestions',
    },
    {
        type: 'input',
        message: 'What is your email adress?',
        name: 'emailQuestions',
    },
    {
        type: 'input',
        message: 'What is your phone number?',
        name: 'phoneQuestions',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile(data);
        });

}

// Function call to initialize app
init();
