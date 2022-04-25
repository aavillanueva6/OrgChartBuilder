// defines Manager class as a subclass of Employee and its unique properties
class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }
}

/**
 *
 * @returns the role of the Manager that the function is called on.
 */
Employee.prototype.getRole = function () {
  console.log('Manager');
  return 'Manager';
};
