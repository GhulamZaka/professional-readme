// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #
  ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  
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
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  This application is covered by ${data.license} license. 

  ## Contribution
  ${data.contribute}

  ## Test
  ${data.test}

  ## Questions
  Github: [${data.github}](https://github.com/${data.github})
 
  Email: ${data.email} (You can email me for additional questions via my email.)

  `;
}

module.exports = generateMarkdown;
