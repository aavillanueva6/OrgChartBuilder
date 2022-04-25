// defines employee class and its properties
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

/**
 *
 * @returns the name of the employee that the function is called on.
 */
Employee.prototype.getName = function () {
  console.log(this.name);
  return this.name;
};

/**
 *
 * @returns the id of the employee that the function is called on.
 */
Employee.prototype.getId = function () {
  console.log(this.id);
  return this.id;
};

/**
 *
 * @returns the email of the employee that the function is called on.
 */
Employee.prototype.getEmail = function () {
  console.log(this.email);
  return this.email;
};

/**
 *
 * @returns the role of the employee that the function is called on.
 */
Employee.prototype.getRole = function () {
  console.log('Employee');
  return 'Employee';
};
