import { CONSTANTS, CopyrightYear } from '../copyright-year.helper';

describe('[Unit] CopyrightYear', () => {
  describe('getCopyrightYear()', () => {
    it('should return the current year as a string when the initial year is the current year', () => {
      CONSTANTS.initialCopyrightYear = new Date().getFullYear();
      const expectedValue = new Date().getFullYear().toString();

      expect(CopyrightYear.getCopyrightYear()).toEqual(expectedValue);
    });

    it('should return a year range string when the initial year is less than the current year', () => {
      CONSTANTS.initialCopyrightYear = new Date().getFullYear() - 1;
      const expectedValue = `${CONSTANTS.initialCopyrightYear} - ${new Date()
        .getFullYear()
        .toString()}`;

      expect(CopyrightYear.getCopyrightYear()).toEqual(expectedValue);
    });

    it('should return the current year as a string when the initial year is greater than the current year', () => {
      CONSTANTS.initialCopyrightYear = new Date().getFullYear() + 1;
      const expectedValue = new Date().getFullYear().toString();

      expect(CopyrightYear.getCopyrightYear()).toEqual(expectedValue);
    });
  });
});
