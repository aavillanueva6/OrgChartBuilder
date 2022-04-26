const Employee = require('./Employee.js');

// defines Intern class as a subclass of Employee and its unique properties
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  /**
   * @returns the school of the Intern that the function is called on.
   */
  getSchool() {
    return this.school;
  }

  /**
   * @returns the role of the Intern that the function is called on.
   */
  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;
