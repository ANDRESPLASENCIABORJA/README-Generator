// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT LICENSE') {
    return 'https://img.shields.io/apm/l/vim-mode'
  } else if (license === 'APACHE LICENSE') {
    return 'https://img.shields.io/aur/license/android-studio'
  } else if (license === 'MOZILLA LICENSE') {
    return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
  } else
    return '';
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT LICENSE') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'APACHE LICENSE') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'MOZILLA LICENSE') {
    return 'https://opensource.org/licenses/MPL-2.0'
  } else
    return '';
};


// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'MIT LICENSE') {
    return '[License: MIT]'
  } else if (license === 'APACHE LICENSE') {
    return 'APACHE section'
  } else if (license === 'MOZILLA LICENSE') {
    return '[License: MPL 2.0]'
  } else
    return '';
};

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
  ${renderLicenseBadge(data.license)}.
  ${renderLicenseLink(data.license)}.
  ${renderLicenseSection(data.license)}.

  ## Questions
  
  ${data.githubQuestions}.
  
  ${data.emailQuestions}.
  
  ${data.phoneQuestions}.`
};




module.exports = generateMarkdown;
