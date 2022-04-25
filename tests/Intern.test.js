const Intern = require('../lib/Intern');

describe('Employee', () => {
  describe('getName', () => {
    it('should return the name of the employee that it is called on', () => {
      const expected = 'testName';

      const result = new Intern(
        'testName',
        'testId',
        'testEmail',
        'testSchool'
      ).getName();

      expect(result).toEqual(expected);
    });
  });

  describe('getId', () => {
    it('should return the id of the employee that it is called on', () => {
      const expected = 'testId';
      const result = new Intern(
        'testName',
        'testId',
        'testEmail',
        'testSchool'
      ).getId();
      expect(result).toEqual(expected);
    });
  });

  describe('getEmail', () => {
    it('should return the email of the employee that it is called on', () => {
      const expected = 'testEmail';
      const result = new Intern(
        'testName',
        'testId',
        'testEmail',
        'testSchool'
      ).getEmail();
      expect(result).toEqual(expected);
    });
  });

  describe('getRole', () => {
    it('should return "Intern"', () => {
      const expected = 'Intern';
      const result = new Intern(
        'testName',
        'testId',
        'testEmail',
        'testSchool'
      ).getRole();
      expect(result).toEqual(expected);
    });
  });

  describe('getSchool', () => {
    it('should return the school of the employee that it is called on', () => {
      const expected = 'testSchool';
      const result = new Intern(
        'testName',
        'testId',
        'testEmail',
        'testSchool'
      ).getSchool();
      expect(result).toEqual(expected);
    });
  });
});
