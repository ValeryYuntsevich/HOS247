import { PasswordStrengthBuilder } from './password-strength-builder';

export class PasswordStrengthDirector {
  public constructor(
    private readonly passwordStrengthBuilder: PasswordStrengthBuilder,
  ) {}

  public serveRegularPassword(password: string): number {
    return this.passwordStrengthBuilder
      .addRegexForLowerLetter(password)
      .addRegexForUpperLetter(password)
      .addRegexForNumber(password)
      .addRegexForSpecialCharacter(password)
      .addCheckOnGoodLengthScore(password)
      .addCheckOnLengthScore(password)
      .build();
  }
}
