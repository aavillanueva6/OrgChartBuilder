const Employee = require('./Employee.js');

// defines Manager class as a subclass of Employee and its unique properties
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
}

/**
 *
 * @returns the role of the Manager that the function is called on.
 */
Manager.prototype.getRole = function () {
  console.log('Manager');
  return 'Manager';
};

module.exports = Manager;
