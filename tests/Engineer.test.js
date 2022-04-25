const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('getName', () => {
    it('should return the name of the employee that it is called on', () => {
      const expected = 'testName';

      const result = new Engineer(
        'testName',
        'testId',
        'testEmail',
        'testGithub'
      ).getName();

      expect(result).toEqual(expected);
    });
  });

  describe('getId', () => {
    it('should return the id of the employee that it is called on', () => {
      const expected = 'testId';
      const result = new Engineer(
        'testName',
        'testId',
        'testEmail',
        'testGithub'
      ).getId();
      expect(result).toEqual(expected);
    });
  });

  describe('getEmail', () => {
    it('should return the email of the employee that it is called on', () => {
      const expected = 'testEmail';
      const result = new Engineer(
        'testName',
        'testId',
        'testEmail',
        'testGithub'
      ).getEmail();
      expect(result).toEqual(expected);
    });
  });

  describe('getRole', () => {
    it('should return "Engineer"', () => {
      const expected = 'Engineer';
      const result = new Engineer(
        'testName',
        'testId',
        'testEmail',
        'testGithub'
      ).getRole();
      expect(result).toEqual(expected);
    });
  });

  describe('getGithub', () => {
    it('should return the github of the employee that it is called on', () => {
      const expected = 'testGithub';
      const result = new Engineer(
        'testName',
        'testId',
        'testEmail',
        'testGithub'
      ).getGithub();
      expect(result).toEqual(expected);
    });
  });
});
