const Choices = require("inquirer/lib/objects/choices");

// TODO: Create a function that returns a license badge based on which license is passed in
function licenseBadge(license) {
  if (license === 'MIT LICENCE') {
    return 'https://img.shields.io/apm/l/vim-mode'
  }
  else if (license === 'APACHE LICENCE') {
    return 'https://img.shields.io/aur/license/android-studio'
  }
  else if (license === 'MOZILLA LICENSE') {
    return '(https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'
  }
};

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'NONE') {
    return '';
  }
};

// TODO: Create a function that returns the license link
function licenseLink(license) {
  if (license === 'MIT LICENCE') {
    return '(https://opensource.org/licenses/MIT)'
  }
  else if (license === 'APACHE LICENCE') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license === 'MOZILLALICENSE') {
    return '(https://opensource.org/licenses/MPL-2.0)'
  }
};
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'NONE') {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
function licenseSection(license) {
  if (license === 'MIT LICENCE') {
    return '[License: MIT]'
  }
  else if (license === 'APACHE LICENCE') {
    return 'APACHE section'
  }
  else if (license === 'MOZILLA LICENSE') {
    return '[License: MPL 2.0]'
  }
};

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'NONE') {
    return '';
  }
};

licenseBadge();
licenseLink();
licenseSection();
renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.descriptionMotivation}.
  
  ${data.descriptionWhy}.
  
  ${data.descriptionProblem}.
  
  ${data.descriptionLesson}.
  
  ## Table of contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}.
  
  ## Usage
  
  ${data.usage}.
  
  ## Contributing
  
  ${data.contributing}.
  
  ## Tests
  
  ${data.tests}.
  
  ## Licence
  
  ${data.license}.
  
  ## Questions
  
  ${data.githubQuestions}.
  
  ${data.emailQuestions}.
  
  ${data.phoneQuestions}.`
};

module.exports = generateMarkdown;
