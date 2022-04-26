// call in required modules
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// define global variable
let orgArray = [];

/**
 * createManager function runs the inquirer prompts for the manager then calls the required functions after it is completed.
 */
function createManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: `What is your name?`,
        name: 'empName',
      },
      {
        type: 'input',
        message: `What is your id?`,
        name: 'empId',
      },
      {
        type: 'input',
        message: `What is your email address?`,
        name: 'empEmail',
      },
      {
        type: 'input',
        message: `What is your office number?`,
        name: 'empOffice',
      },
      {
        type: 'input',
        message: `What is your department name?`,
        name: 'department',
      },
    ])
    .then(function (response) {
      const newMan = new Manager(
        response.empName,
        response.empId,
        response.empEmail,
        response.empOffice,
        response.department
      );
      orgArray.push(newMan);
      promptAddAnother();
    });
}

function promptAddAnother() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Do you want to add another employee?',
        name: 'anotherEmp',
        choices: ['Yes', 'No'],
      },
    ])
    .then(function (response) {
      response.anotherEmp === 'Yes' ? promptEmpType() : buildHTML(orgArray);
    });
}

function promptEmpType() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Is this employee and Engineer or and Intern?',
        name: 'empType',
        choices: ['Engineer', 'Intern'],
      },
    ])
    .then(function (response) {
      response.empType === 'Engineer' ? createEngineer() : createIntern();
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: `What is the engineer's name?`,
        name: 'empName',
      },
      {
        type: 'input',
        message: `What is the engineer's id?`,
        name: 'empId',
      },
      {
        type: 'input',
        message: `What is the engineer's email address?`,
        name: 'empEmail',
      },
      {
        type: 'input',
        message: `What is the engineer's github profile?`,
        name: 'empGithub',
      },
    ])
    .then(function (response) {
      const newEng = new Engineer(
        response.empName,
        response.empId,
        response.empEmail,
        response.empGithub
      );
      orgArray.push(newEng);
      promptAddAnother();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: `What is the intern's name?`,
        name: 'empName',
      },
      {
        type: 'input',
        message: `What is the intern's id?`,
        name: 'empId',
      },
      {
        type: 'input',
        message: `What is the intern's email address?`,
        name: 'empEmail',
      },
      {
        type: 'input',
        message: `What is the intern's school?`,
        name: 'empSchool',
      },
    ])
    .then(function (response) {
      const newInt = new Intern(
        response.empName,
        response.empId,
        response.empEmail,
        response.empSchool
      );
      orgArray.push(newInt);
      promptAddAnother();
    });
}

function buildHTML(orgArray) {
  const buildEngineerCard = require('./src/engineerCardTemplate');
  const buildManagerCard = require('./src/managerCardTemplate');
  const buildInternCard = require('./src/internCardTemplate');
  const htmlSkeleton = require('./src/htmlSkeleton');
  let htmlString = '';
  htmlString += htmlSkeleton.topHtml();
  orgArray.forEach((element) => {
    const empRole = element.getRole();
    let empCard = '';
    if (empRole === 'Manager') {
      empCard = buildManagerCard(element);
    } else if (empRole === 'Engineer') {
      empCard = buildEngineerCard(element);
    } else if (empRole === 'Intern') {
      empCard = buildInternCard(element);
    } else {
      console.error(error);
    }
    htmlString += empCard;
  });
  htmlString += htmlSkeleton.bottomHtml();
  writeToFile(orgArray[0].department, htmlString);
}

function writeToFile(department, htmlString) {
  const fs = require('fs');
  fs.writeFile(
    `./dist/${department}_Org_Chart.html`,
    htmlString,
    function (err) {
      err ? console.error(err) : console.log('Success!');
    }
  );
}

// call the createManager function
createManager();
