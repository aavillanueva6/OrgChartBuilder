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
 * @returns the Office Number of the Manager that the function is called on.
 */
Manager.prototype.getOfficeNum = function () {
  return this.officeNumber;
};

/**
 *
 * @returns the role of the Manager that the function is called on.
 */
Manager.prototype.getRole = function () {
  return 'Manager';
};

module.exports = Manager;
