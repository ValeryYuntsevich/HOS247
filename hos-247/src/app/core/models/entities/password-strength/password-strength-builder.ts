import { PasswordStrength } from './password-strength';

export class PasswordStrengthBuilder {
  private readonly passwordStrength: PasswordStrength;

  public constructor() {
    this.passwordStrength = new PasswordStrength();
  }

  public addRegexForLowerLetter(password: string): PasswordStrengthBuilder {
    this.passwordStrength.checkOnLowerLetterScore(password);
    return this;
  }

  public addRegexForUpperLetter(password: string): PasswordStrengthBuilder {
    this.passwordStrength.checkOnUpperLetterScore(password);
    return this;
  }

  public addRegexForNumber(password: string): PasswordStrengthBuilder {
    this.passwordStrength.checkOnNumberScore(password);
    return this;
  }

  public addRegexForSpecialCharacter(
    password: string,
  ): PasswordStrengthBuilder {
    this.passwordStrength.checkOnSpecialCharacterScore(password);
    return this;
  }

  public addCheckOnGoodLengthScore(password: string): PasswordStrengthBuilder {
    this.passwordStrength.checkOnGoodLengthScore(password);
    return this;
  }

  public addCheckOnLengthScore(password: string): PasswordStrengthBuilder {
    this.passwordStrength.checkOnLengthScore(password);
    return this;
  }

  public build(): number {
    return (
      this.passwordStrength.lengthScore +
      this.passwordStrength.lowerLetterScore +
      this.passwordStrength.upperLetterScore +
      this.passwordStrength.specialCharacterScore +
      this.passwordStrength.goodLengthScore +
      this.passwordStrength.numberScore
    );
  }
}
