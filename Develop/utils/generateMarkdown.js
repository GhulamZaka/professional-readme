// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg) <br />
  # ${data.title} 

  ## Description
  ${data.description}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usageInfo}

  ## License
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg) <br />
  This application is covered by ${data.license} license. 

  ## Contribution
  ${data.contribute}

  ## Test
  ${data.test}

  ## Questions
  Github: [${data.github}](https://github.com/${data.github})
 
  Email: ${data.email} (You can email me for additional questions via my email.)

  `;
};

module.exports = generateMarkdown;
