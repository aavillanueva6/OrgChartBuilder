// defines Intern class as a subclass of Employee and its unique properties
class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }
}

/**
 *
 * @returns the school of the Intern that the function is called on.
 */
Employee.prototype.getSchool = function () {
  console.log(this.school);
  return this.school;
};

/**
 *
 * @returns the role of the Intern that the function is called on.
 */
Employee.prototype.getRole = function () {
  console.log('Intern');
  return 'Intern';
};
