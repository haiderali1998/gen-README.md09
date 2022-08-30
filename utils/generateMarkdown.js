// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === null || license === "")
  {
    return ``;
  }
  else
  {
  let licBad = "https://shields.io/badge/license-"+license+"-blue.svg";
  return `${licBad}`;
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
  # ${data.title}

## Table of Contents:

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributor](#Contributors)
* [Tests](#Tests)
* [Questions](#Questions)
## Installation:

Install dependency using command : ${data.install}
### Usage:

${data.repository}
### License:

${renderLicenseSection(data.qlicense)}
### Contributors:

${data.contribute}
### Tests:

${data.tests}
## Questions:

* Link to my GitHub profile : https://github.com/${data.username}

`;

}

module.exports = generateMarkdown;
