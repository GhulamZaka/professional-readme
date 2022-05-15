// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//const generatePage = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const start = () => {
  console.log(`
      =================
      Welcome to the Professional README Generator!
      =================
      `);
  return inquirer.prompt([
    {
      // prompt for the starting of the README Generator
      type: "confirm",
      name: "startGenerator",
      message: "Do you want to start the application? Press Y to start",
      default: false,
      validate: (startGeneratorConfirm) => {
        if (startGeneratorConfirm) {
          return true;
        } else {
          console.log(
            "For starting application you need to press ENTER or type Y!"
          );
          return false;
        }
      },
    },
  ]);
};

const questions = () => {
  return inquirer.prompt([
    {
      // project title prompt
      type: "input",
      name: "title",
      message: "What is the title of your project?(Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },

    {
      // Github username prompt
      type: "input",
      name: "github",
      message: "What is your GitHub Username?",
    },
    {
      // Email prompt
      type: "input",
      name: "email",
      message: "What is you email address?",
    },
    {
      // inserting description prompt
      type: "input",
      name: "description",
      message: "Provide a description of the project (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("You need to enter a project description!");
          return false;
        }
      },
    },

    {
      // installation instruction prompt
      type: "confirm",
      name: "installation",
      message: "Do you want to add installation instruction?",
    },

    {
      // inserting installation instructions
      type: "input",
      name: "installInstructions",
      message: `Please add your installation instructions`,
      when: function (answers) {
        return answers.install;
      },
    },
    {
      // Usage information prompt
      type: "confirm",
      name: "usage",
      message: `Do you want to provide the user usage information?`,
    },

    {
      // adding usage information
      type: "input",
      name: "usageInfo",
      message: `Please add your usage information`,
      when: function (answers) {
        return answers.usage;
      },
    },

    {
      // contributing to the repo prompt
      type: "confirm",
      name: "contrib",
      message: `Do you want to add any notes on contributing to the repo?`,
    },
    {
      // adding contributors
      type: "input",
      name: "contribNotes",
      message: `Please list the contributions here.`,
      when: function (answers) {
        return answers.contrib;
      },
    },
  ]);
};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init()
start().then(questions);
