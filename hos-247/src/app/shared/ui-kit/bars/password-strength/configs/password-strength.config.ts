import * as models from '../models';

export const PASSOWRD_STRENGTH_OPTION_MAPPING: ReadonlyMap<
  models.PasswordStrengthOptions,
  models.PasswordStrengthBarBackground[]
> = new Map<
  models.PasswordStrengthOptions,
  models.PasswordStrengthBarBackground[]
>()
  .set(models.PasswordStrengthOptions.Unknown, [
    models.PasswordStrengthBarBackground.Default,
    models.PasswordStrengthBarBackground.Default,
    models.PasswordStrengthBarBackground.Default,
    models.PasswordStrengthBarBackground.Default,
  ])
  .set(models.PasswordStrengthOptions.WeakPassword, [
    models.PasswordStrengthBarBackground.WeakPassword,
    models.PasswordStrengthBarBackground.Default,
    models.PasswordStrengthBarBackground.Default,
    models.PasswordStrengthBarBackground.Default,
  ])
  .set(models.PasswordStrengthOptions.AveragePassword, [
    models.PasswordStrengthBarBackground.AveragePassword,
    models.PasswordStrengthBarBackground.AveragePassword,
    models.PasswordStrengthBarBackground.Default,
    models.PasswordStrengthBarBackground.Default,
  ])
  .set(models.PasswordStrengthOptions.GoodPassword, [
    models.PasswordStrengthBarBackground.GoodPassword,
    models.PasswordStrengthBarBackground.GoodPassword,
    models.PasswordStrengthBarBackground.GoodPassword,
    models.PasswordStrengthBarBackground.Default,
  ])
  .set(models.PasswordStrengthOptions.VeryGoodPassword, [
    models.PasswordStrengthBarBackground.VeryGoodPassword,
    models.PasswordStrengthBarBackground.VeryGoodPassword,
    models.PasswordStrengthBarBackground.VeryGoodPassword,
    models.PasswordStrengthBarBackground.VeryGoodPassword,
  ]);
