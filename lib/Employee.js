// defines employee class and its properties
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  /**
   * @returns the name of the employee that the function is called on.
   */
  getName() {
    return this.name;
  }

  /**
   * @returns the id of the employee that the function is called on.
   */
  getId() {
    return this.id;
  }

  /**
   * @returns the email of the employee that the function is called on.
   */
  getEmail() {
    return this.email;
  }

  /**
   * @returns the role of the employee that the function is called on.
   */
  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
