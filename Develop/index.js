// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
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
      // validate: (startGeneratorConfirm) => {
      //   if (startGeneratorConfirm) {
      //     return true;
      //   } else {
      //     console.log(
      //       "For starting application you need to press ENTER or type Y!"
      //     );
      //     return false;
      //   }
      // },
    },

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
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
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
      // inserting installation instructions
      type: "input",
      name: "install",
      message: `Please add your installation instructions`,
    },

    {
      // adding usage information
      type: "input",
      name: "usageInfo",
      message: `Please enter usage information`,
    },

    {
      // adding contributors
      type: "input",
      name: "contribute",
      message: `Please list all the contributions here.`,
    },

    {
      // adding test instructions
      type: "input",
      name: "test",
      message: `Please add your instructions for running tests`,
    },

    {
      // adding license selection prompt
      type: "list",
      name: "license",
      message: "Which open source license would you like to use? ",
      choices: [
        "Apache_2.0",
        "BSD_2-Clause",
        "GNU AGPLv3.0",
        "MIT",
        "Mozilla_Public_2.0",
      ],
    },
  ]);
};

// TODO: Create a function to initialize app
async function init() {
  try {
    const data = await questions();
    const generateContent = generateMarkdown(data);

    await writeFileAsync(`./output/README.md`, generateContent);
    console.log("Successfully created README.md ");
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize app
init();
