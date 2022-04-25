const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('getName', () => {
    it('should return the name of the employee that it is called on', () => {
      const expected = 'testName';

      const result = new Employee('testName', 'testId', 'testEmail').getName();

      expect(result).toEqual(expected);
    });
  });

  describe('getId', () => {
    it('should return the id of the employee that it is called on', () => {
      const expected = 'testId';
      const result = new Employee('testName', 'testId', 'testEmail').getId();
      expect(result).toEqual(expected);
    });
  });

  describe('getEmail', () => {
    it('should return the email of the employee that it is called on', () => {
      const expected = 'testEmail';
      const result = new Employee('testName', 'testId', 'testEmail').getEmail();
      expect(result).toEqual(expected);
    });
  });

  describe('getRole', () => {
    it('should return "Employee"', () => {
      const expected = 'Employee';
      const result = new Employee('testName', 'testId', 'testEmail').getRole();
      expect(result).toEqual(expected);
    });
  });
});
