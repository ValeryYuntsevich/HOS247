export class PasswordStrength {
  public lengthScore = 0;
  public goodLengthScore = 0;
  public lowerLetterScore = 0;
  public upperLetterScore = 0;
  public numberScore = 0;
  public specialCharacterScore = 0;

  private readonly regexForLowerLetter: RegExp = /[a-z]/;
  private readonly regexForUpperLetter: RegExp = /[A-Z]/;
  private readonly regexForNumber: RegExp = /\d/;
  private readonly regexForSpecialCharacter: RegExp =
    /[-+_!@#$%^&*.,?{}()\[\]]/;

  public checkOnLowerLetterScore(password: string): void {
    this.lowerLetterScore = this.regexForLowerLetter.test(password) ? 1 : 0;
  }

  public checkOnUpperLetterScore(password: string): void {
    this.upperLetterScore = this.regexForUpperLetter.test(password) ? 1 : 0;
  }

  public checkOnNumberScore(password: string): void {
    this.numberScore = this.regexForNumber.test(password) ? 1 : 0;
  }

  public checkOnSpecialCharacterScore(password: string): void {
    this.specialCharacterScore = this.regexForSpecialCharacter.test(password)
      ? 1
      : 0;
  }

  public checkOnLengthScore(password: string): void {
    this.lengthScore = password.length > 5 ? 1 : 0;
  }

  public checkOnGoodLengthScore(password: string): void {
    this.goodLengthScore = password.length > 8 ? 1 : 0;
  }
}
