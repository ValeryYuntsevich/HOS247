import { ValidatorFn } from '@angular/forms';

import { TMatFormFieldControl } from './mat-form-field-control.type';

export type TInputControl = {
  type: 'input';
  key: string;
  validators: (ValidatorFn | null | undefined)[];
  defaultValue?: string;
  config: TMatFormFieldControl;
};
