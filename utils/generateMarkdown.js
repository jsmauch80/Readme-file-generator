// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license == "GNU") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]";
  } else if (license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
} else {
  return "";
}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license == "GNU") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
} else {
  return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  ## This project uses the following license
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`
}
function renderTitle(title) {
  return `${data.title}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Testing](#tests)
  [Questions](#questions)

  ## Installation
${data.installation}
  ## Usage
${data.usage}
  ## License
${data.license}
  ## Contributing
${data.contribution}
  ## Tests
${data.test}
  ## Questions

  #Github Username: [${data.github}](http://github.com/${data.github})

  #Email any questions to: ${data.email}

`;
}

module.exports = generateMarkdown;
