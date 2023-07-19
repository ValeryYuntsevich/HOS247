import * as core from '@angular/core';

import * as core_models from '@core/models';

import * as configs from '../configs';
import * as models from '../models';

// https://howtojs.io/how-to-implement-password-strength-indicator-with-error-messages-in-angular-13/

@core.Component({
  selector: 'app-password-strength-bar',
  templateUrl: './password-strength.component.html',
  changeDetection: core.ChangeDetectionStrategy.OnPush,
})
export class PasswordStrengthComponent implements core.OnChanges {
  @core.Input() public passwordToCheck = '';

  public strengthBarList: models.PasswordStrengthBarBackground[] | undefined =
    [];

  private readonly passwordStrengthList =
    configs.PASSOWRD_STRENGTH_OPTION_MAPPING;
  private readonly passwordStrengthOption = models.PasswordStrengthOptions;

  public ngOnChanges(simpleChanges: core.SimpleChanges): void {
    const password = simpleChanges['passwordToCheck'].currentValue;
    this.checkPasswordStrength('');
    if (password) {
      this.checkPasswordStrength(password);
    }
  }

  private checkPasswordStrength(password: string): void {
    const passwordStrengthBuilder: core_models.PasswordStrengthBuilder =
      new core_models.PasswordStrengthBuilder();
    const passwordStrengthDirector: core_models.PasswordStrengthDirector =
      new core_models.PasswordStrengthDirector(passwordStrengthBuilder);

    this.setBarBackground(
      passwordStrengthDirector.serveRegularPassword(password),
    );
  }

  private setBarBackground(passwordStrength: number): void {
    this.strengthBarList =
      passwordStrength < 3
        ? this.passwordStrengthList.get(this.passwordStrengthOption.Unknown)
        : this.passwordStrengthList.get(passwordStrength);
  }
}
