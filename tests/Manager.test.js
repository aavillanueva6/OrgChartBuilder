const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('getName', () => {
    it('should return the name of the employee that it is called on', () => {
      const expected = 'testName';

      const result = new Manager(
        'testName',
        'testId',
        'testEmail',
        'testOfficeNum'
      ).getName();

      expect(result).toEqual(expected);
    });
  });

  describe('getId', () => {
    it('should return the id of the employee that it is called on', () => {
      const expected = 'testId';
      const result = new Manager(
        'testName',
        'testId',
        'testEmail',
        'testOfficeNum'
      ).getId();
      expect(result).toEqual(expected);
    });
  });

  describe('getEmail', () => {
    it('should return the email of the employee that it is called on', () => {
      const expected = 'testEmail';
      const result = new Manager(
        'testName',
        'testId',
        'testEmail',
        'testOfficeNum'
      ).getEmail();
      expect(result).toEqual(expected);
    });
  });

  describe('getRole', () => {
    it('should return "Manager"', () => {
      const expected = 'Manager';
      const result = new Manager(
        'testName',
        'testId',
        'testEmail',
        'testOfficeNum'
      ).getRole();
      expect(result).toEqual(expected);
    });
  });
});
