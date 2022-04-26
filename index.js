// call in required modules
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// define global variable
let orgArray = [];

/**
 * Function to create a manager.  It runs the inquirer prompts with questions for the manager, pushes the new employee to the orgArray, then calls promptAddAnother.
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
      // creates a new Manager Object with inquirer responses, and pushes it to the orgArray
      const newMan = new Manager(
        response.empName,
        response.empId,
        response.empEmail,
        response.empOffice,
        response.department
      );
      orgArray.push(newMan);

      // calls the promptAddAnother function.
      promptAddAnother();
    });
}

/**
 * Function to ask if another employee should be added.  If yes, go to promptEmpType.  If no, go to buildHTML.
 */
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
      // ternary to determine whether to create another employee or to build the org chart html
      response.anotherEmp === 'Yes' ? promptEmpType() : buildHTML(orgArray);
    });
}

/**
 * function to ask if the next employee should be an Engineer or an Intern.  If Engineer, go to createEngineer.  If Intern, go to createIntern.
 */
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
      // ternary to determine which create function to step to next.
      response.empType === 'Engineer' ? createEngineer() : createIntern();
    });
}

/**
 * Function to create an Engineer.  It runs the inquirer prompts with questions for the Engineer, pushes the new employee to the orgArray, then calls promptAddAnother.
 */
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
      // creates a new Engineer Object with inquirer responses, and pushes it to the orgArray
      const newEng = new Engineer(
        response.empName,
        response.empId,
        response.empEmail,
        response.empGithub
      );
      orgArray.push(newEng);

      // calls the promptAddAnother Function
      promptAddAnother();
    });
}

/**
 * Function to create an Intern.  It runs the inquirer prompts with questions for the Intern, pushes the new employee to the orgArray, then calls promptAddAnother.
 */
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
      // creates a new Intern Object with inquirer responses, and pushes it to the orgArray
      const newInt = new Intern(
        response.empName,
        response.empId,
        response.empEmail,
        response.empSchool
      );
      orgArray.push(newInt);

      // calls the promptAddAnother function
      promptAddAnother();
    });
}

/**
 * function to build the HTML string for the org chart.  Calls in the required functions for the html templates, builds the HTML by looping through each of the employees in the orgArray, then calls the writeToFile function.
 * @param {array} orgArray is an array of employee objects (with their own subclasses beyond employee)
 */
function buildHTML(orgArray) {
  // calls in required functions
  const buildEngineerCard = require('./src/engineerCardTemplate');
  const buildManagerCard = require('./src/managerCardTemplate');
  const buildInternCard = require('./src/internCardTemplate');
  const htmlSkeleton = require('./src/htmlSkeleton');

  // initializes htmlString as an empty string
  let htmlString = '';

  // builds the htmlString by adding the top portion, looping through each of the elements in the orgArray, and calling the appropriate function based on employee role, then adding the bottom portion.
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

  // calls the writeToFile function
  writeToFile(orgArray[0].department, htmlString);
}

/**
 * function to write the html file to a new file.  The function takes the department name for the org chart to provide a unique title to the file, then saves it to the /dist directory.
 * @param {string} department department name string from manager prompts
 * @param {string} htmlString htmlString for the built site, from the buildHTML function.
 */
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
