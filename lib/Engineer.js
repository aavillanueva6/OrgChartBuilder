const Employee = require('./Employee.js');

// defines Engineer class as a subclass of Employee and its unique properties
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
}

/**
 *
 * @returns the github of the Engineer that the function is called on.
 */
Engineer.prototype.getGithub = function () {
  console.log(this.github);
  return this.github;
};

/**
 *
 * @returns the role of the Engineer that the function is called on.
 */
Engineer.prototype.getRole = function () {
  console.log('Engineer');
  return 'Engineer';
};

module.exports = Engineer;
