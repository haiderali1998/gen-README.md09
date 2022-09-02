// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   console.log(license)
//   'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'
//   let licenseBadgeUrl = ''
//   switch (license) {
//     case 'MIT':
//       licenseBadgeUrl = 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT'
//       break;
//     case 'GPL 3.0':
//       licenseBadgeUrl = 'https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0';
//       break;
//       case 'APACHE 2.0':
//       licenseBadgeUrl = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0';
//       break;
//     default:
//       return ''
//   }
//   return `[![License](${licenseBadgeUrl})`;
// };



function renderLicenseBadge(license) {
  if (license === null || license === "") {
    return ``;
  }
  else {
    let licBad = "https://shields.io/badge/license-" + license + "-blue.svg";
    return `${licBad}`;
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === null) return "";
  return "[License](#license)";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license === null || license === "") {
    return ``;
  }
  else {
    return `* This is under ${data.license} license. This link explains the license terms and conditions ${renderLicenseLink(license)}`;
  }
};

// function to generate markdown for README
function generateMarkdown(data) {
  return`
  
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ![License](https://img.shields.io/badge/License-${data.license}-blue)
  
  ## Table of Contents
  * [Description](#description)
  * [Usage](#repository)
  * [Installation](#install)
  * [Testing](#test)
  * ${renderLicenseLink(data.license)}
  * [Contributors](#contribute)
  * [Questions](#questions)
  * [Contact Details](#email)
   
  ## GitHub Username:
  ${data.username}
  
  <a name='description'></a>
  ## Description
  ${data.description}

  <a name='repository'></a>
  ## Usage
  ${data.repository}

  <a name='install'></a>
  ## Installation
  ${data.install}

  <a name='tests'></a>
  ## Tests
  ${data.tests}

  <a name='license'></a>
  ## License
  This is under  ${data.license} license.

  <a name='contribute'></a>
  ## Contributors
  ${data.contribute}
  
  ## Contact Details
  Contact me on ${data.email}
`;
}

module.exports = generateMarkdown;
