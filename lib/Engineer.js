// defines Engineer class as a subclass of Employee and its unique properties
class Engineer extends Employee {
  constructor(github) {
    this.github = github;
  }
}

/**
 *
 * @returns the github of the Engineer that the function is called on.
 */
Employee.prototype.getGithub = function () {
  console.log(this.github);
  return this.github;
};

/**
 *
 * @returns the role of the Engineer that the function is called on.
 */
Employee.prototype.getRole = function () {
  console.log('Engineer');
  return 'Engineer';
};
