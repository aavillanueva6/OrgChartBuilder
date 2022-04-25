const Employee = require('./Employee.js');

// defines Intern class as a subclass of Employee and its unique properties
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
}

/**
 *
 * @returns the school of the Intern that the function is called on.
 */
Intern.prototype.getSchool = function () {
  console.log(this.school);
  return this.school;
};

/**
 *
 * @returns the role of the Intern that the function is called on.
 */
Intern.prototype.getRole = function () {
  console.log('Intern');
  return 'Intern';
};

module.exports = Intern;
