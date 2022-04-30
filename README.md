# Organizational Chart Builder

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application uses node.js to prompt the user through a series of questions to build out their team's organizational chart. The application takes the responses from the user and creates an HTML page that displays the org chart.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
- [Future Development](#future-development)

---

## Installation

To install this application, node.js must be installed.

After node has been installed, the repo should be cloned onto the user's local machine. Node packages (Inquirer and Jest) are used in the application (Inquirer for user prompts through the command line, and Jest for unit level testing).

---

## Usage

To use the application, launch index.js from node and follow the prompts for the input. The generated HTML file will be saved in the dist folder under the filename "{departmentName}\_Org_Chart.html". This file may then be renamed and / or relocated to a desired directory.

A demo of this application is uploaded to YouTube at the following link: [Org Chart Builder Demo](https://www.youtube.com/watch?v=xbOYocRNSnc). The html that was generated during the demo is in the /dist directory under the filename "My_Test_Department_Org_Chart.html".

---

## Tests

This application uses the Jest testing framework. To run the test scripts, jest must be loaded into your local project folder, and the test scripts can be run using the command line. `npm run test` in the command line will run the jest test scripts.

---

## License

This project is licensed under a [MIT License](https://opensource.org/licenses/MIT).

---

## Questions

Check out my [GitHub profile](https://github.com/aavillanueva6).

For additional questions about this project, please reach out to me at <aavillanueva6@gmail.com>

---

## Future Development

Additional employee data could be gathered:

- Title
- Phone Number
- etc.
